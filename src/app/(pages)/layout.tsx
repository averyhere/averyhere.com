import { SiteHeader } from "@/components/header"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl items-center justify-center content-center h-full">
      <SiteHeader />
      <div className="md:overflow-x-scroll md:h-full md:max-h-full relative block p-2">
        {children}
      </div>
    </div>
  );
}
