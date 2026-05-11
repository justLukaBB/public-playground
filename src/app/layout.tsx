import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hürland-Scuric Immobilien GmbH – Hausverwaltung in Dorsten",
    template: "%s · Hürland Hausverwaltung Dorsten",
  },
  description:
    "Ihre Hausverwaltung mit individuellem und persönlichem Service in Dorsten. WEG-Verwaltung, Mietverwaltung und Sondereigentumsverwaltung – zertifiziert nach §26a WEG.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
