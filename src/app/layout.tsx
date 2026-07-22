import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import BottomNav from '@/components/BottomNav';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'BDS Academy',
  description: 'A responsive learning portal for Bachelor of Dental Surgery students.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar />
              <main className="flex-1 px-4 sm:px-6 md:px-8 py-5 md:py-6 pb-24 md:pb-6 max-w-6xl w-full mx-auto">
                <PageTransition>{children}</PageTransition>
              </main>
            </div>
          </div>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}

