'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, NotebookPen } from 'lucide-react';
import { getReflection, saveReflection } from '@/lib/storage';

interface ReflectionProps {
  chapterId: string;
}

export default function Reflection({ chapterId }: ReflectionProps) {
  const [text, setText] = useState('');
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const existing = getReflection(chapterId);
    if (existing) {
      setText(existing.text);
      setSavedAt(existing.updatedAt);
    } else {
      setText('');
      setSavedAt(null);
    }
  }, [chapterId]);

  const handleSave = () => {
    setSaving(true);
    saveReflection(chapterId, text);
    setSavedAt(new Date().toISOString());
    setTimeout(() => setSaving(false), 500);
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
      <div className="flex items-center gap-2 mb-3">
        <NotebookPen size={18} className="text-brand-600 dark:text-brand-400" />
        <h3 className="font-semibold text-slate-900 dark:text-white">
          What did you learn from this lesson?
        </h3>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a short summary or key points in your own words…"
        rows={5}
        className="w-full resize-none rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
      />
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          {savedAt
            ? `Saved locally · ${new Date(savedAt).toLocaleString()}`
            : 'Your reflection is saved locally on this device.'}
        </p>
        <button
          onClick={handleSave}
          disabled={!text.trim()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {saving ? <CheckCircle2 size={15} /> : null}
          {saving ? 'Saved' : 'Save Reflection'}
        </button>
      </div>
    </div>
  );
}
