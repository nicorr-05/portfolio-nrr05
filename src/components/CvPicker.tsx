import { cvs } from "@/lib/site";
import { Download } from "./icons";
import { Magnetic } from "./Magnetic";

// The round button downloads the primary (FDE) CV; all three versions stay visible beside it.
export function CvPicker() {
  const primary = cvs[0];
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
      <Magnetic>
        <a
          href={primary.href}
          download={primary.file}
          aria-label={`Download CV, ${primary.label} version (PDF)`}
          className="group relative grid size-32 shrink-0 place-items-center overflow-hidden rounded-full bg-ink text-paper no-underline sm:size-40"
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-y-full rounded-[50%] bg-field transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-y-0"
          />
          <span className="relative flex flex-col items-center gap-2 text-[1rem] font-medium group-hover:text-on-field">
            Download CV
            <Download className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </span>
        </a>
      </Magnetic>

      <ul aria-label="CV versions" className="w-full max-w-md">
        {cvs.map((cv) => (
          <li key={cv.href} className="border-t border-rule last:border-b">
            <a href={cv.href} download={cv.file} className="group flex min-h-14 items-center justify-between gap-6 py-3 no-underline">
              <span className="text-[1.02rem] font-medium">{cv.label}</span>
              <span className="inline-flex items-center gap-2 text-[0.9rem] text-muted group-hover:text-ink">
                PDF
                <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
