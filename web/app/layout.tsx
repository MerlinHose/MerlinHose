import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";

export const metadata: Metadata = {
  title: "Milan Hösl - Full-Stack Developer Portfolio",
  description: "Portfolio von Milan Hösl. Full-Stack Developer mit Spezialisierung auf moderne Web-Technologien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
