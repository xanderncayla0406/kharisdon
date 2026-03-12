import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kharisdon | Where Earth & Heart Meet",
  description:
    "Handcrafted, natural skincare made with locally sourced ingredients. Pasture-raised beef tallow, beeswax, and cold-processed goodness — rooted in faith, made with purpose.",
  keywords: [
    "natural skincare",
    "beef tallow balm",
    "beeswax lip balm",
    "handmade skincare",
    "Christian skincare",
    "cold process",
    "locally sourced",
    "natural",
  ],
  openGraph: {
    title: "Kharisdon | Where Earth & Heart Meet",
    description:
      "Handcrafted, natural skincare rooted in faith, made with purpose.",
    url: "https://kharisdon.com",
    siteName: "Kharisdon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
