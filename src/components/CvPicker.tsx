"use client";

import { useId, useState } from "react";
import { cvs } from "@/lib/site";
import { ArrowDown, Download } from "./icons";
import { Magnetic } from "./Magnetic";

// Round "Download CV" button that unfolds the three role-specific versions inline.
export function CvPicker() {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
      <Magnetic>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((v) => !v)}
          className="group relative grid size-32 cursor-pointer place-items-center overflow-hidden rounded-full bg-ink text-paper sm:size-44"
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-y-full rounded-[50%] bg-field transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-y-0"
          />
          <span className="relative flex flex-col items-center gap-2 text-[1rem] font-medium">
            Download CV
            <ArrowDown
              className={`size-5 transition-transform duration-500 ease-[var(--ease-out)] ${open ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </Magnetic>

      <ul
        id={listId}
        aria-label="CV versions"
        hidden={!open}
        className="w-full max-w-md animate-[reveal_600ms_var(--ease-out)] motion-reduce:animate-none"
      >
        {cvs.map((cv) => (
          <li key={cv.href} className="border-t border-rule last:border-b">
            <a
              href={cv.href}
              download={cv.file}
              className="group flex items-center justify-between gap-6 py-4 no-underline"
            >
              <span>
                <span className="block text-[1.05rem] font-medium">{cv.label}</span>
                <span className="text-[0.9rem] text-muted">PDF</span>
              </span>
              <Download className="size-5 text-muted transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-ink" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
