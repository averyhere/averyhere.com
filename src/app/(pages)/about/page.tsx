import type { Metadata } from 'next'

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Avery',
  description: 'Learn a little about Avery.',
}

export default function Page() {
  return (
    <article>
      <h1 className="mb-4 text-3xl font-bold">👋 Hi, I'm Avery</h1>
      <div className='prose prose-sm dark:prose-invert'>
        <p>
          Web developer and marketer by profession, adventurer by passion.
        </p>
        <p>
          With more than a decade of experience in web development, I have spent my career strategizing, building, scaling, and optimizing both the technical aspects of modern websites as well as the marketing focused web development, CRO, and analytics teams behind them. Having equal responsibilities as a leader, marketer, and technologist, I work in the intersection of creativity, analytics, and code.
        </p>
        <p>
          When I'm not nerding out on web and marketing technologies you will likely find me hiking, biking, camping, or skiing in Colorado's beautiful Rocky Mountains.
        </p>
      </div>
    </article>
  );
}
