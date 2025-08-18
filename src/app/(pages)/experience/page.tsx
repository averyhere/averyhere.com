import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { PiArrowSquareOutDuotone } from "react-icons/pi";
import { work_experience } from "@/lib/data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Avery's Past Work Experience",
  description: "Learn a little about Avery's past work experience.",
};

export default async function Page() {
  return (
    <section className="flex flex-col gap-8 md:pt-20">
      <header className="md:flex md:justify-between items-end">
        <h1 className="text-3xl font-bold mb-1">Work Experience</h1>
        <div>
          <Button
            href="/resume/"
            size="xs"
            icon={PiArrowSquareOutDuotone}
            iconPosition="end"
            external
          >
            View printable resume
          </Button>
        </div>
      </header>

      <div className="flex items-center justify-center pl-3">
        <div className="space-y-6 border-l-2 border-dashed">
          {work_experience.length &&
            work_experience?.map((entry) => (
              <article className="relative w-full" key={entry.id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-[15px] h-7 w-7 rounded-full text-purple bg-white dark:bg-black"
                >
                  {/* <!-- created By Joker Banny --> */}
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="ml-6">
                  <header>
                    <h2 className="font-bold inline text-xl">{entry.title}</h2>
                    <span className="inline-block">
                      <span className="sr-only">at</span>&nbsp;
                      <span className="text-purple not-sr-only">@</span>&nbsp;
                      <span className="font-light">{entry.company_name}</span>
                    </span>
                  </header>
                  <p className="mt-1 block text-sm font-light">
                    {entry.start_date} - {entry.end_date}
                  </p>
                  <div
                    className="mt-2 prose-sm prose dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: entry.overview }}
                  />
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
