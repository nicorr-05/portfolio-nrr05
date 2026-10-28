import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

// tone="field" sits over the gray hero; tone="paper" is for inner pages.
export function SiteNav({ tone = "paper" }: { tone?: "field" | "paper" }) {
  const color = tone === "field" ? "text-on-field" : "text-ink";
  return (
    <header className={`relative z-20 ${color}`}>
      <nav aria-label="Main" className="wrap flex items-center justify-between gap-6 py-6 text-[0.95rem] sm:py-8">
        <Link href="/" className="group inline-flex items-baseline gap-1.5 whitespace-nowrap font-medium no-underline">
          <span aria-hidden className="inline-block transition-transform duration-500 ease-[var(--ease-out)] group-hover:rotate-[360deg]">
            ©
          </span>
          <span>Nicolás Restrepo</span>
        </Link>
        <ul className="flex items-center gap-5 sm:gap-9">
          {links.map((l, i) => (
            <li key={l.href} className={i === 0 || i === 3 ? "" : "hidden sm:block"}>
              <Link
                href={l.href}
                className="relative no-underline after:absolute after:left-1/2 after:top-full after:mt-1 after:size-1.5 after:-translate-x-1/2 after:scale-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 hover:after:scale-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
