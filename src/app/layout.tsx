import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessJsonLd } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { GlassFilter } from "@/components/ui/GlassFilter";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessJsonLd()),
          }}
        />

        {/* SVG filter for liquid glass buttons */}
        <GlassFilter />

        {/* Etheral shadow background — fixed behind all content */}
        <PageBackground />

        <Navbar />
        <main className="flex-1 animate-page-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
