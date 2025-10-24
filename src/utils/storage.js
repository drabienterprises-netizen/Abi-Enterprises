export const loadJSON = (key, fallback) => {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
};
export const saveJSON = (key, val) => {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e){ console.warn('localStorage failed', e); }
};
