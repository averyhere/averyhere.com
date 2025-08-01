import { SiteHeader } from "@/components/SiteHeader"
import { Footer } from "@/components/Footer"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-dvh flex flex-col justify-between">
        <div className="grid gap-4 md:grid-cols-12 max-w-4xl mx-auto px-4">
          <SiteHeader className="md:col-span-4" />
          <div className="md:col-start-5 md:col-span-7 flex flex-col justify-center">
            <main id="main-content" className="flex flex-col h-full justify-center">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
