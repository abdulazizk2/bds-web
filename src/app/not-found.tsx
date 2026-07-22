import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">404</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-6">
        This lesson or page could not be found.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
