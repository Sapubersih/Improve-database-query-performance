const cache = new Map<string, any>();

export const setCache = (key: string, data: any, ttl = 60) => {
  cache.set(key, data);

  setTimeout(() => {
    cache.delete(key);
  }, ttl * 1000);
};

export const getCache = (key: string) => {
  return cache.get(key);
};
