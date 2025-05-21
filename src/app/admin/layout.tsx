import { SiteHeader, Footer, AdminNav } from "@/components"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <div className="grid gap-4 md:grid-cols-12 max-w-4xl mx-auto">
        <SiteHeader className="md:col-span-4" />
        <div className="md:mt-20 md:col-start-5 md:col-span-7">
          <AdminNav />
          <main id="main-content">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
