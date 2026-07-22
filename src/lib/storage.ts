import {
  ReflectionRecord,
  QuizResultRecord,
  RecentlyViewedRecord,
  ContinueLearningRecord,
} from './types';

const KEYS = {
  REFLECTIONS: 'bds_reflections',
  QUIZ_RESULTS: 'bds_quiz_results',
  RECENTLY_VIEWED: 'bds_recently_viewed',
  CONTINUE_LEARNING: 'bds_continue_learning',
  THEME: 'bds_theme',
};

function isBrowser() {
  return typeof window !== 'undefined';
}

function readJSON<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(key: string, value: T) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage write failures (e.g. quota exceeded)
  }
}

// ---------- Reflections ----------
export function saveReflection(chapterId: string, text: string) {
  const all = readJSON<Record<string, ReflectionRecord>>(KEYS.REFLECTIONS, {});
  all[chapterId] = { chapterId, text, updatedAt: new Date().toISOString() };
  writeJSON(KEYS.REFLECTIONS, all);
}

export function getReflection(chapterId: string): ReflectionRecord | undefined {
  const all = readJSON<Record<string, ReflectionRecord>>(KEYS.REFLECTIONS, {});
  return all[chapterId];
}

// ---------- Quiz Results ----------
export function saveQuizResult(chapterId: string, score: number, total: number) {
  const all = readJSON<Record<string, QuizResultRecord>>(KEYS.QUIZ_RESULTS, {});
  all[chapterId] = { chapterId, score, total, updatedAt: new Date().toISOString() };
  writeJSON(KEYS.QUIZ_RESULTS, all);
}

export function getQuizResult(chapterId: string): QuizResultRecord | undefined {
  const all = readJSON<Record<string, QuizResultRecord>>(KEYS.QUIZ_RESULTS, {});
  return all[chapterId];
}

// ---------- Recently Viewed ----------
export function recordRecentlyViewed(subjectId: string, chapterId: string, progress: number) {
  const list = readJSON<RecentlyViewedRecord[]>(KEYS.RECENTLY_VIEWED, []);
  const filtered = list.filter((r) => r.chapterId !== chapterId);
  filtered.unshift({ subjectId, chapterId, viewedAt: new Date().toISOString(), progress });
  writeJSON(KEYS.RECENTLY_VIEWED, filtered.slice(0, 8));
}

export function getRecentlyViewed(): RecentlyViewedRecord[] {
  return readJSON<RecentlyViewedRecord[]>(KEYS.RECENTLY_VIEWED, []);
}

// ---------- Continue Learning ----------
export function updateContinueLearning(subjectId: string, chapterId: string, progress: number) {
  const list = readJSON<ContinueLearningRecord[]>(KEYS.CONTINUE_LEARNING, []);
  const filtered = list.filter((r) => r.chapterId !== chapterId);
  filtered.unshift({ subjectId, chapterId, progress, updatedAt: new Date().toISOString() });
  writeJSON(KEYS.CONTINUE_LEARNING, filtered.slice(0, 5));
}

export function getContinueLearning(): ContinueLearningRecord[] {
  return readJSON<ContinueLearningRecord[]>(KEYS.CONTINUE_LEARNING, []);
}

// ---------- Theme ----------
export function getStoredTheme(): 'light' | 'dark' | null {
  if (!isBrowser()) return null;
  const val = window.localStorage.getItem(KEYS.THEME);
  return val === 'dark' || val === 'light' ? val : null;
}

export function setStoredTheme(theme: 'light' | 'dark') {
  writeJSON(KEYS.THEME, theme);
}
