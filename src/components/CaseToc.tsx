"use client";

import { useEffect, useState } from "react";

// Sticky "on this page" list that marks the section being read.
export function CaseToc({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <ul className="sticky top-10 grid gap-1 text-[0.92rem]">
        {items.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className="flex items-center gap-2.5 py-1 text-muted no-underline transition-colors hover:text-ink aria-[current]:text-ink"
            >
              <span
                aria-hidden
                className={`size-1.5 rounded-full bg-current transition-transform duration-300 ${active === h.id ? "scale-100" : "scale-0"}`}
              />
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
