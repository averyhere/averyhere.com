import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { siteConfig } from "@/siteConfig";
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
  title: siteConfig?.deadName ? 'Matt Ondo' : 'Avery Ondo',
  description: siteConfig?.deadName ? 'Matt Ondo\s personal website.' : 'Avery Ondo\'s personal website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${lexendDeca.variable} ${lexendDeca.className} px-4`}
      >
        <a href="#skip-to-main-content" className="sr-only">Skip to main content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
          <p className="text-center"><small>© {siteConfig.deadName === true ? 'Matt' : 'Avery'} Ondo</small></p>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
