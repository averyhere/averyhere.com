import { AdminNav } from "@/components/admin"
export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <div className="w-full flex gap-4">
        <AdminNav />
        <div className="w-full mt-14 p-2">
          {children}
        </div>
      </div>
    </div>
  );
}
