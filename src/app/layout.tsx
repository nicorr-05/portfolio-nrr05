import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const archivo = localFont({
  src: "../fonts/archivo-wdth.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const hanken = localFont({
  src: [
    { path: "../fonts/hanken-grotesk.woff2", style: "normal" },
    { path: "../fonts/hanken-grotesk-italic.woff2", style: "italic" },
  ],
  variable: "--font-hanken",
  weight: "100 900",
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
    { media: "(prefers-color-scheme: light)", color: "#6e7176" },
    { media: "(prefers-color-scheme: dark)", color: "#26282b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
