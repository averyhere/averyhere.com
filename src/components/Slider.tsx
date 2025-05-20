"use client"

import { useState } from "react"
import { HiOutlineExternalLink } from "react-icons/hi"
import { LiaArrowRightSolid, LiaArrowLeftSolid } from "react-icons/lia";

type item = {
  id: number;
  title:  string;
  subtitle: string;
  overview: React.JSX.Element;
  link_url?: string;
  link_text?: string;
}

type Slides = Array<item>;


export const Slider = ({data}: {data: Slides}) => {
  const [current, setCurrent] = useState(0)

  function next() {
    if (current < data.length - 1) {
      setCurrent( current + 1)
    }
  }

  function prev() {
    if (current !== 0) {
      setCurrent( current - 1)
    }
  }

  return (
    <section className="slider">
      {data.map((item, i) => (
        <article key={item.id} className={`slide ${ i === current ? 'active' : 'pointer-events-none' }`} >
        {/* <article className="py-8" key={entry.id}> */}
          <header className="pb-2 mb-2">
            <h2 className="font-bold text-xl mr-2">{item.title}</h2>
            <span className="inline text-purple font-bold">/&zwj;/</span>&nbsp;<span className="inline font-light">{item.subtitle}</span>
          </header>
          <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{__html: item.overview}} />
          {item.link_url && item.link_text && (
            <div className="mt-6 flex justify-end">
              <a className="button" target="_blank" href={item.link_url}>{item.link_text} <HiOutlineExternalLink className="" /></a>
            </div>
          )}
        </article>
      ))}

      <div className="w-full flex justify-between items-center mt-8">
        <button className="button" onClick={() => prev()}><LiaArrowLeftSolid /></button>
        <span>{current + 1} / {data.length}</span>
        <button className="button" onClick={() => next()}><LiaArrowRightSolid /></button>
      </div>
    </section>
  )
}
