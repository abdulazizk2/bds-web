'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayCircle, History, Sparkles } from 'lucide-react';
import { subjects, getSubject, getChapter } from '@/lib/data';
import { getContinueLearning, getRecentlyViewed } from '@/lib/storage';
import { ContinueLearningRecord, RecentlyViewedRecord } from '@/lib/types';
import SubjectCard from '@/components/SubjectCard';

export default function DashboardPage() {
  const [continueLearning, setContinueLearning] = useState<ContinueLearningRecord[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedRecord[]>([]);

  useEffect(() => {
    setContinueLearning(getContinueLearning());
    setRecentlyViewed(getRecentlyViewed());
  }, []);

  return (
    <div className="space-y-10 pb-10">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-6 md:p-8 shadow-card"
      >
        <div className="flex items-center gap-2 text-brand-100 text-sm mb-2">
          <Sparkles size={16} />
          Welcome back
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Continue building your dental knowledge
        </h1>
        <p className="text-brand-100 max-w-2xl text-sm md:text-base">
          Explore lectures across all core BDS subjects, track your progress, and reflect on
          every lesson to strengthen your understanding.
        </p>
      </motion.div>

      {/* Continue Learning */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <PlayCircle size={18} className="text-brand-600 dark:text-brand-400" />
          Continue Learning
        </h2>
        {continueLearning.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-sm text-slate-400 dark:text-slate-500">
            Start a lecture from Subjects to see it here.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {continueLearning.map((record) => {
              const info = getChapter(record.subjectId, record.chapterId);
              if (!info) return null;
              return (
                <Link
                  key={record.chapterId}
                  href={`/subjects/${record.subjectId}/${record.chapterId}`}
                  className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <p className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-1">
                    {info.subject.name}
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white text-sm mb-3 line-clamp-2">
                    {info.chapter.title}
                  </p>
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${Math.round(record.progress * 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    {Math.round(record.progress * 100)}% complete
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Recently Viewed */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <History size={18} className="text-brand-600 dark:text-brand-400" />
          Recently Viewed Lessons
        </h2>
        {recentlyViewed.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-sm text-slate-400 dark:text-slate-500">
            Lessons you view will show up here for quick access.
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recentlyViewed.map((record) => {
              const info = getChapter(record.subjectId, record.chapterId);
              if (!info) return null;
              return (
                <Link
                  key={record.chapterId}
                  href={`/subjects/${record.subjectId}/${record.chapterId}`}
                  className="shrink-0 w-56 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <p className="text-xs font-medium text-slate-400 mb-1">{info.subject.shortName}</p>
                  <p className="font-medium text-slate-900 dark:text-white text-sm line-clamp-2">
                    {info.chapter.title}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Subject Cards */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          All Subjects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, i) => (
            <SubjectCard key={subject.id} subject={subject} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
