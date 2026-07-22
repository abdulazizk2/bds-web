'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Info, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const NAV_ITEMS = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/subjects', label: 'Subjects', icon: BookOpen },
  { href: '/about', label: 'About', icon: Info },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-56 lg:w-64 shrink-0 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 h-screen sticky top-0">
      <div className="flex items-center gap-2 px-6 h-16 border-b border-slate-200 dark:border-slate-800">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
          <Stethoscope size={18} />
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white leading-tight">BDS Academy</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-tight">Learning Portal</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="relative block">
              <div
                className={clsx(
                  'relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-brand-700 dark:text-brand-300'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-brand-50 dark:bg-brand-950"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={18} className="relative" />
                <span className="relative">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs text-slate-400 dark:text-slate-600">
          BDS Academy v1.0
          <br />
          Built for dental students
        </p>
      </div>
    </aside>
  );
}
