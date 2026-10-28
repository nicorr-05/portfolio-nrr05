import Image from "next/image";
import { cvs, site } from "@/lib/site";
import { ArrowUpRight, Download } from "./icons";
import { LocalTime } from "./LocalTime";
import portrait from "../../public/nicolas-restrepo.png";

const links = [
  { href: site.linkedin, label: "LinkedIn", note: "in/nicorr05", external: true },
  { href: site.github, label: "GitHub", note: "nicorr-05", external: true },
  { href: cvs[0].href, label: "CV", note: "PDF, FDE version", download: cvs[0].file },
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

        <a
          href={`mailto:${site.email}`}
          className="group mt-14 flex items-center justify-between gap-6 border-y border-night-rule py-7 no-underline sm:mt-20 sm:py-9"
        >
          <span className="headline min-w-0 text-[clamp(1.6rem,5vw,4rem)]">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-[var(--ease-out)] group-hover:bg-[length:100%_2px]">
              {site.email.split("@")[0]}
              <wbr />@{site.email.split("@")[1]}
            </span>
          </span>
          <ArrowUpRight className="size-8 shrink-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-12" />
        </a>

        <ul className="grid sm:grid-cols-3 sm:gap-10">
          {links.map((l) => (
            <li key={l.href} className="border-b border-night-rule">
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(l.download ? { download: l.download } : {})}
                className="group flex min-h-16 items-center justify-between gap-4 py-5 no-underline"
              >
                <span>
                  <span className="block text-[1.15rem] font-medium">{l.label}</span>
                  <span className="text-[0.9rem] text-night-muted">{l.note}</span>
                </span>
                {l.download ? (
                  <Download className="size-5 text-night-muted transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-on-night" />
                ) : (
                  <ArrowUpRight className="size-5 text-night-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-on-night" />
                )}
                {l.external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 text-[0.9rem] text-night-muted sm:grid-cols-3 sm:gap-10">
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
        <p className="mt-12 text-[0.85rem] text-night-muted">© 2026 Nicolás Restrepo</p>
      </div>
    </footer>
  );
}
