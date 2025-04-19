import { HiOutlineExternalLink } from "react-icons/hi"

export default function Page() {
  return (
    <div className="flex flex-col gap-8 md:mt-20">
      <h2 className="text-3xl font-bold">recent projects</h2>

      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              TailwindCSS Config Generator for Flowbite
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">Figma Plugin</span>
          </div>
          <p>December, 2024</p>
          </header>
          <div>
            <p className="mb-2">Export Figma Variables and Styles to TailwindCSS configurations and/or CSS variables. Supports output for both Tailwind 3 & 4. The output for Tailwind 4 can be used for any project as they are simple CSS variables.</p>
            <p className="mb-2">As most Figma to Tailwind export plugins, it does require the variables & styles to be configured a certain way. This plugin was built based on the way variables and styles are configured in the Flowbite Design System.</p>
            <p className="mb-4">2.8k active users as of April 2025.</p>
            <a className="button" target="_blank" href="https://www.figma.com/community/plugin/1372697425539501289/tailwindcss-config-generator-for-flowbite">Check it out! <HiOutlineExternalLink className="" /></a>
          </div>
      </article>

      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              Bald Yeti
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">WordPress Theme</span>
          </div>
          <p>November, 2024</p>
        </header>
        <div>
          <p className="mb-4">The Bald Yeti theme is purpose-built for Headless WordPress websites. It is intended to be used in conjunction with a separate front-end application and does not contain any front-end assets.</p>
          <a className="button" target="_blank" href="https://github.com/theyetiweb/bald-yeti">Check it out! <HiOutlineExternalLink className="" /></a>
        </div>
      </article>

      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              Previous Personal Website
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">Headless WordPress, NextJS</span>
          </div>
          <p>2023-2024</p>
        </header>
        <div>
        <article>
          <p className="mb-4">The front-end of the previous version of my website which was a headless WordPress website built with FaustJS and the Bald Yeti theme.</p>
          <a className="button" target="_blank" href="https://github.com/averyhere/faustjs-site">Check it out! <HiOutlineExternalLink className="" /></a>
        </article>
        </div>
      </article>

      {/* <MyWorkSlider data={data} /> */}
    </div>
  );
}
