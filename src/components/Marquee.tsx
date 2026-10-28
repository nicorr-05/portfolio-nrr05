"use client";

import { useEffect, useRef } from "react";

// The name drifts sideways for a few seconds after load and again while the page
// scrolls (reversing with scroll direction), then settles. Motion never runs longer
// than ~5s on its own (WCAG 2.2.2) and holds still for reduced motion.
export function Marquee({ text, className = "" }: { text: string; className?: string }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const BASE = 0.55;
    let x = 0;
    let dir = -1;
    let speed = BASE;
    let until = performance.now() + 4500;
    let lastY = window.scrollY;
    let raf = 0;
    let visible = false;

    const tick = (now: number) => {
      // Ease out after the drift window closes instead of stopping abruptly.
      speed = now < until ? BASE : speed * 0.94;
      const half = el.scrollWidth / 2;
      x += dir * speed;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px,0,0)`;
      raf = speed > 0.01 && visible ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) dir = y > lastY ? -1 : 1;
      lastY = y;
      until = performance.now() + 600;
      wake();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
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
    <div className={`overflow-hidden whitespace-nowrap ${className}`} translate="no">
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
