import { ContactFooter } from "@/components/ContactFooter";
import { CvPicker } from "@/components/CvPicker";
import { Hero } from "@/components/Hero";
import { WorkList } from "@/components/WorkList";
import { cases } from "@/content/cases";
import { experience, stack, summary } from "@/content/profile";
import { smart } from "@/lib/typography";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="main">
        {/* Intro + CV */}
        <section id="cv" aria-label="About" className="wrap grid gap-14 py-24 sm:py-32 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-24">
          <p className="max-w-[34ch] text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.32] tracking-[-0.012em] text-pretty">
            {smart(summary)}
          </p>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-[36ch] text-muted">
              My CV in three versions, one for each role I&apos;m open to.
            </p>
            <CvPicker />
          </div>
        </section>

        {/* Work */}
        <section id="work" aria-labelledby="work-title" className="bg-night text-on-night">
          <div className="wrap py-24 sm:py-32">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <h2 id="work-title" className="headline text-[clamp(2rem,4vw,3rem)]">
                Selected work
              </h2>
              <p className="max-w-[40ch] text-night-muted">
                Two problems from Docguía, where I was founding engineer and CTO.
              </p>
            </div>
            <WorkList items={cases} />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" aria-labelledby="experience-title" className="wrap py-24 sm:py-32">
          <h2 id="experience-title" className="headline mb-12 text-[clamp(2rem,4vw,3rem)]">
            Experience
          </h2>
          <ol className="border-b border-rule">
            {experience.map((job) => (
              <li
                key={job.company}
                className="grid gap-3 border-t border-rule py-8 md:grid-cols-[11rem_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10"
              >
                <p className="tabular text-[0.95rem] text-muted md:pt-1">{job.period}</p>
                <div>
                  <h3 className="text-[1.35rem] leading-tight font-semibold tracking-[-0.01em]">{job.company}</h3>
                  <p className="mt-1 text-muted">
                    {job.role}
                    {job.client ? `, client: ${job.client}` : ""}
                  </p>
                </div>
                <p className="max-w-[62ch] text-[1rem] leading-relaxed">{smart(job.detail)}</p>
              </li>
            ))}
          </ol>

          <div className="mt-24 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16">
            <h2 className="headline text-[clamp(2rem,4vw,3rem)]">Stack</h2>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {stack.map((g) => (
                <div key={g.group} className="border-t border-rule pt-4">
                  <dt className="text-[0.9rem] text-muted">{g.group}</dt>
                  <dd className="mt-2 text-[1.1rem] leading-relaxed">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <ContactFooter />
    </>
  );
}
