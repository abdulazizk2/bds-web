import { GraduationCap, BookOpen, Video, NotebookPen, ShieldCheck } from 'lucide-react';
import { subjects } from '@/lib/data';

export const metadata = { title: 'About · BDS Academy' };

const FEATURES = [
  {
    icon: Video,
    title: 'Structured Video Lectures',
    description:
      'Every chapter includes a lecture with full playback controls — play/pause, seek, speed, and fullscreen.',
  },
  {
    icon: BookOpen,
    title: 'Core BDS Subjects',
    description:
      'Covers Operative Dentistry, Endodontics, Prosthodontics, Orthodontics, Oral Surgery, and Pediatric Dentistry.',
  },
  {
    icon: NotebookPen,
    title: 'Reflective Learning',
    description:
      'After each lesson, take a quick quiz and write a short reflection that is saved locally on your device.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsive Anywhere',
    description:
      'Works on desktop, tablet, and mobile browsers. Your quiz scores and reflections persist between sessions.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-10 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white mx-auto">
          <GraduationCap size={26} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">About BDS Academy</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
          BDS Academy is a lightweight desktop learning portal built for Bachelor of Dental
          Surgery students — a focused space to watch lectures, test your understanding, and
          reflect on what you've learned.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-card"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
          Subjects included
        </h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <span
              key={s.id}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${s.color}1a`, color: s.color }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 dark:text-slate-600">
        BDS Academy v1.0 · Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
      </p>
    </div>
  );
}
