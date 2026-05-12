import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merlinhose.dev"),
  title: {
    default: "Merlin Hose - Developer Portfolio",
    template: "%s | Merlin Hose",
  },
  description:
    "Editorial developer portfolio built with Next.js, TypeScript, Fluent UI, Framer Motion, and subtle Lottie animation.",
  keywords: [
    "developer",
    "portfolio",
    "frontend",
    "editorial design",
    "Next.js",
    "TypeScript",
    "web design",
  ],
  authors: [{ name: "Merlin Hose", url: "https://merlinhose.dev" }],
  creator: "Merlin Hose",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merlinhose.dev",
    title: "Merlin Hose - Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merlin Hose - Developer Portfolio",
    description: "A typography-led portfolio blending editorial layout, Fluent UI, and subtle Lottie motion.",
    creator: "@merlinhose",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://merlinhose.dev",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
