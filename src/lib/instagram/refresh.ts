import { getActiveInstagramToken, saveInstagramToken } from './token-store';

export interface RefreshResult {
  success: boolean;
  skipped?: boolean;
  reason?: string;
  expiresAt?: string;
  daysRemaining?: number;
  error?: string;
  httpStatus?: number;
  source?: string;
}

// 15 days in milliseconds
const REFRESH_THRESHOLD_MS = 15 * 24 * 60 * 60 * 1000;

/**
 * Refreshes the long-lived Instagram user token if it is within 15 days of expiry,
 * or if expiration date is unknown (e.g. first bootstrap).
 *
 * @param force If true, ignores the 15-day window and attempts refresh immediately.
 * @param syncEnv If true, forces storage to synchronize with process.env.INSTAGRAM_ACCESS_TOKEN.
 */
export async function refreshInstagramToken(force = false, syncEnv = false): Promise<RefreshResult> {
  const envToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (syncEnv && envToken) {
    console.log('[InstagramRefresh] Syncing storage with process.env.INSTAGRAM_ACCESS_TOKEN...');
    const saved = await saveInstagramToken({
      accessToken: envToken,
      expiresInSeconds: 5184000,
    });
    return {
      success: true,
      expiresAt: new Date(saved.expiresAt).toISOString(),
      daysRemaining: 60,
      source: saved.source,
    };
  }

  const currentTokenData = await getActiveInstagramToken();

  if (!currentTokenData || !currentTokenData.accessToken) {
    return {
      success: false,
      error: 'No active Instagram access token found to refresh.',
    };
  }

  const now = Date.now();

  // If we know the expiration and it has more than 15 days left, skip refresh (Meta requires at least 24h age)
  if (!force && currentTokenData.expiresAt > 0) {
    const timeRemaining = currentTokenData.expiresAt - now;
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    if (timeRemaining > REFRESH_THRESHOLD_MS) {
      console.log(
        `[InstagramRefresh] Token refresh skipped. Token is healthy with ~${daysRemaining} days remaining (expires ${new Date(
          currentTokenData.expiresAt
        ).toISOString()}).`
      );
      return {
        success: true,
        skipped: true,
        daysRemaining,
        expiresAt: new Date(currentTokenData.expiresAt).toISOString(),
        source: currentTokenData.source,
      };
    }
  }

  console.log('[InstagramRefresh] Refresh threshold reached. Calling Meta refresh endpoint...');

  try {
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentTokenData.accessToken}`;

    const res = await fetch(refreshUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    const httpStatus = res.status;

    if (!res.ok) {
      const errorBody = await res.text();
      // Sanitize any possible raw token strings from error text before logging
      let safeErrorSummary = errorBody;
      try {
        const parsed = JSON.parse(errorBody);
        safeErrorSummary = parsed?.error?.message || errorBody;
      } catch {
        // use raw text
      }

      console.error(
        `[InstagramRefresh] Meta API returned HTTP ${httpStatus}: ${safeErrorSummary}`
      );

      return {
        success: false,
        httpStatus,
        error: `Meta API returned HTTP ${httpStatus}: ${safeErrorSummary}`,
      };
    }

    const data = await res.json();

    if (!data || !data.access_token || typeof data.expires_in !== 'number') {
      console.error('[InstagramRefresh] Invalid response schema received from Meta refresh endpoint.');
      return {
        success: false,
        httpStatus,
        error: 'Invalid response schema received from Meta API.',
      };
    }

    // Persist new token
    const saved = await saveInstagramToken({
      accessToken: data.access_token,
      expiresInSeconds: data.expires_in,
    });

    const expiresDateIso = new Date(saved.expiresAt).toISOString();
    const daysValid = Math.floor(data.expires_in / (60 * 60 * 24));

    console.log(
      `[InstagramRefresh] Token refreshed successfully. Valid for ${daysValid} days (expires ${expiresDateIso}). Saved to: ${saved.source}`
    );

    return {
      success: true,
      expiresAt: expiresDateIso,
      daysRemaining: daysValid,
      httpStatus,
      source: saved.source,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    console.error(`[InstagramRefresh] Network error during token refresh: ${message}`);
    return {
      success: false,
      error: `Network error during token refresh: ${message}`,
    };
  }
}
