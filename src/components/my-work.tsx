"use client"

import { useState } from "react"

type data = {
  id: number;
  company:  "string";
  title: "string";
  subhead:  "string";
  body: React.JSX.Element;
}

const data = [
  {
    id: 0,
    company: "EverCommerce",
    title: "Director, Web Development",
    subhead: "August 2019 - January 2025, Denver, CO",
    body: (
      <div>
        <p>
          <strong>Team Building and Leadership :</strong> Established and grew the centralized web development team from scratch.
        </p>
        <p>
          <strong> Collaboration :</strong> Partnered with various departments to build, manage, and maintain approximately 50 WordPress websites.
        </p>
        <p>
          <strong>Technical Solutions :</strong> Developed and implemented solutions for web analytics, lead attribution tracking, and conversion rate optimization.
        </p>
        <p>
          <strong>Innovation :</strong> Pioneered the development of scalable headless WordPress websites, creating comprehensive documentation and an RFC process to facilitate team engagement.
        </p>
        <p>
          <strong>Mentorship :</strong> Guided and trained team members from junior to senior levels on the latest web technologies, including React/Next.js, and marketing technologies like Marketo.
        </p>
      </div>
    )
  },
  {
    id: 1,
    company: "Intelligent Demand",
    title: "Senior Front-End Developer",
    subhead: "February 2015 - August 2019, Denver, CO",
    body: (
      <p>
        Owned the conversion of original visual design concepts to bulletproof front-end implementations. Built, tested and deployed client websites, as well as multi-channel campaigns in marketing automation platforms.
      </p>
    )
  },
  {
    id: 2,
    company: "Grayson Sky",
    title: "Lead Web Developer",
    subhead: "May 2014 - October 2015, Philadelphia, PA",
    body: (
      <p>
        Developed and managed multiple projects. Managed the development team, produced and presented scopes to clients. Assisted in the design of websites and other branding aspects.
      </p>
    )
  },
  {
    id: 3,
    company: "Freelance",
    title: "Web Developer",
    subhead: "December 2010 - May 2014, Philadelphia, PA",
    body: (
      <p>
        Designed and developed custom websites for small businesses. Worked with key stakeholders to establish timelines, milestones, and objectives.
      </p>
    )
  }
]

export const MyWorkSlider = () => {
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
            <div className="flex items-end gap-4">
              <h4 className="text-2xl">{item.company}</h4>
              <span className="text-2xl text-purple">/&zwj;/</span>
              <p className="font-light">{item.title}</p>
            </div>
            <p>{item.subhead}</p>
            </header>
            {item.body}
        </article>
      ))}

      <div className="w-full flex justify-between items-center mt-8">
        <button className="button" onClick={() => prev()}>More Recent</button>
        <span>{current + 1} / {data.length}</span>
        <button className="button" onClick={() => next()}>Previous</button>
      </div>
    </section>
  )
}
