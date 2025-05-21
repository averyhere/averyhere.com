import type { Metadata, Viewport } from "next";
import { Lexend_Deca } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

import ThemeToggle from "@/components/ThemeToggle"
import ThemeProvider from "@/hooks/theme-provider";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0
}

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`relative ${lexendDeca.variable} ${lexendDeca.className}`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only !fixed top-0 left-0 bg-white text-black px-4 py-2 rounded-md z-50 print:hidden">Skip to main content</a>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
