'use client';

import { Sun, Moon, Stethoscope } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      {/* Brand mark shown only when the sidebar is hidden (below md) */}
      <div className="flex md:hidden items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
          <Stethoscope size={16} />
        </div>
        <span className="font-semibold text-slate-900 dark:text-white text-sm">BDS Academy</span>
      </div>

      <div className="hidden md:block" />

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </header>
  );
}
