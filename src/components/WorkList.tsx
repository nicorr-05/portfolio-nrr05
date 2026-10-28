"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/content/cases";
import { ArrowUpRight } from "./icons";
import { CasePreview } from "./figures/CasePreview";

// Big rows; on a fine pointer, a preview of the case's system follows the cursor.
export function WorkList({ items }: { items: CaseStudy[] }) {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = list.current;
    const card = preview.current;
    if (!el || !card) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    // The follow loop runs only while the pointer is over the list.
    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      card.style.transform = `translate3d(${x}px, ${y}px, 0) translate(32px, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const enter = (e: PointerEvent) => {
      x = tx = e.clientX;
      y = ty = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const leave = () => cancelAnimationFrame(raf);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative">
      <ul ref={list} onPointerLeave={() => setActive(null)} className="border-b border-night-rule">
        {items.map((c, i) => (
          <li key={c.slug} className="border-t border-night-rule">
            <Link
              href={`/work/${c.slug}`}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(null)}
              className={`group grid gap-5 py-10 no-underline transition-opacity duration-500 sm:py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-16 ${
                active !== null && active !== i ? "lg:opacity-40" : ""
              }`}
            >
              <h3 className="headline text-[clamp(2.4rem,6.4vw,5.6rem)] transition-transform duration-700 ease-[var(--ease-out)] lg:group-hover:translate-x-4">
                {c.shortTitle}
              </h3>
              <div className="flex flex-col gap-4 text-night-muted">
                <p className="text-[1rem] leading-relaxed text-pretty">{c.summary}</p>
                <p className="flex flex-wrap gap-2">
                  {c.highlights.map((h) => (
                    <span key={h} className="rounded-full border border-night-rule px-3 py-1 text-[0.85rem] text-on-night">
                      {h}
                    </span>
                  ))}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.95rem] text-on-night">
                  Read the case
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
      >
        <div
          className={`w-[25rem] origin-center overflow-hidden rounded-lg bg-field shadow-[0_30px_60px_-24px_rgb(0_0_0/0.6)] transition-[scale,opacity] duration-500 ease-[var(--ease-out)] ${
            active === null ? "scale-50 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {items.map((c, i) => (
            <div key={c.slug} className={active === i ? "block" : "hidden"}>
              <CasePreview slug={c.slug} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
