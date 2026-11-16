"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Silent looping video — Motion direction, "Silent video loop".
 *
 * The rules this implements, in order of how easy each is to get wrong:
 *
 * - Nothing downloads until the card is near the viewport. `preload="none"`
 *   plus an IntersectionObserver that only then sets the <source>, so the
 *   608 KB file never touches a visitor who does not scroll to it.
 * - The poster is a real <img>, not the `poster` attribute, so it is in the
 *   server HTML and paints with the rest of the page. The video fades over it
 *   once it can actually play, which is why there is no layout shift and no
 *   empty black rectangle while it buffers.
 * - Under prefers-reduced-motion the video is never created at all; the poster
 *   is the whole component, as the brief requires.
 * - Playback pauses when scrolled away. A looping video left running off-screen
 *   is a battery and CPU cost for nothing.
 * - `muted` and `playsInline` are both required for autoplay on iOS, and the
 *   file has had its audio track stripped so there is nothing to unmute.
 */
export default function LoopVideo({
  src,
  poster,
  width,
  height,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  /** Describes the footage for anyone who cannot see it. */
  label: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setActive(true);
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Playback is driven from a separate effect rather than from inside the
  // observer callback: on the first intersection the <video> has not been
  // rendered yet, so videoRef.current is still null there and play() silently
  // does nothing. This runs after React has committed the element.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (visible) {
      v.play().catch(() => {
        /* autoplay refused — the poster stays, which is a fine outcome */
      });
    } else {
      v.pause();
    }
  }, [active, visible]);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden rounded-2xl bg-[var(--c-band)] ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- the poster must be
          in the server HTML at a fixed aspect ratio; next/image adds a wrapper
          that complicates stacking it under the video for no benefit here. */}
      <img
        src={poster}
        alt={label}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {active && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
