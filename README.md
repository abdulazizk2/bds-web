# BDS Academy

A responsive web learning portal for Bachelor of Dental Surgery (BDS) students, built with
**Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Works great on desktop, tablet (iPad), and mobile — the layout adapts with a full sidebar on
larger screens and a bottom tab bar on phones/small tablets.

## Features

- Dashboard with welcome message, Continue Learning, Recently Viewed Lessons, and subject cards
- 6 BDS subjects (Operative Dentistry, Endodontics, Prosthodontics, Orthodontics, Oral Surgery,
  Pediatric Dentistry), each with multiple sample chapters
- Custom video player (play/pause, seek bar, playback speed, fullscreen, previous/next lecture)
- End-of-lesson Quick Quiz (3–5 MCQs) showing selected answer, correct answer, and final score
- Reflection box ("What did you learn from this lesson?") saved to local storage, restored on
  the next visit
- Light/dark mode, neon-blue accent on a clean white/light interface, rounded cards, smooth
  Framer Motion transitions
- Fully responsive: sidebar nav on desktop/tablet, bottom tab bar on mobile

## Project Structure

```
bds-academy/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx                     # Dashboard
│   │   ├── about/page.tsx
│   │   └── subjects/
│   │       ├── page.tsx                 # Subject list
│   │       └── [subject]/
│   │           ├── page.tsx             # Subject detail (chapter list)
│   │           └── [chapter]/page.tsx   # Chapter (video, quiz, reflection)
│   ├── components/          # Reusable UI components
│   │   ├── Sidebar.tsx, Topbar.tsx, BottomNav.tsx, PageTransition.tsx
│   │   ├── SubjectCard.tsx, VideoPlayer.tsx
│   │   ├── Quiz.tsx, Reflection.tsx, ChapterView.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/                 # Data & storage
│       ├── types.ts, data.ts, storage.ts
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started (Development)

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the app is a normal Next.js site, so it works in any browser on
any device on your network (use your machine's local IP to test on a phone/iPad, e.g.
`http://192.168.x.x:3000`).

## Hosting Online

This is a standard Next.js app, so it deploys to any Next.js-friendly host with no extra config:

**Vercel (recommended, zero config)**
```bash
npm i -g vercel
vercel
```

**Netlify**
- Connect the repo, set build command `npm run build`, publish directory left default
  (Netlify's Next.js runtime handles the rest).

**Any Node server (self-hosted / VPS / Docker)**
```bash
npm install
npm run build
npm run start   # serves on port 3000 by default
```

Once deployed, the same URL works on desktop, iPad, and mobile browsers — no separate app needed.

## Data & Persistence

- Lesson content (subjects, chapters, quiz questions) lives in `src/lib/data.ts` — replace the
  placeholder `videoUrl` values with your real lecture recordings.
- Reflections, quiz results, "Continue Learning" progress, "Recently Viewed" lessons, and the
  chosen theme are all persisted via `window.localStorage` (see `src/lib/storage.ts`), so they
  survive a page refresh or returning later — per browser/device.

## Extending

- Add a new subject: append an entry to the `subjects` array in `src/lib/data.ts`.
- Add a new chapter: append to that subject's `chapters` array — the route, prev/next
  navigation, and quiz all update automatically.
- Swap in real videos: point `chapter.videoUrl` to an `.mp4` file or any URL supported by
  `react-player` (YouTube, Vimeo, direct file, etc).
