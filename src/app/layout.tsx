import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital David | AI Engineering for the Agentic Era",
  description:
    "We engineer AI systems that work. Agentic AI, LLM engineering, and AI products from Frankfurt. We don't just build AI - we engineer the future.",
  keywords: [
    "AI Engineering",
    "Agentic AI",
    "LLM",
    "Multi-Agent Systems",
    "Frankfurt",
    "Germany",
    "AI Consulting",
    "AI Products",
  ],
  authors: [{ name: "Digital David AG" }],
  openGraph: {
    title: "Digital David | AI Engineering for the Agentic Era",
    description: "We don't just build AI. We engineer the future.",
    url: "https://digitaldavid.io",
    siteName: "Digital David",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital David | AI Engineering",
    description: "We engineer the future.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-deep-space text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
