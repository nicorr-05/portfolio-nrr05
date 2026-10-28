# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), TypeScript, Tailwind CSS. Fully static, no backend. Deployed on Vercel (temporary `*.vercel.app` domain, kept in one constant so a custom domain is a one-line change). Fonts via `next/font`. No heavy animation libraries. Vercel Analytics enabled (user confirmed). Repo: `nicorr-05/portfolio`.

## Users

- **Technical recruiters** at US companies hiring remote from LATAM. They open the link from a LinkedIn message or ATS, spend 30 to 60 seconds, and need to answer: what role, how senior, available when, what timezone, where is the CV.
- **CTOs and founders** evaluating a Forward Deployed Engineer, Tech Lead or Senior Software Engineer. They skim the home, then open one case study to judge how he thinks: does he own problems, make tradeoffs, measure things, write clearly.

## Product Purpose

The personal site of Nicolás Restrepo, built to get hired. Success: a reader leaves knowing he is a Forward Deployed Engineer (full stack and applied AI) who takes ambiguous problems to production, has read at least one case, and either downloads the CV or emails him.

## Positioning

Primary positioning is **Forward Deployed Engineer. Full stack and applied AI.** Tech Lead and Senior SWE are secondary, covered by role-specific CVs. What no neighboring portfolio can copy: two real, specific case studies from Docguía (a healthcare platform he built as founding engineer and CTO to 7,000+ DAU), written as technical prose with real numbers, real AI failures caught, and real tradeoffs. The writing is the proof.

## Operating Context

- Read on desktop between interviews and on phones from LinkedIn.
- Readers compare it against dozens of template portfolios; anything that looks templated or AI-generated is a negative signal.
- CV download is a core action: three PDF variants in `public/cv/` (`nicolas-restrepo-fde.pdf`, `nicolas-restrepo-senior-swe.pdf`, `nicolas-restrepo-tech-lead.pdf`).
- Contact is mailto plus LinkedIn and GitHub. No forms.

## Capabilities and Constraints

- Pages: home, `/work/ai-in-clinical-workflows`, `/work/when-the-bug-isnt-in-your-code`, custom 404.
- Home must be understood in 30 seconds: who he is in two lines, availability, two case cards, condensed experience, stack, contact.
- Case pages: scannable (context, problem, decision, result), next-case navigation, contact CTA at the end. Simple diagrams in SVG/code are allowed.
- All site copy in English. No em dashes or en dashes anywhere. Company name is always "Docguía" (lowercase g).
- Metadata, Open Graph image via `next/og` in the site's design, `sitemap.xml`, `robots.txt`, custom favicon.
- Lighthouse 95+ on performance, accessibility, best practices and SEO. WCAG AA contrast in both themes. `prefers-reduced-motion` respected.
- Light and dark modes, both designed on purpose.

## Brand Commitments

- Name: Nicolás Restrepo (with accent).
- Location shown as "Remote, LATAM (GMT-4)". Never a city.
- Availability: immediate, full time, overlap with US hours.
- Languages: Spanish native, English professional.
- Voice: direct and concrete. No marketing words ("passionate", "innovative", "cutting-edge"), no "Hi, I'm Nicolás 👋".
- Explicit anti-references: purple gradient hero, skill percentage bars, tech logo grids, glassmorphism, identical soft-shadow cards, generic icons.

## Evidence on Hand

- Summary, experience (Docguía, PeakActivity/TradeStation, Alluxi, Encora), stack, and two full case studies supplied verbatim by the user. Case text is used as written; figures are never changed.
- Key figures: 7,000+ DAU; team of four; 100,000+ active users (Alluxi); tens of thousands of dictation calls for a few hundred dollars; 16 eval suites; 57/60 good, 3 escalated, 0 wrong; 293 good vs 7 bad ratings; ~2,500 conversations from ~1,600 users since March 2026; 18 doctors, 2 ISPs, ~3 hours, $0.
- Three CV PDFs (provided by the user into `public/cv/`).
- None exist and must not be fabricated: testimonials, client logos, additional metrics, photos, press.

## Product Principles

1. The writing is the product. Case studies read like good technical prose, with comfortable line length.
2. Thirty-second clarity first, depth on demand.
3. Every claim is real and specific; nothing invented, nothing inflated.
4. Ownership over decoration: show decisions and tradeoffs, not tool lists.
5. Fast and accessible is part of the credibility for an engineer's site.

## Accessibility & Inclusion

WCAG AA in light and dark, full keyboard navigation, reduced-motion support, readable on 390px phones.
