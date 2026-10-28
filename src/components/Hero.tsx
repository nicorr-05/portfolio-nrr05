import Image from "next/image";
import { ArrowDownRight, Globe } from "./icons";
import { LocalTime } from "./LocalTime";
import { Marquee } from "./Marquee";
import { SiteNav } from "./SiteNav";
import portrait from "../../public/nicolas-restrepo.png";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex h-[min(100svh,980px)] min-h-[600px] flex-col overflow-hidden bg-field text-on-field"
    >
      <SiteNav tone="field" />

      <Image
        src={portrait}
        alt="Nicolás Restrepo"
        priority
        placeholder="empty"
        sizes="(max-width: 640px) 140vw, (max-width: 1024px) 90vw, 60vw"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[78%] w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] sm:h-[86%]"
      />

      <div className="wrap relative flex flex-1 flex-col">
        {/* Role: top on phones, mid-right on larger screens */}
        <div className="mt-2 max-w-[17rem] sm:absolute sm:right-[var(--gutter)] sm:top-[24%] sm:mt-0 sm:max-w-[19rem] lg:top-[30%]">
          <ArrowDownRight className="mb-5 hidden size-7 sm:block" />
          <h1 id="hero-title" className="text-[1.65rem] leading-[1.12] font-medium tracking-[-0.015em] text-balance sm:text-[2.1rem]">
            Forward Deployed Engineer
          </h1>
          <p className="mt-3 text-[1rem] leading-snug opacity-90 sm:text-[1.0625rem]">
            Full stack and applied AI.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-[0.95rem]">
            <span aria-hidden className="relative flex size-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-go opacity-60 motion-reduce:hidden" />
              <span className="relative size-2.5 rounded-full bg-go" />
            </span>
            Available now, full time
          </p>
          <p className="mt-1 text-[0.95rem] opacity-90 sm:hidden">
            Remote, LATAM · GMT-4 · <LocalTime />
          </p>
        </div>
      </div>

      {/* Location pill, anchored to the left edge like a tag */}
      <div className="absolute left-0 top-[44%] hidden items-center gap-6 rounded-r-full bg-field-deep py-4 pr-4 pl-[var(--gutter)] text-[0.95rem] leading-tight sm:flex">
        <span>
          Remote, LATAM
          <br />
          <span className="opacity-80">
            GMT-4 · <LocalTime />
          </span>
        </span>
        <span className="grid size-14 place-items-center rounded-full bg-field">
          <Globe className="size-6 animate-[spin_14s_linear_infinite] motion-reduce:animate-none" />
        </span>
      </div>

      <Marquee
        text="Nicolás Restrepo"
        className="display relative pb-[3svh] text-[clamp(6.5rem,19vw,17.5rem)]"
      />
    </section>
  );
}
