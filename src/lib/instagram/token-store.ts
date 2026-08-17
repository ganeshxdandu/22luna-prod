import fs from 'fs';
import path from 'path';

export interface StoredInstagramToken {
  accessToken: string;
  expiresAt: number; // Unix epoch ms
  updatedAt: number; // Unix epoch ms
  initialToken?: string; // The base env token that seeded this entry
  source: 'kv' | 'file' | 'env';
}

const KV_KEY = 'instagram:token';
const LOCAL_DATA_DIR = path.join(process.cwd(), '.data');
const LOCAL_DATA_FILE = path.join(LOCAL_DATA_DIR, 'instagram-token.json');

function getKvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    return { url: url.replace(/\/$/, ''), token };
  }
  return null;
}

/**
 * Reads token from Upstash / Vercel KV REST API if configured.
 */
async function readFromKv(): Promise<StoredInstagramToken | null> {
  const kv = getKvConfig();
  if (!kv) return null;

  try {
    const res = await fetch(`${kv.url}/get/${KV_KEY}`, {
      headers: { Authorization: `Bearer ${kv.token}` },
      cache: 'no-store',
    });

    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !json.result) return null;

    const data = typeof json.result === 'string' ? JSON.parse(json.result) : json.result;
    if (data && data.accessToken) {
      return {
        accessToken: data.accessToken,
        expiresAt: Number(data.expiresAt) || 0,
        updatedAt: Number(data.updatedAt) || Date.now(),
        initialToken: data.initialToken,
        source: 'kv',
      };
    }
  } catch (err) {
    console.error('[TokenStore] Failed to read from KV store:', err instanceof Error ? err.message : 'Unknown error');
  }

  return null;
}

/**
 * Saves token to Upstash / Vercel KV REST API.
 */
async function saveToKv(tokenData: Omit<StoredInstagramToken, 'source'>): Promise<boolean> {
  const kv = getKvConfig();
  if (!kv) return false;

  try {
    const res = await fetch(`${kv.url}/set/${KV_KEY}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${kv.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(JSON.stringify(tokenData)),
      cache: 'no-store',
    });

    return res.ok;
  } catch (err) {
    console.error('[TokenStore] Failed to save to KV store:', err instanceof Error ? err.message : 'Unknown error');
    return false;
  }
}

/**
 * Reads token from local disk file (.data/instagram-token.json).
 */
function readFromFile(): StoredInstagramToken | null {
  try {
    if (!fs.existsSync(LOCAL_DATA_FILE)) return null;
    const raw = fs.readFileSync(LOCAL_DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (parsed && parsed.accessToken) {
      return {
        accessToken: parsed.accessToken,
        expiresAt: Number(parsed.expiresAt) || 0,
        updatedAt: Number(parsed.updatedAt) || Date.now(),
        initialToken: parsed.initialToken,
        source: 'file',
      };
    }
  } catch {
    // Ignore read error on serverless read-only disk
  }
  return null;
}

/**
 * Writes token to local disk file (.data/instagram-token.json).
 */
function saveToFile(tokenData: Omit<StoredInstagramToken, 'source'>): boolean {
  try {
    if (!fs.existsSync(LOCAL_DATA_DIR)) {
      fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(
      LOCAL_DATA_FILE,
      JSON.stringify(
        {
          accessToken: tokenData.accessToken,
          expiresAt: tokenData.expiresAt,
          updatedAt: tokenData.updatedAt,
          initialToken: tokenData.initialToken,
        },
        null,
        2
      ),
      'utf-8'
    );
    return true;
  } catch {
    // Ignore write errors on read-only environments
    return false;
  }
}

/**
 * Retrieves the currently active Instagram access token from the best available store.
 * Automatically synchronizes if INSTAGRAM_ACCESS_TOKEN in environment was updated with a new token.
 */
export async function getActiveInstagramToken(): Promise<StoredInstagramToken | null> {
  const envToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // 1. Try KV Store
  const kvToken = await readFromKv();
  if (kvToken && kvToken.accessToken) {
    // If environment variable was explicitly changed by user to a new token, sync it immediately
    if (envToken && kvToken.initialToken && kvToken.initialToken !== envToken) {
      console.log('[TokenStore] Detected new INSTAGRAM_ACCESS_TOKEN in environment. Updating KV store...');
      return await saveInstagramToken({
        accessToken: envToken,
        expiresInSeconds: 5184000,
        initialToken: envToken,
      });
    }
    return kvToken;
  }

  // 2. Try File Store
  const fileToken = readFromFile();
  if (fileToken && fileToken.accessToken) {
    if (envToken && fileToken.initialToken && fileToken.initialToken !== envToken) {
      console.log('[TokenStore] Detected new INSTAGRAM_ACCESS_TOKEN in environment. Updating local file store...');
      return await saveInstagramToken({
        accessToken: envToken,
        expiresInSeconds: 5184000,
        initialToken: envToken,
      });
    }
    return fileToken;
  }

  // 3. Fallback to Environment Variable
  if (envToken) {
    // Seed initial store entry
    return await saveInstagramToken({
      accessToken: envToken,
      expiresInSeconds: 5184000,
      initialToken: envToken,
    });
  }

  return null;
}

/**
 * Persists a newly refreshed or initialized token into all available stores.
 */
export async function saveInstagramToken(params: {
  accessToken: string;
  expiresInSeconds: number;
  initialToken?: string;
}): Promise<StoredInstagramToken> {
  const now = Date.now();
  const envToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  
  const tokenData = {
    accessToken: params.accessToken,
    expiresAt: now + params.expiresInSeconds * 1000,
    updatedAt: now,
    initialToken: params.initialToken || envToken || undefined,
  };

  // Attempt KV write
  const savedKv = await saveToKv(tokenData);

  // Attempt local file write
  const savedFile = saveToFile(tokenData);

  const source: StoredInstagramToken['source'] = savedKv ? 'kv' : savedFile ? 'file' : 'env';

  return {
    ...tokenData,
    source,
  };
}
