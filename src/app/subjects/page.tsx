import { subjects } from '@/lib/data';
import SubjectCard from '@/components/SubjectCard';

export const metadata = {
  title: 'Subjects · BDS Academy',
};

export default function SubjectsPage() {
  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Subjects</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Core BDS subjects with structured chapters and lectures.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, i) => (
          <SubjectCard key={subject.id} subject={subject} index={i} />
        ))}
      </div>
    </div>
  );
}
