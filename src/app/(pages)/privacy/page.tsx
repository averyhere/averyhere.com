import Link from "next/link";

export default function Page() {
  return (
    <article className="prose prose-sm dark:prose-invert md:mt-32">
      <h1>Privacy Policy</h1>
      <p>
        <em>Effective Date: August 14, 2025</em>
      </p>

      <p>This Privacy Policy applies to:</p>
      <ul>
        <li>
          The website{" "}
          <Link href="https://averyhere.com">https://averyhere.com</Link>{" "}
          (including all subdomains)
        </li>

        <li>The mobile application Just Another Sudoku by Avery Ondo</li>
        <li>The mobile application Simple Point Tracker by Avery Ondo</li>
      </ul>

      <p>
        We value your privacy. As an individual developer, I do not collect,
        store, use, or share any personal information from visitors or users.
      </p>

      <h2>Information Collection</h2>

      <p>
        I do not collect any personal data, usage data, analytics, cookies, or
        any other information from you when you use the website or the app.
      </p>

      <h2>Third-Party Services</h2>

      <p>
        Since no data is collected, no information is shared with any
        third-party services.
      </p>

      <h2>Children’s Privacy</h2>

      <p>
        The website and app are safe for all ages, as no information is
        collected from anyone, including children under 13.
      </p>

      <h2>Changes to This Policy</h2>

      <p>
        If this policy ever changes (for example, if features are added that
        require data collection), the Privacy Policy will be updated, and the
        “Effective Date” will reflect the change.
      </p>

      <h2>Contact</h2>

      <p>
        If you have any questions about this Privacy Policy, you can contact me
        at: <Link href="mailto:hello@averyhere.com">hello@averyhere.com</Link>
      </p>
    </article>
  );
}
