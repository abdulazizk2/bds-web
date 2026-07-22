import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlayCircle, Clock } from 'lucide-react';
import { subjects, getSubject } from '@/lib/data';

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  return { title: subject ? `${subject.name} · BDS Academy` : 'BDS Academy' };
}

export default async function SubjectDetailPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) return notFound();

  return (
    <div className="space-y-6 pb-10">
      <div>
        <p className="text-sm font-medium text-brand-600 dark:text-brand-400 mb-1">Subject</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{subject.name}</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
          {subject.description}
        </p>
      </div>

      <div className="space-y-3">
        {subject.chapters.map((chapter, index) => (
          <Link
            key={chapter.id}
            href={`/subjects/${subject.id}/${chapter.id}`}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white font-semibold text-sm"
              style={{ backgroundColor: subject.color }}
            >
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-900 dark:text-white truncate">
                {chapter.title}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                {chapter.description}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
              <Clock size={14} /> {chapter.duration}
            </div>
            <PlayCircle
              size={22}
              className="text-slate-300 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 shrink-0 transition-colors"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
