import { SiteHeader } from "@/components/SiteHeader"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
      <div className="min-h-dvh flex flex-col justify-between">
        <div className="grid gap-4 md:grid-cols-12 max-w-4xl mx-auto">
          <SiteHeader className="md:col-span-4" />
          <main id="main-content" className="md:mt-20 md:col-start-5 md:col-span-7">
            <h1 className="mb-4 text-3xl font-bold">404</h1>
            <p>
              Sorry! Couldn't find that page.
            </p>
          </main>
        </div>
        <Footer />
      </div>
  );
}
