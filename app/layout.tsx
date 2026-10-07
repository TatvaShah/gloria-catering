import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { business, emailAddress } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Gloria Catering sets beautiful tables in Vaughan and Toronto with finger foods, charcuterie boards and cups, fruit platters, and desserts. Order by Instagram message or email.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${business.name} | Event catering in Vaughan and Toronto`,
    template: `%s | ${business.name}`,
  },
  description,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${business.name} | Vaughan and Toronto`,
    description,
    url: "/",
    siteName: business.name,
    locale: "en_CA",
    type: "website",
    emails: [emailAddress],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6efe8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
