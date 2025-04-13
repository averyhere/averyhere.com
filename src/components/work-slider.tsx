"use client"

import { useState } from "react"
import { LiaArrowRightSolid, LiaArrowLeftSolid } from "react-icons/lia";

type item = {
  id: number;
  company:  string;
  title: string;
  subhead:  string;
  body: React.JSX.Element;
}

type Slides = Array<item>;


export const MyWorkSlider = ({data}: {data: Slides}) => {
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
    <section className="work-slider">
      {data.map((item) => (
        <article key={item.id} className={`slide ${ item.id === current ? 'active' : 'pointer-events-none' }`} >
          <header className="border-0 border-b border-p pb-2 mb-2">
            <div>
              <h4 className="text-2xl">
                {item.company}
              </h4>
              <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
              <span className="inline text-lg font-light">{item.title}</span>
            </div>
            <p>{item.subhead}</p>
            </header>
            {item.body}
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
