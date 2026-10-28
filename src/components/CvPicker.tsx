import { cvs } from "@/lib/site";
import { Download } from "./icons";

// The three role-specific CVs as full-width rows: one tap each, nothing hidden.
export function CvPicker() {
  return (
    <ul aria-label="CV versions" className="w-full">
      {cvs.map((cv) => (
        <li key={cv.href} className="border-t border-rule last:border-b">
          <a
            href={cv.href}
            download={cv.file}
            className="group flex min-h-16 items-center justify-between gap-6 py-4 no-underline"
          >
            <span className="headline text-[clamp(1.35rem,2.2vw,1.75rem)] transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5">
              {cv.label}
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-[0.9rem] text-muted transition-colors group-hover:text-ink">
              PDF
              <Download className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
