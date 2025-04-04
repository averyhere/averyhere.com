import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { AveryOndoLogo, MattOndoLogo } from "@/components/logos"
import { siteConfig } from "@/siteConfig"
import "./globals.css";
import Link from "next/link"
import { Navigation } from "@/components/navigation"
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
          <div className="md:min-h-dvh grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl items-center justify-center p-4">
            <header>
              <h1 className="sr-only">Avery Ondo</h1>
              <Link href="/">
                { siteConfig.deadName === true && (
                  <MattOndoLogo className="w-full h-full max-w-3xs m-auto md:max-w-full" />
                ) || (
                  <AveryOndoLogo className="w-full h-full max-w-3xs m-auto md:max-w-full" />
                )}
              </Link>
              <Navigation variant="horizontal" />
            </header>
            <div>
              {children}
            </div>
          </div>
          <p className="text-center mt-4"><small>© Avery Ondo</small></p>
        </ThemeProvider>
      </body>
    </html>
  );
}
