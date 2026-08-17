import { NextRequest, NextResponse } from 'next/server';
import { refreshInstagramToken } from '@/lib/instagram/refresh';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get('authorization');
  const url = new URL(req.url);
  const keyParam = url.searchParams.get('key');
  const forceParam = url.searchParams.get('force') === 'true';
  const syncEnvParam = url.searchParams.get('sync_env') === 'true';

  // If CRON_SECRET is set in environment, require valid Bearer token or key parameter
  if (cronSecret) {
    const isBearerValid = authHeader === `Bearer ${cronSecret}`;
    const isKeyValid = keyParam === cronSecret;

    if (!isBearerValid && !isKeyValid) {
      return NextResponse.json(
        { error: 'Unauthorized. Invalid or missing CRON_SECRET authorization.' },
        { status: 401 }
      );
    }
  } else if (process.env.NODE_ENV === 'production') {
    // In production, refuse unauthenticated execution if CRON_SECRET is missing
    console.warn('[Cron:InstagramRefresh] CRON_SECRET is not configured in production environment.');
    return NextResponse.json(
      { error: 'CRON_SECRET environment variable must be configured in production.' },
      { status: 500 }
    );
  }

  const result = await refreshInstagramToken(forceParam, syncEnvParam);

  if (!result.success) {
    return NextResponse.json(
      {
        status: 'error',
        message: result.error || 'Token refresh failed.',
        httpStatus: result.httpStatus,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    status: 'ok',
    skipped: result.skipped || false,
    reason: result.reason,
    daysRemaining: result.daysRemaining,
    expiresAt: result.expiresAt,
    storageSource: result.source,
  });
}
