import { notFound } from 'next/navigation';
import { subjects, getChapter } from '@/lib/data';
import ChapterView from '@/components/ChapterView';

export function generateStaticParams() {
  return subjects.flatMap((subject) =>
    subject.chapters.map((chapter) => ({
      subject: subject.id,
      chapter: chapter.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; chapter: string }>;
}) {
  const { subject, chapter } = await params;
  const info = getChapter(subject, chapter);
  return { title: info ? `${info.chapter.title} · BDS Academy` : 'BDS Academy' };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ subject: string; chapter: string }>;
}) {
  const { subject, chapter } = await params;
  const info = getChapter(subject, chapter);
  if (!info) return notFound();

  return (
    <ChapterView
      subject={info.subject}
      chapter={info.chapter}
      prevChapter={info.prevChapter}
      nextChapter={info.nextChapter}
    />
  );
}
