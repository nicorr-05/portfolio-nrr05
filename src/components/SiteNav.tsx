import Link from "next/link";

const links = [
  { href: "/#work", label: "Work", mobile: true },
  { href: "/#experience", label: "Experience", mobile: false },
  { href: "/#cv", label: "CV", mobile: true },
  { href: "/#contact", label: "Contact", mobile: true },
];

// tone="field" sits over the gray hero; tone="paper" is for inner pages.
export function SiteNav({ tone = "paper" }: { tone?: "field" | "paper" }) {
  const color = tone === "field" ? "text-on-field" : "text-ink";
  return (
    <header className={`relative z-20 ${color}`}>
      <nav aria-label="Main" className="wrap flex items-center justify-between gap-4 py-3 text-[0.95rem] sm:py-5">
        <Link href="/" className="group inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap font-medium no-underline">
          <span aria-hidden className="inline-block transition-transform duration-500 ease-[var(--ease-out)] group-hover:rotate-[360deg]">
            ©
          </span>
          <span>Nicolás Restrepo</span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-5">
          {links.map((l) => (
            <li key={l.href} className={l.mobile ? "" : "hidden sm:block"}>
              <Link
                href={l.href}
                className="relative inline-flex min-h-11 min-w-11 items-center justify-center px-1.5 no-underline after:absolute after:bottom-1 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:scale-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 hover:after:scale-100 sm:px-2"
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
