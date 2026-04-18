import type { Metadata } from "next";
import { Accordion, type AccordionItemType } from "@/components/ui";
import { resources } from "@/lib/data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Resources for Transgender Individuals",
  description:
    "A list of resources and tools that I've found useful throughout my journey as a trans woman.",
};

export default async function Page() {
  const sortedResources = resources.sort((a, b) => a.order - b.order);

  return (
    <section className="flex flex-col md:pt-20">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Resources</h2>
        <p className="text-sm font-light">
          Click or tap on a project below to read more about it.
        </p>
      </header>
      <Accordion data={sortedResources as AccordionItemType[]} />
    </section>
  );
}
