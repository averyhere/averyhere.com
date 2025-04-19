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
        <a href="#skip-to-main-content" className="sr-only">Skip to main content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
