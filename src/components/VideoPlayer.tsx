'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize,
  Minimize,
  Gauge,
} from 'lucide-react';

import type ReactPlayerType from 'react-player';

// react-player touches browser-only APIs during render, which breaks Next.js's
// static export prerendering pass if imported directly. Loading it dynamically
// with ssr disabled ensures it only ever mounts in the browser.
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoPlayerProps {
  url: string;
  title: string;
  onEnded?: () => void;
  onProgress?: (played: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VideoPlayer({
  url,
  title,
  onEnded,
  onProgress,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: VideoPlayerProps) {
  const playerRef = useRef<ReactPlayerType>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [ready, setReady] = useState(false);

  const togglePlay = useCallback(() => setPlaying((p) => !p), []);

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => setSeeking(true);

  const handleSeekMouseUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat(e.target.value));
  };

  const toggleFullscreen = () => {
    if (!wrapperRef.current) return;
    if (!document.fullscreenElement) {
      wrapperRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative rounded-2xl overflow-hidden bg-slate-950 shadow-card group"
    >
      <div className="aspect-video w-full relative">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          playbackRate={speed}
          width="100%"
          height="100%"
          onReady={() => setReady(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onDuration={setDuration}
          onEnded={() => {
            setPlaying(false);
            onEnded?.();
          }}
          onProgress={(state) => {
            if (!seeking) {
              setPlayed(state.played);
              onProgress?.(state.played);
            }
          }}
          config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
            Loading lecture…
          </div>
        )}
        {/* Click-to-play overlay */}
        <button
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          {!playing && ready && (
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-lg">
              <Play size={28} className="ml-1" />
            </span>
          )}
        </button>
      </div>

      {/* Controls bar */}
      <div className="bg-slate-950/95 px-2.5 sm:px-4 py-2.5 sm:py-3 space-y-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[11px] sm:text-xs text-slate-300 tabular-nums w-8 sm:w-10">
            {formatTime(played * duration)}
          </span>
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            onTouchEnd={handleSeekMouseUp as any}
            className="flex-1 accent-brand-500 h-1 cursor-pointer"
            aria-label="Seek"
          />
          <span className="text-[11px] sm:text-xs text-slate-300 tabular-nums w-8 sm:w-10">
            {formatTime(duration)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="p-2.5 sm:p-2 rounded-lg text-slate-300 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Previous lecture"
            >
              <SkipBack size={17} />
            </button>
            <button
              onClick={togglePlay}
              className="p-2.5 sm:p-2 rounded-lg text-white bg-brand-600 hover:bg-brand-500"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? <Pause size={17} /> : <Play size={17} />}
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="p-2.5 sm:p-2 rounded-lg text-slate-300 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Next lecture"
            >
              <SkipForward size={17} />
            </button>
          </div>

          <p className="hidden sm:block text-xs text-slate-400 truncate px-2 max-w-[40%]">
            {title}
          </p>

          <div className="flex items-center gap-1.5">
            <div className="relative">
              <button
                onClick={() => setShowSpeedMenu((v) => !v)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-white/10"
                aria-label="Playback speed"
              >
                <Gauge size={15} /> {speed}x
              </button>
              {showSpeedMenu && (
                <div className="absolute bottom-full right-0 mb-2 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-xl z-10">
                  {SPEEDS.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSpeed(s);
                        setShowSpeedMenu(false);
                      }}
                      className={`block w-full px-4 py-1.5 text-xs text-left hover:bg-white/10 ${
                        s === speed ? 'text-brand-400 font-semibold' : 'text-slate-300'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={toggleFullscreen}
              className="p-2.5 sm:p-2 rounded-lg text-slate-300 hover:bg-white/10"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
