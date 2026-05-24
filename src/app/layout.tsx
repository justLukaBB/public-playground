import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hürland-Scuric Immobilien GmbH – Hausverwaltung in Dorsten",
    template: "%s · Hürland Hausverwaltung Dorsten",
  },
  description:
    "Ihre Hausverwaltung mit individuellem und persönlichem Service in Dorsten. WEG-Verwaltung, Mietverwaltung und Sondereigentumsverwaltung.",
  keywords: [
    "Hausverwaltung Dorsten",
    "WEG-Verwaltung",
    "Mietverwaltung",
    "Immobilienverwaltung",
    "Sondereigentum",
    "Hürland",
    "Scuric",
  ],
  metadataBase: new URL("https://www.huerland-hausverwaltung.de"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
