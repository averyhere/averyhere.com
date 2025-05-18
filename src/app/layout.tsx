import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";


import ThemeToggle from "@/components/theme-toggle"
import ThemeProvider from "@/hooks/theme-provider";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
})

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
        <a href="#main-content" className="sr-only focus:not-sr-only !fixed top-0 left-0 bg-white text-black px-4 py-2 rounded-md z-50">Skip to main content</a>
        <ThemeProvider>
          <ThemeToggle />
          <div className="flex flex-col w-full max-w-4xl m-auto">
            <div className="grow h-full flex flex-col md:flex-row gap-8 items-center p-4">
              {children}
            </div>
            <p className="text-center grow-0"><small>© Avery Ondo</small></p>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
