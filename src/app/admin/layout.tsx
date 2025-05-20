import { SiteHeader } from "@/components/SiteHeader"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="w-full h-full flex flex-col self-start mt-8 md:mt-20">
        {children}
      </main>
    </>
  );
}
