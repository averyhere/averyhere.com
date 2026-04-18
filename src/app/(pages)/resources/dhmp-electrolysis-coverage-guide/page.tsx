import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PiArrowFatLineLeftDuotone } from "react-icons/pi";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "DHMP Electrolysis Coverage Guide",
  description:
    "A guide to help members of Denver Health Medical Plan (DHMP) navigate the process for ensuring their electrolysis and/or laser hair removal sessions are covered correctly.",
};

export default function Page() {
  return (
    <>
      <aside>
        <Link
          href="/resources/"
          className="font-light decoration-blue underline-offset-4 decoration-2 hover:underline flex items-center gap-1 mb-4 mt-12"
        >
          <PiArrowFatLineLeftDuotone className="inline-block text-bright-purple" />
          Back
        </Link>
      </aside>
      <article>
        <header className="mb-4">
          <h2 className="text-3xl font-bold">
            Electrolysis/Laser Hair Removal Coverage Guide for DHMP
          </h2>
          <p className="mb-4 font-light">
            For individuals enrolled in a Denver Health Medical Plan
          </p>
          <p className="text-sm font-light">Last updated: April 18, 2026</p>
        </header>
        <section>
          <h2 className="my-4 text-xl font-bold">Introduction & Disclaimer</h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              This guide is intended to help individuals who have a Denver
              Health "Elevate" Medical Plan (DHMP) navigate the process for
              ensuring their electrolysis and/or laser hair removal sessions are
              covered correctly. This is the culmination of months of work,
              conversations with DHMP, medical providers, and electrolysis/laser
              hair removal professionals. It can be a confusing process, so I
              hope you find this useful in your own journey.
            </p>
            <p>
              This guide is based on my personal experience with DHMP. It is not
              applicable to other insurance providers. If you have a different
              insurance provider, reach out to them directly to inquire about
              coverage for electrolysis and laser hair removal, as well as the
              process for obtaining pre-authorization and reimbursement.
            </p>
            <p>
              <strong>
                This guide is not legal or medical advice, and may not be
                construed as such.
              </strong>{" "}
              Rather, consider this a resource to help navigate the process for
              these specific services. Always consult with your healthcare
              provider and insurance company for personalized guidance and
              information about your medical needs and coverage.
            </p>
          </div>
        </section>
        <section>
          <h2 className="my-4 text-xl font-bold">Overview of the Process</h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              The process for getting electrolysis and/or laser hair removal
              covered by DHMP can be broken down into three main steps:
            </p>
            <ol>
              <li>Verify your coverage</li>
              <li>Get a pre-authorization</li>
              <li>Requesting reimbursement</li>
            </ol>
            <p>
              The following resources were provided by DHMP and will be
              referenced throughout this guide:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.denverhealthmedicalplan.org/resource-library?audience=members&resource_type=member_handbooks_eocs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DHMP Resources Page
                </a>
              </li>
              <li>
                <Link
                  href="/PriorAuthorizationRequestForm_2024_Eng.pdf"
                  target="_blank"
                >
                  DHMP Pre-Authorization Form
                </Link>
              </li>
              <li>
                <Link
                  href="/DHMP-Medical-Reimbursement-Form-2026.pdf"
                  target="_blank"
                >
                  DHMP Reimbursement Form
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="my-4 text-xl font-bold">
            Step 1: Check your coverage
          </h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              Before we get too deep, let's double-check your plan details to
              ensure Electrolysis is included in your health plan coverage. This
              is outlined in your member handbook. These handbooks are specific
              to each individual health plan offered by DHMP. It's important to
              reference the relevant one. Refer to the top of your insurance
              card for your specific plan name, then locate your member handbook{" "}
              <a
                href="https://www.denverhealthmedicalplan.org/resource-library?audience=members&resource_type=member_handbooks_eocs"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              Within your handbook find the section titled "Benefits/Coverage
              (What’s covered?)". Below that is a sub-section titled "Gender
              Dysphoria and Gender-Affirming Care" with a list of services. If
              you see "Electrolysis" or "Laser hair removal" listed (depending
              on what you're looking to get covered), then you're good to go! If
              not, you may want to reach out to DHMP to clarify whether it's
              covered under a different name or if there are any specific
              requirements for coverage.
            </p>
          </div>
        </section>
        <section>
          <h2 className="my-4 text-xl font-bold">
            Step 2: Get a pre-authorization
          </h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              DHMP requires pre-authorization in order for electrolysis and
              laser hair removal to be covered. There are two routes to
              obtaining this:
            </p>
            <h3 className="mb-4 text-lg font-bold">
              Route 1: Through your hair removal provider
            </h3>
            <p>
              Contact your electrolysis or laser hair removal provider and ask
              them to submit a pre-authorization request on your behalf. This is
              preferred, but not all providers are capable of doing this.
            </p>
            <p>
              If your provider is able to submit the request, they will likely
              also be able to bill your insurance directly, which is ideal. If
              they are not able to bill your insurance directly, you can still
              go this route to get the pre-authorization, but you will need to
              pay out of pocket for your sessions and then submit a claim to
              DHMP for reimbursement (see below).
            </p>
            <h3 className="mb-4 text-lg font-bold">
              Route 2: Through your primary care provider
            </h3>
            <p>
              Contact your primary care provider and request they submit the
              pre-authorization form. You can download the pre-auth form{" "}
              <Link
                href="/PriorAuthorizationRequestForm_2024_Eng.pdf"
                target="_blank"
              >
                here
              </Link>
              . You will need to provide the following information to your
              provider to fill out the form:
            </p>
            <ul>
              <li>Contact Name (typically the person treating you)</li>
              <li>Facility Name</li>
              <li>
                How much time is needed for the procedure. This is typically
                stated in 30-minute increments. So for example include "1 hour
                per week" or "3 hours per week". This is dependent on your
                treatment plan and goals. It is recommended to talk with your
                hair removal provider to determine the appropriate amount of
                time to request.
              </li>
            </ul>
            <p>
              The form requires additional information such as the CPT code for
              the procedure, diagnostic code, NPI number, and more. Your primary
              care provider should be able to gather this information and able
              to fill it out without your input. Be sure to ask for a copy of
              the completed form for your records.
            </p>
            <p>
              Once the form is submitted, it typically takes about 1-2 weeks for
              DHMP to process the request. You can follow up with DHMP after
              this time frame to check on the status of your pre-authorization.
            </p>
          </div>
        </section>
        <section>
          <h2 className="my-4 text-xl font-bold">Step 3: Getting reimbursed</h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              At your appointments, you'll pay out of pocket and they will give
              you a receipt. All receipts will look different, and you need this
              in addition to the reimbursement form provided by DHMP which you
              can download{" "}
              <Link
                href="/DHMP-Medical-Reimbursement-Form-2026.pdf"
                target="_blank"
              >
                here
              </Link>
              .
            </p>
            <p>
              <strong>Patient information:</strong> <br />
              Fill out the form with your information. It's recommended that you
              fill this out on your computer instead of writing by hand to
              ensure the information is legible.
            </p>
            <p>
              <strong>Provider information:</strong> <br />
              Fill out the provider information section with the details of your
              hair removal provider. This information should be available on
              your pre-authorization form. If you are missing any information,
              reach out to your hair removal provider.
            </p>
            <p>
              The form requires a "Provider Tax ID Number", you can use the NPI
              instead. Just put "NPI: followed by the providers NPI number in
              that box instead of a Tax ID.
            </p>
            <p>
              If your provider does not have an NPI number, you can reach out to
              DHMP to clarify what you should put in this field. It should not
              be necessary. DHMP stated to me in writing:
            </p>
            <blockquote>
              "Unfortunately, the form may have more details than actually
              needed because it is used for Medical services that may need
              reimbursement and not specific to each service that may need
              reimbursement."
            </blockquote>
            <strong>Services:</strong> <br />
            <p>
              You can include up to 4 individual sessions on one form, so you
              can submit less forms if you had multiple sessions. There is a
              time limit for submitting reimbursement requests, so be sure to
              submit your forms promptly. According to DHMP requests must be
              submitted within 180 days of the date of service. However, sending
              them as soon as possible is recommended, especially if you had
              multiple sessions, to ensure you don't miss the deadline for any
              of them. Insurance companies also like reimbursing smaller
              increments instead of large sums, something to keep in mind when
              deciding how many sessions to include on each form.
            </p>
            <p>
              In the "Services" section, list each session you had with all the
              required information:
            </p>
            <ul>
              <li>
                Date of service:{" "}
                <em>(The From and To dates will be the same)</em>
              </li>
              <li>
                Place of service:{" "}
                <em>(DHMP informed me this should be "11")</em>
              </li>
              <li>
                Furnished via audio/video?:{" "}
                <em>(No, unless your provider is magical)</em>
              </li>
              <li>
                CPT/HCPCS Code:{" "}
                <em>
                  (Typically 17380 for electrolysis, refer to your completed
                  pre-authorization form)
                </em>
              </li>
              <li>
                Diagnosis code:{" "}
                <em>
                  (Typically F64.0 or F64.9, refer to your completed
                  pre-authorization form)
                </em>
              </li>
              <li>
                Charge per Unit/Day:{" "}
                <em>
                  (Calculate how much each 30 minutes of service costs, for
                  example if total charge is $100 for one hour this would be
                  $50)
                </em>
              </li>
              <li>
                Number of Units/Days:{" "}
                <em>
                  (Divide your total time by 30 minutes, i.e. 60 minutes / 30
                  minutes = 2 units)
                </em>
              </li>
              <li>
                Total Charge:{" "}
                <em>
                  (The total charge for the session including any applicable
                  taxes)
                </em>
              </li>
            </ul>
            <p>
              Once the form is filled out, signed, and dated, you can submit it
              to DHMP along with your receipts. You must submit these via mail,
              further instructions are included on the first page of the
              reimbursement form. It typically takes a few weeks for DHMP to
              process the reimbursement, and they will send you a check in the
              mail for the reimbursed amount. You should be able to track the
              status of your claim in the DHMP portal or by contacting DHMP
              directly.
            </p>
            <p>
              If you have any issues with reimbursement, you can reach out to
              DHMP for clarification and assistance. Be sure to keep copies of
              all your forms and receipts for your records in case you need to
              reference them in the future.
            </p>
          </div>
        </section>
        <section>
          <h2 className="my-4 text-xl font-bold">Helpful tips</h2>
          <div className="prose prose-sm dark:prose-invert">
            <ul>
              <li>
                Create a spreadsheet to keep track of appointments, the
                information needed for the reimbursement form, and the status of
                each reimbursement request. This helped me stay organized and
                ensure I didn't miss any deadlines for submitting my
                reimbursement requests.
              </li>
              <li>
                Keep a copy of <em>everything</em> you submit to DHMP and any
                correspondence you have with them. This will be helpful in case
                you need to reference it later or if there are any issues with
                your reimbursement requests. I kept a folder on my computer with
                all my forms, receipts, and correspondence with DHMP organized
                by date, which made it easy to find what I needed when I needed
                it.
              </li>
              <li>
                Fill out the form as completely as possible ahead of time on the
                computer. Then just add in the date, charges, and units for each
                session before submitting. This saved me a lot of time and
                effort when it came to filling out the forms. It also allowed me
                to print out several forms at once and update the remainder of
                information by hand as needed (example below).
                <figure>
                  <Image
                    src="/images/services-prefilled.png"
                    alt="Example of reimbursement form filled out ahead of time on computer"
                    width={1054}
                    height={344}
                  />
                  <figcaption className="text-sm font-light text-center mt-2">
                    Example of reimbursement form filled out ahead of time on
                    computer
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
          <h2 className="my-4 text-xl font-bold">Final thoughts</h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              Navigating insurance coverage for electrolysis and laser hair
              removal can be a complex and sometimes frustrating process, but
              with the right information and resources, it is possible to get
              the coverage you need. I hope this guide has been helpful in
              outlining the steps and providing some tips for navigating the
              process with DHMP. Remember to always advocate for yourself and
              don't hesitate to reach out to your insurance provider or
              healthcare provider if you have any questions or need assistance
              along the way.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
