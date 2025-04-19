import Link from "next/link"

export default function Page() {

  return (
    <div className="flex flex-col gap-8 md:mt-20">
      <h2 className="text-3xl font-bold">
        experience
      </h2>
      
      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              EverCommerce
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">Director, Web Development</span>
          </div>
          <p>August 2019 - January 2025 | Denver, CO</p>
        </header>
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
          <Link className="button" href="/experience/ec/">View accomplishments</Link>
        </div>
      </article>
      
      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              Intelligent Demand
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">Senior Front-End Developer</span>
          </div>
          <p>February 2015 - August 2019 | Denver, CO</p>
        </header>
        <div>
          <p className="mb-2">
            Owned the conversion of original visual design concepts to bulletproof front-end implementations. Built, tested and deployed client websites, as well as multi-channel campaigns in marketing automation platforms.
          </p>
        </div>
      </article>
      
      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              Grayson Sky
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">Lead Web Developer</span>
          </div>
          <p>May 2014 - October 2015 | Philadelphia, PA</p>
        </header>
        <div>
          <p className="mb-2">
            Developed and managed multiple projects. Managed the development team, produced and presented scopes to clients. Assisted in the design of websites and other branding aspects.
          </p>
        </div>
      </article>
      
      <article>
        <header className="pb-2 mb-2">
          <div>
            <h4 className="text-2xl">
              Freelance
            </h4>
            <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
            <span className="inline text-lg font-light">Web Developer</span>
          </div>
          <p>December 2010 - May 2014 | Philadelphia, PA</p>
        </header>
        <div>
          <p className="mb-2">
            Designed and developed custom websites for small businesses. Worked with key stakeholders to establish timelines, milestones, and objectives.
          </p>
        </div>
      </article>

    </div>
    
  );
}
