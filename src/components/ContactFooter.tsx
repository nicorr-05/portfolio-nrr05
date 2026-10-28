import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import { LocalTime } from "./LocalTime";
import { Magnetic } from "./Magnetic";
import portrait from "../../public/nicolas-restrepo.png";

const links = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.linkedin, label: "LinkedIn", external: true },
  { href: site.github, label: "GitHub", external: true },
];

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-night text-on-night">
      <div className="wrap pt-24 pb-10 sm:pt-32">
        <div className="flex items-center gap-5 sm:gap-7">
          <span className="relative size-16 shrink-0 overflow-hidden rounded-full bg-field sm:size-24">
            <Image src={portrait} alt="" sizes="96px" className="absolute inset-x-0 top-[6%] h-auto w-full scale-[1.35]" />
          </span>
          <h2 className="headline text-[clamp(3rem,9vw,7.5rem)]">Let&apos;s work together</h2>
        </div>

        <div className="relative mt-12 border-t border-night-rule sm:mt-24">
          <div className="mt-10 sm:absolute sm:right-[6%] sm:top-0 sm:mt-0 sm:-translate-y-1/2">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="group relative grid size-28 place-items-center overflow-hidden rounded-full bg-on-night text-night no-underline sm:size-44"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 translate-y-full rounded-[50%] bg-field transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-y-0"
                />
                <span className="relative text-[1rem] font-medium transition-colors duration-300 group-hover:text-on-field">
                  Email me
                </span>
              </a>
            </Magnetic>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3 sm:mt-28">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2 rounded-full border border-night-rule px-6 py-3.5 text-[1rem] no-underline transition-colors duration-300 hover:border-on-night hover:bg-on-night hover:text-night"
              >
                {l.label}
                {l.external ? <ArrowUpRight className="size-4" /> : null}
                {l.external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 border-t border-night-rule pt-8 text-[0.9rem] text-night-muted sm:grid-cols-3">
          <p>
            <span className="block text-[0.8rem]">Local time</span>
            <span className="text-on-night">
              <LocalTime /> GMT-4, overlap with US hours
            </span>
          </p>
          <p>
            <span className="block text-[0.8rem]">Availability</span>
            <span className="text-on-night">Immediate, full time</span>
          </p>
          <p>
            <span className="block text-[0.8rem]">Languages</span>
            <span className="text-on-night">Spanish (native), English (professional)</span>
          </p>
        </div>
        <p className="mt-10 text-[0.85rem] text-night-muted">© 2026 Nicolás Restrepo</p>
      </div>
    </footer>
  );
}
