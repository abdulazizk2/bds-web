export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl: string;
  quiz: QuizQuestion[];
}

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  icon: string;
  chapters: Chapter[];
}

export interface ReflectionRecord {
  chapterId: string;
  text: string;
  updatedAt: string;
}

export interface QuizResultRecord {
  chapterId: string;
  score: number;
  total: number;
  updatedAt: string;
}

export interface RecentlyViewedRecord {
  subjectId: string;
  chapterId: string;
  viewedAt: string;
  progress: number; // 0 - 1
}

export interface ContinueLearningRecord {
  subjectId: string;
  chapterId: string;
  progress: number; // 0 - 1
  updatedAt: string;
}
