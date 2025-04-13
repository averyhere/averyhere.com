import { MyWorkSlider } from "@/components/work-slider"

export default function Page() {

  const data = [
    {
      id: 0,
      company: "EverCommerce",
      title: "Director, Web Development",
      subhead: "August 2019 - January 2025, Denver, CO",
      body: (
        <div>
          <p className="mb-2">
            <strong>Team Building and Leadership :</strong> Established and grew the centralized web development team from scratch.
          </p>
          <p className="mb-2">
            <strong> Collaboration :</strong> Partnered with various departments to build, manage, and maintain approximately 50 WordPress websites.
          </p>
          <p className="mb-2">
            <strong>Technical Solutions :</strong> Developed and implemented solutions for web analytics, lead attribution tracking, and conversion rate optimization.
          </p>
          <p className="mb-2">
            <strong>Innovation :</strong> Pioneered the development of scalable headless WordPress websites, creating comprehensive documentation and an RFC process to facilitate team engagement.
          </p>
          <p className="mb-2">
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
        <p className="mb-2">
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
        <p className="mb-2">
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
        <p className="mb-2">
          Designed and developed custom websites for small businesses. Worked with key stakeholders to establish timelines, milestones, and objectives.
        </p>
      )
    }
  ]

  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">
        experience
      </h2>
      <MyWorkSlider data={data} />
    </>
    
  );
}
