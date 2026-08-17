import { NextResponse } from 'next/server';
import { getActiveInstagramToken } from '@/lib/instagram/token-store';

export const dynamic = 'force-dynamic';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
}

interface IGMediaItem {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
}

// In-memory cache to minimize external API calls across requests within a 1-hour window
let cachedFeed: InstagramPost[] | null = null;
let lastFetchedTime = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

export async function GET() {
  const tokenData = await getActiveInstagramToken();

  if (!tokenData || !tokenData.accessToken) {
    return NextResponse.json(
      { error: 'Instagram access token not configured', fallback: true },
      { status: 200 }
    );
  }

  const now = Date.now();
  if (cachedFeed && now - lastFetchedTime < CACHE_DURATION) {
    return NextResponse.json({ data: cachedFeed, cached: true });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&limit=12&access_token=${tokenData.accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errText = await response.text();
      let safeMsg = `HTTP ${response.status}`;
      try {
        const parsed = JSON.parse(errText);
        safeMsg = parsed?.error?.message || safeMsg;
      } catch {
        // Ignore JSON parse error
      }
      throw new Error(`Meta Instagram API responded with status ${response.status}: ${safeMsg}`);
    }

    const json = await response.json();
    if (!json || !Array.isArray(json.data)) {
      throw new Error('Invalid response structure from Instagram API');
    }

    const posts: InstagramPost[] = json.data.map((item: IGMediaItem) => ({
      id: item.id,
      mediaUrl: item.media_type === 'VIDEO' ? item.thumbnail_url || item.media_url : item.media_url,
      permalink: item.permalink,
      caption: item.caption || '',
    }));

    cachedFeed = posts;
    lastFetchedTime = now;

    return NextResponse.json({ data: posts });
  } catch (error: unknown) {
    // If the call failed with the stored token, check if process.env.INSTAGRAM_ACCESS_TOKEN has a fresh/different token
    const envToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (envToken && envToken !== tokenData.accessToken) {
      try {
        console.log('[InstagramRoute] Stored token failed, attempting fallback to process.env.INSTAGRAM_ACCESS_TOKEN...');
        const retryUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&limit=12&access_token=${envToken}`;
        const retryRes = await fetch(retryUrl);
        if (retryRes.ok) {
          const retryJson = await retryRes.json();
          if (retryJson && Array.isArray(retryJson.data)) {
            const retryPosts: InstagramPost[] = retryJson.data.map((item: IGMediaItem) => ({
              id: item.id,
              mediaUrl: item.media_type === 'VIDEO' ? item.thumbnail_url || item.media_url : item.media_url,
              permalink: item.permalink,
              caption: item.caption || '',
            }));

            // Save the new working token into store
            const { saveInstagramToken } = await import('@/lib/instagram/token-store');
            await saveInstagramToken({
              accessToken: envToken,
              expiresInSeconds: 5184000,
            });

            cachedFeed = retryPosts;
            lastFetchedTime = now;
            console.log('[InstagramRoute] Successfully recovered using new environment token and synced to store.');
            return NextResponse.json({ data: retryPosts });
          }
        }
      } catch (retryErr) {
        console.error('[InstagramRoute] Retry with environment token failed:', retryErr instanceof Error ? retryErr.message : 'Unknown error');
      }
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Failed to fetch Instagram feed:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to fetch live feed, using fallback', fallback: true },
      { status: 200 }
    );
  }
}
