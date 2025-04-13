import { HiOutlineExternalLink } from "react-icons/hi"
import { MyWorkSlider } from "@/components/work-slider"

export default function Page() {

  const data = [
    {
      id: 0,
      company: "TailwindCSS Config Generator for Flowbite",
      title: "Figma Plugin",
      subhead: "December, 2024",
      body: (
        <article>
          <p className="mb-2">Export Figma Variables and Styles to TailwindCSS configurations and/or CSS variables. Supports output for both Tailwind 3 & 4. The output for Tailwind 4 can be used for any project as they are simple CSS variables.</p>
          <p className="mb-2">As most Figma to Tailwind export plugins, it does require the variables & styles to be configured a certain way. This plugin was built based on the way variables and styles are configured in the Flowbite Design System.</p>
          <p className="mb-4">2.8k active users as of April 2025.</p>
          <a className="button" target="_blank" href="https://www.figma.com/community/plugin/1372697425539501289/tailwindcss-config-generator-for-flowbite">Check it out! <HiOutlineExternalLink className="" /></a>
        </article>
      )
    },
    {
      id: 1,
      company: "Bald Yeti",
      title: "WordPress Theme",
      subhead: "November, 2024",
      body: (
        <article>
          <p className="mb-4">The Bald Yeti theme is purpose-built for Headless WordPress websites. It is intended to be used in conjunction with a separate front-end application and does not contain any front-end assets.</p>
          <a className="button" target="_blank" href="https://github.com/theyetiweb/bald-yeti">Check it out! <HiOutlineExternalLink className="" /></a>
        </article>
      )
    },
    {
      id: 2,
      company: "Previous Personal Website",
      title: "Headless WordPress",
      subhead: "2024",
      body: (
        <article>
          <p className="mb-4">The front-end of the previous version of my website which was a headless WordPress website built with FaustJS and the Bald Yeti theme.</p>
          <a className="button" target="_blank" href="https://github.com/averyhere/faustjs-site">Check it out! <HiOutlineExternalLink className="" /></a>
        </article>
      )
    }
  ]

  return (
    <div className="flex flex-col gap-8">
      <h2 className="mb-4 text-3xl font-bold">recent projects</h2>
      <MyWorkSlider data={data} />
    </div>
  );
}
