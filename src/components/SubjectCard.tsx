'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Drill, Activity, Layers, Move, Scissors, Baby, ChevronRight, LucideIcon } from 'lucide-react';
import { Subject } from '@/lib/types';

const ICON_MAP: Record<string, LucideIcon> = {
  Drill,
  Activity,
  Layers,
  Move,
  Scissors,
  Baby,
};

export default function SubjectCard({ subject, index }: { subject: Subject; index?: number }) {
  const Icon = ICON_MAP[subject.icon] ?? Drill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index ?? 0) * 0.05 }}
      whileHover={{ y: -3 }}
    >
      <Link
        href={`/subjects/${subject.id}`}
        className="group block h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-card hover:shadow-card-hover transition-shadow"
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl mb-4 text-white"
          style={{ backgroundColor: subject.color }}
        >
          <Icon size={20} />
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{subject.name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
          {subject.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400 dark:text-slate-500">
            {subject.chapters.length} chapters
          </span>
          <span className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-medium group-hover:gap-2 transition-all">
            View <ChevronRight size={15} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
