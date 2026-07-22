'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { Subject, Chapter } from '@/lib/types';
import VideoPlayer from './VideoPlayer';
import Quiz from './Quiz';
import Reflection from './Reflection';
import {
  recordRecentlyViewed,
  updateContinueLearning,
  saveQuizResult,
} from '@/lib/storage';

interface ChapterViewProps {
  subject: Subject;
  chapter: Chapter;
  prevChapter?: Chapter;
  nextChapter?: Chapter;
}

export default function ChapterView({
  subject,
  chapter,
  prevChapter,
  nextChapter,
}: ChapterViewProps) {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    setVideoEnded(false);
    recordRecentlyViewed(subject.id, chapter.id, 0);
  }, [subject.id, chapter.id]);

  const handleProgress = useCallback(
    (played: number) => {
      updateContinueLearning(subject.id, chapter.id, played);
    },
    [subject.id, chapter.id]
  );

  const handleEnded = useCallback(() => {
    setVideoEnded(true);
    updateContinueLearning(subject.id, chapter.id, 1);
  }, [subject.id, chapter.id]);

  const goPrev = () => {
    if (prevChapter) router.push(`/subjects/${subject.id}/${prevChapter.id}`);
  };
  const goNext = () => {
    if (nextChapter) router.push(`/subjects/${subject.id}/${nextChapter.id}`);
  };

  return (
    <div className="space-y-6 pb-14 max-w-4xl mx-auto">
      <div>
        <Link
          href={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 hover:underline mb-3"
        >
          <ChevronLeft size={15} /> {subject.name}
        </Link>
        <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          {chapter.title}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{chapter.description}</p>
      </div>

      <VideoPlayer
        url={chapter.videoUrl}
        title={chapter.title}
        onEnded={handleEnded}
        onProgress={handleProgress}
        onPrev={prevChapter ? goPrev : undefined}
        onNext={nextChapter ? goNext : undefined}
        hasPrev={!!prevChapter}
        hasNext={!!nextChapter}
      />

      {/* Previous / Next lecture navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={goPrev}
          disabled={!prevChapter}
          className="flex-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-left disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
        >
          <ChevronLeft size={16} className="text-slate-400 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-slate-400">Previous</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
              {prevChapter?.title ?? 'None'}
            </p>
          </div>
        </button>
        <button
          onClick={goNext}
          disabled={!nextChapter}
          className="flex-1 flex items-center justify-end gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-right disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
        >
          <div className="min-w-0">
            <p className="text-xs text-slate-400">Next</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
              {nextChapter?.title ?? 'None'}
            </p>
          </div>
          <ChevronRight size={16} className="text-slate-400 shrink-0" />
        </button>
      </div>

      {/* End of Lesson */}
      {videoEnded && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center gap-2">
            <GraduationCap size={20} className="text-brand-600 dark:text-brand-400" />
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              End of Lesson Review
            </h2>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Quiz</h3>
            <Quiz
              questions={chapter.quiz}
              onComplete={(score, total) => saveQuizResult(chapter.id, score, total)}
            />
          </div>

          <Reflection chapterId={chapter.id} />
        </motion.section>
      )}
    </div>
  );
}
