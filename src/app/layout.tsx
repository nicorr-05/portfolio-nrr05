import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const archivo = localFont({
  src: "../fonts/archivo-wdth.woff2",
  variable: "--font-archivo",
  weight: "700 800",
  display: "swap",
});

const hanken = localFont({
  src: "../fonts/hanken-grotesk.woff2",
  variable: "--font-hanken",
  weight: "400 600",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name}, Forward Deployed Engineer`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: SITE_URL }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}, Forward Deployed Engineer`,
    description: site.description,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#63666a" },
    { media: "(prefers-color-scheme: dark)", color: "#36383c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
