"use client";

import { useEffect, useRef } from "react";

// A name that drifts sideways and reverses with the scroll direction.
// Runs only while on screen; holds still for reduced motion.
export function Marquee({ text, className = "" }: { text: string; className?: string }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let x = 0;
    let dir = -1;
    let lastY = window.scrollY;
    let raf = 0;
    let running = false;

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) dir = y > lastY ? -1 : 1;
      lastY = y;
    };

    const tick = () => {
      const half = el.scrollWidth / 2;
      x += dir * 0.55;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const unit = (
    <span className="inline-flex shrink-0 items-center">
      <span>{text}</span>
      <span aria-hidden className="mx-[0.22em] inline-block size-[0.14em] translate-y-[-0.02em] rounded-full bg-current" />
    </span>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={track} className="flex w-max will-change-transform" aria-hidden>
        {unit}
        {unit}
        {unit}
        {unit}
      </div>
      <span className="sr-only">{text}</span>
    </div>
  );
}
