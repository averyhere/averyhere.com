import { AveryOndoLogo } from "@/components/logos";
import Link from "next/link";
import { work_experience } from "@/lib/data";
import type { Metadata } from "next";
import "./style.module.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Avery's Resume",
  description: "Avery Ondo's resume.",
  robots: "noindex,nofollow",
};

export default async function Page() {
  return (
    <main className="max-w-[7.5in] m-auto print:max-w-full">
      <section className="w-full grid grid-cols-4 gap-4 py-6">
        <aside className="col-start-1 col-span-1">
          <AveryOndoLogo className="w-full h-auto" />
        </aside>
        <header className="col-start-2 col-span-3">
          <h1 className="font-bold text-lg inline mr-1">Avery Ondo</h1>
          <small>
            <em>she/her</em>
          </small>
          <p className="mb-2 text-sm font-light">
            Developer, Marketer, Adventurer
          </p>
          <address className="not-italic text-sm">
            location:{" "}
            <span className="text-bright-purple dark:text-pink print:text-bright-purple">
              Denver, CO, USA
            </span>
            <br />
            e-mail:{" "}
            <Link
              className="text-bright-purple dark:text-pink print:text-bright-purple"
              href="mailto:hello@averyhere.com"
            >
              hello&#x40;averyhere.com
            </Link>
            <br />
            website:{" "}
            <Link
              className="text-bright-purple dark:text-pink print:text-bright-purple"
              href="/"
            >
              averyhere.com
            </Link>
          </address>
        </header>
      </section>

      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <hr className="h-px bg-purple border-0 dark:bg-purple w-1/12" />
        </div>
        <div className="col-start-2 col-span-3">
          <hr className="h-px bg-transparent border-0 border-b border-dashed border-purple w-full" />
        </div>
      </div>

      <section className="w-full grid grid-cols-4 gap-4 py-6">
        <h2 className="col-start-1 col-span-1 font-bold">Overview</h2>
        <article className="col-start-2 col-span-3 prose-sm prose prose-p:leading-tight prose-p:text-pretty dark:prose-invert print:!prose print:prose-sm">
          <p>
            Web developer and marketer by profession, adventurer by passion.
            With more than a decade of experience in web development, I have
            spent my career strategizing, building, scaling, and optimizing both
            the technical aspects of modern websites as well as the marketing
            focused web development, CRO, and analytics teams behind them.
            Having equal responsibilities as a leader, marketer, and
            technologist, I work in the intersection of creativity, analytics,
            and code.
          </p>
        </article>
      </section>

      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <hr className="h-px bg-purple border-0 dark:bg-purple w-1/12" />
        </div>
        <div className="col-start-2 col-span-3">
          <hr className="h-px bg-transparent border-0 border-b border-dashed border-purple w-full" />
        </div>
      </div>

      <section className="w-full grid grid-cols-4 gap-4 py-6">
        <h2 className="col-start-1 col-span-1 font-bold">Experience</h2>
        <div className="col-start-2 col-span-3 space-y-6">
          {work_experience?.map((entry) => (
            <article
              className="relative w-full print:break-inside-avoid"
              key={`exp_${entry.order}`}
            >
              <header>
                <h3 className="font-bold inline">{entry.title}</h3>
                <span className="inline-block">
                  <span className="sr-only">at</span>&nbsp;
                  <span className="text-purple not-sr-only">@</span>&nbsp;
                  <span className="font-light">{entry.company_name}</span>
                </span>
              </header>
              <time className="mt-1 block text-xs font-light">
                {entry.start_date} - {entry.end_date}
              </time>
              <div
                className="mt-2 prose-sm prose prose-p:leading-tight prose-p:text-pretty dark:prose-invert print:prose print:prose-sm"
                dangerouslySetInnerHTML={{ __html: entry.overview }}
              />
            </article>
          ))}
        </div>
      </section>

      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <hr className="h-px bg-purple border-0 dark:bg-purple w-1/12" />
        </div>
        <div className="col-start-2 col-span-3">
          <hr className="h-px bg-transparent border-0 border-b border-dashed border-purple w-full" />
        </div>
      </div>

      <section className="w-full grid grid-cols-4 gap-4 py-6">
        <h2 className="col-start-1 col-span-1 font-bold">Education</h2>
        <article className="col-start-2 col-span-3">
          <h3 className="font-bold">Clarion University of Pennsylvania</h3>
          <div className="prose-sm prose prose-p:leading-tight prose-p:text-pretty dark:prose-invert print:prose print:prose-sm">
            <p>
              Studies included Information Systems with a focus on web
              development, and Art with a focus on graphic design. Activities
              included the American Marketing Association.
            </p>
          </div>
        </article>
      </section>

      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <hr className="h-px bg-purple border-0 dark:bg-purple w-1/12" />
        </div>
        <div className="col-start-2 col-span-3">
          <hr className="h-px bg-transparent border-0 border-b border-dashed border-purple w-full" />
        </div>
      </div>

      <section className="w-full grid grid-cols-4 gap-4 py-6">
        <h2 className="col-start-1 col-span-1 font-bold">
          Skills & Technologies
        </h2>
        <div className="col-start-2 col-span-3 w-full grid grid-cols-3 gap-4">
          <article>
            <h3 className="font-bold">Web Dev</h3>
            <div className="prose-sm prose prose-li:leading-none prose-li:marker:text-purple dark:prose-invert print:prose print:prose-sm">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>WordPress</li>
                <li>React</li>
                <li>NextJS (+FaustJS)</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </article>
          <article>
            <h3 className="font-bold">Marketing & CRM</h3>
            <div className="prose-sm prose prose-li:leading-none prose-li:marker:text-purple dark:prose-invert print:prose print:prose-sm">
              <ul>
                <li>Marketo</li>
                <li>Hubspot</li>
                <li>Eloqua</li>
                <li>SalesForce</li>
                <li>Unbounce</li>
              </ul>
            </div>
          </article>
          <article>
            <h3 className="font-bold">Analytics & CRO</h3>
            <div className="prose-sm prose prose-li:leading-none prose-li:marker:text-purple dark:prose-invert print:prose print:prose-sm">
              <ul>
                <li>Google Analytics</li>
                <li>Google Tag Manager</li>
                <li>Heap Analytics</li>
                <li>Segment.io</li>
                <li>VWO</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <hr className="h-px bg-purple border-0 dark:bg-purple w-1/12" />
        </div>
        <div className="col-start-2 col-span-3">
          <hr className="h-px bg-transparent border-0 border-b border-dashed border-purple w-full" />
        </div>
      </div>

      <section className="w-full grid grid-cols-4 gap-4 py-6">
        <h2 className="col-start-1 col-span-1 font-bold">Certifications</h2>
        <article className="col-start-2 col-span-3 prose-sm prose prose-ul:list-none prose-ul:p-0 dark:prose-invert print:prose print:prose-sm">
          <ul>
            <li>Marketo Certified Expert, 2015</li>
            <li>Ion Interactive Certification, 2017</li>
            <li>Ion Interactive Expert, 2017</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
