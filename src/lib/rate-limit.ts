const store = new Map<string, { count: number; reset: number }>();

export function checkRateLimit(key: string, maxPerMinute: number): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.reset) {
    store.set(key, { count: 1, reset: now + 60_000 });
    return true;
  }

  if (entry.count >= maxPerMinute) return false;

  entry.count++;
  return true;
}
