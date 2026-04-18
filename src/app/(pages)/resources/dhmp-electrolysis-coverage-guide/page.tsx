import type { Metadata } from "next";
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
        <a
          href="/resources/"
          className="font-light decoration-blue underline-offset-4 decoration-2 hover:underline flex items-center gap-1 mb-4 mt-12"
        >
          <PiArrowFatLineLeftDuotone className="inline-block" />
          Back
        </a>
      </aside>
      <article>
        <header className="mb-4">
          <h2 className="text-3xl font-bold">
            Electrolysis/Laser Hair Removal Coverage Guide for DHMP
          </h2>
          <p className="text-sm font-light">
            For members of Denver Health Medical Plan (DHMP)
          </p>
        </header>
        <section>
          <h2 className="mb-4 text-xl font-bold">Introduction & Disclaimer</h2>
          <p className="text-sm font-light my-2">
            This guide is intended to help folks who have a Denver Health
            Elevate Medical Plan (DHMP) navigate the process for ensuring their
            electrolysis and/or laser hair removal sessions are covered
            correctly. This is the result of my own journey, and is a
            culmination of months of work, conversations with DHMP, medical
            providers, and electrolysis/laser hair removal professionals. It can
            be a confusing process, so I hope you find this useful in your own
            journey.
          </p>
          <p className="text-sm font-light my-2">
            This guide is based on my personal experience with DHMP and may not
            be applicable to other insurance providers. If you have a different
            insurance provider, I recommend reaching out to them directly to
            inquire about coverage for electrolysis and laser hair removal, as
            well as the process for obtaining pre-authorization and
            reimbursement.
          </p>
          <p>
            This guide is not intended as legal or medical advice, but rather as
            a resource to help navigate the process for these specific services.
            Always consult with your healthcare provider and insurance company
            for personalized guidance and information about your medical needs
            and coverage.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold">
            Step 1: Check your coverage
          </h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              Before we get too deep, let's double-check your plan details to
              ensure Electrolysis is included in your health plan coverage. This
              is outlined in your member handbook. These handbooks are specific
              to each individual health plan offered by DHMP and so it's
              important to check the relevant one. To find the name of your
              plan, refer to the top of your insurance card. You can find your
              member handbook{" "}
              <a href="https://www.denverhealthmedicalplan.org/resource-library?audience=members&resource_type=member_handbooks_eocs">
                here
              </a>
              .
            </p>
            <p>
              Once you've found the correct handbook, locate the section titled
              "Benefits/Coverage (What’s covered?)" section. Within this section
              is a sub-section titled "Gender Dysphoria and Gender-Affirming
              Care" with a list of services which are covered. If you see
              "Electrolysis" or "Laser hair removal" listed, then you're good to
              go! If not, you may want to reach out to DHMP to clarify whether
              it's covered under a different name or if there are any specific
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
              <a
                href="/PriorAuthorizationRequestForm_2024_Eng.pdf"
                target="_blank"
              >
                here
              </a>
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
              <a
                href="/DHMP-Medical-Reimbursement-Form-2026.pdf"
                target="_blank"
              >
                here
              </a>
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
            <strong>Services section:</strong> <br />
            <p>In the "Services" section, list each session you had with:</p>
            <ul>
              <li>
                Date of service: <em>(From and To will be the same)</em>
              </li>
              <li>
                Place of service: <em>(DHMP stated this should be "11")</em>
              </li>
              <li>
                Furnished via audio/video?: <em>(No)</em>
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
                  example if charged $100 for one hour this would be $50)
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
              You can include up to 4 individual sessions on one form, so you
              can submit less forms if you had multiple sessions. Just be sure
              to include all the necessary information for each session.
            </p>
            <p>
              Once the form is filled out, you can submit it to DHMP along with
              your receipts. You can submit these via mail. The address and
              instructions for submission are included on the reimbursement
              form. It typically takes a few weeks for DHMP to process the
              reimbursement, and they will send you a check in the mail for the
              reimbursed amount.
            </p>
            <p>
              If you have any issues with reimbursement, you can reach out to
              DHMP for clarification and assistance. Be sure to keep copies of
              all your forms and receipts for your records in case you need to
              reference them in the future.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
