import { SiteHeader } from "@/components/SiteHeader"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="w-full h-full flex flex-col justify-center mt-8">
        {children}
      </main>
    </>
  );
}
