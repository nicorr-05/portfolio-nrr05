import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Marquee } from "@/components/Marquee";
import { SiteNav } from "@/components/SiteNav";

export default function NotFound() {
  return (
    <div data-top-field className="flex min-h-svh flex-col overflow-hidden bg-field text-on-field">
      <SiteNav tone="field" />
      <main id="main" className="flex flex-1 flex-col justify-end">
        <div className="wrap mb-10 max-w-xl">
          <h1 className="text-[1.65rem] leading-tight font-medium tracking-[-0.015em] sm:text-[2.1rem]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-3 opacity-90">The link may be old or mistyped. The work and the contact details are on the home page.</p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-on-field px-6 py-3.5 font-medium text-field-deep no-underline"
          >
            Back to the home page
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <Marquee text="404 · Not found" className="display pb-[3svh] text-[clamp(6.5rem,19vw,17.5rem)]" />
      </main>
    </div>
  );
}
