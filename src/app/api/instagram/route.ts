import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
}

// In-memory cache variables (persists at module scope during runtime)
let cachedFeed: InstagramPost[] | null = null;
let lastFetchedTime = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const businessId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token) {
    return NextResponse.json(
      { error: 'Instagram Access Token not configured in .env', fallback: true },
      { status: 200 }
    );
  }

  const now = Date.now();
  if (cachedFeed && now - lastFetchedTime < CACHE_DURATION) {
    return NextResponse.json({ data: cachedFeed, cached: true });
  }

  try {
    let url = '';
    
    if (businessId) {
      // Professional / Business Graph API path
      url = `https://graph.facebook.com/v19.0/${businessId}/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&limit=12&access_token=${token}`;
    } else {
      // Standard / Legacy Display API path
      url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&limit=12&access_token=${token}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Next.js level caching
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Instagram API responded with status ${response.status}: ${errText}`);
    }

    const json = await response.json();
    if (!json || !json.data) {
      throw new Error('Invalid response structure from Instagram API');
    }

    interface IGMediaItem {
      id: string;
      media_type: string;
      media_url: string;
      permalink: string;
      caption?: string;
      thumbnail_url?: string;
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Failed to fetch Instagram feed:', errorMessage);
    return NextResponse.json(
      { error: errorMessage, fallback: true },
      { status: 200 }
    );
  }
}
