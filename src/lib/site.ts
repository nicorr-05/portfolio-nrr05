// Change SITE_URL once a custom domain is attached in Vercel.
export const SITE_URL = "https://nicorr05.vercel.app";

export const site = {
  name: "Nicolás Restrepo",
  title: "Forward Deployed Engineer. Full stack and applied AI.",
  description:
    "Nicolás Restrepo is a Forward Deployed Engineer: full stack and applied AI. Founding engineer and CTO of Docguía, a healthcare platform with 7,000+ daily active users. Available now, remote from LATAM (GMT-4).",
  email: "nrestrepo.r05@gmail.com",
  linkedin: "https://www.linkedin.com/in/nicorr05/",
  github: "https://github.com/nicorr-05",
  timeZone: "America/Caracas",
} as const;

export const cvs = [
  { label: "Forward Deployed Engineer", href: "/cv/nicolas-restrepo-fde.pdf", file: "Nicolas-Restrepo-CV-FDE.pdf" },
  { label: "Senior Software Engineer", href: "/cv/nicolas-restrepo-senior-swe.pdf", file: "Nicolas-Restrepo-CV-Senior-SWE.pdf" },
  { label: "Tech Lead", href: "/cv/nicolas-restrepo-tech-lead.pdf", file: "Nicolas-Restrepo-CV-Tech-Lead.pdf" },
] as const;
