import { useState } from "react";
import HeroSection from "../../components/ui/HeroSection";

const SubscriptionAgreement = () => {
  const [heroDetails] = useState({
    heroTitle: "Subscription Agreement",
    heroSubtitle:
      "By subscribing to our services, you agree to the following terms and conditions.",
    heroImage:
      "https://picjumbo.com/wp-content/uploads/business-woman-signing-a-contract-2210x1473.jpg",
  });
  return (
    <>
      <HeroSection heroDetails={heroDetails} />
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6"> Subscription Agreement</h1>

        <p className="mb-4 text-sm text-gray-500">
          Effective Date: June 1, 2025
        </p>

        <div className="space-y-6 leading-relaxed">
          <div className="flex flex-col gap-4">
            <p>
              This Subscription Agreement (the "Agreement") is entered into on
              the date of acceptance (the "Effective Date"). It is made and
              entered into by and between Upsell Finlogix ("Upsell Finlogix")
              and the registered Member ("Member" or "you"). Upsell Finlogix and
              Member may be individually referred to in this Agreement as
              "party" and collectively the "parties."
            </p>

            <p>
              This Agreement sets forth the legally binding terms and conditions
              that govern your use of the Platform and/or the Services. By
              accessing the Platform or using the Services, you are accepting
              this Agreement (on behalf of yourself or the entity that you
              represent), and you represent and warrant that you have the right,
              authority, and capacity to enter into this Agreement (on behalf of
              yourself or the entity that you represent). If you do not agree
              with all of the provisions of this Agreement, do not access the
              Platform and/or use the Services
            </p>

            <p>
              You acknowledge and agree that the Services (as defined below) and
              any related communications with us are not a substitute for and do
              not include legal, or tax advice. Upsell Finlogix is not a
              certified public accounting firm and does not provide services
              that require a license to practice public accounting. You further
              recognize that Upsell Finlogix is not a Member of the American
              Institute of Certified Public Accountants (AICPA) and is not
              governed by AICPA rules. The Services provided do not include, and
              should not be relied upon for: (i) audit, attest, examination,
              verification, investigation, or certification; (ii) independent
              advice regarding accounting procedures or the recording,
              presentation, or certification of financial information or data;
              (iii) preparation or certification of reports on audits or
              examinations of books or records of account, balance sheets, and
              other financial, accounting, and related documents; or (iv) legal
              or regulatory advice regarding any of your business practices,
              including concerning their appropriateness or legality. You should
              seek the services of a duly licensed professional in connection
              with any of the foregoing. In particular, in compliance with
              applicable law and accounting standards regarding auditor
              independence, we cannot (and do not) make any representation or
              warranty whether any financial records are compliant with GAAP,
              IFRS, or any other accounting standards or rules.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">I. Definitions</h2>
            <p>
              In this Agreement, the following capitalized terms have the
              following meaning:
            </p>
            <p>"Account" means a user account of a Member of the Platform.</p>
            <p>
              "Aggregate Data" means data that may include Member Data but does
              not identify the Member.
            </p>
            <p>
              "Cloud-based" means using a network of remote servers hosted on
              the Internet to store, manage, and process data, rather than a
              local server or a personal computer.
            </p>
            <p>
              "Member Data" means all data, information, and materials provided
              by Member or Member's licensors to Upsell Finlogix for use in
              connection with the Services, including, without limitation, data
              input, data files, and any other content provided by Member.
            </p>

            <p>
              "Fees" mean the fees paid by Member for Services provided
              hereunder, as outlined in the Fee Schedule on the Platform.
            </p>

            <p>
              "Platform" refers to the specific Upsell Finlogix digital
              Cloud-Based platform (which includes Upsell Finlogix website, ,
              its subdomains, which is hosted by Upsell Finlogix or its service
              provider and made available to Member.
            </p>
            <p>
              "Pricing Plan" means the pricing schedule accepted by the Member
              via the Platform
            </p>
            <p>
              "Services" mean Upsell Finlogix's cloud-based bookkeeping,
              back-office, advisory, human resources, payroll and merchant
              products, support and services through the Platform, technology
              development and consulting services, and other services provided
              by Upsell Finlogix to Members.
            </p>
            <p>
              "User" means any individual who is authorized to use the Services
              by the Member and is supplied a user identification and password,
              including employees, accountants, auditors, and any other
              authorized Member representatives
            </p>
            <p>
              "User Documentation" means the user guides, online help, release
              notes, training materials, and other documentation provided or
              made available by Upsell Finlogix to Member regarding the use or
              operation of the Services.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              II. License and Restrictions
            </h2>
            <p>
              Subject to the terms and conditions of this Agreement, upon the
              Effective Date Upsell Finlogix grants to Member, and Member agrees
              to pay the Fees for, a limited, revocable, non-exclusive,
              non-transferable, non-assignable license to use the Platform
              solely for Member's internal use the License.
            </p>
            <p>You shall not, and shall not permit anyone to:</p>
            <ul className="list-decimal">
              <li>Copy or republish the Platform;</li>
              <li>
                Make the Platform available to any person other than a User
                authorized by you;
              </li>
              <li>
                Use or access the Platform to provide service bureau,
                timesharing, or other computer hosting services to third
                parties;
              </li>
              <li>
                Modify or create derivative works based on the Platform, the
                Services, or User Documentation;
              </li>
              <li>
                Remove, modify, or obscure any copyright, trademark, or other
                proprietary notices contained in the software used to provide
                the Services or presented in the User Documentation;
              </li>
              <li>
                Reverse engineer, decompile, disassemble, or otherwise attempt
                to derive the source code of the software used to provide the
                Platform and/or the Services, except and only to the extent such
                activity is expressly permitted by applicable law.
              </li>
              <li>
                Access the Platform or use the User Documentation in order to
                build a similar or competitive product.
              </li>
            </ul>
            <p>
              You shall not claim any right, title, or interest in or to the
              Upsell Finlogix trade name, logo trademark, or other identifying
              symbols, and shall not use the same except with the express
              written permission of Upsell Finlogix.
            </p>
            <p>
              From the commencement of your business relationship with Upsell
              Finlogix and continuing for a period of twelve (12) months after
              your business relationship with Upsell Finlogix ends, you, your
              affiliates, or agents shall not, directly or indirectly, solicit,
              offer employment or engagement in any full-time, part-time, or
              contractor capacity to, interfere with, or otherwise disrupt the
              business relationship of current or former employees, contractors,
              vendors, agents, or other representatives of Upsell Finlogix. This
              restriction applies to all current individuals and entities in
              these roles, as well as to those who held such roles with Upsell
              Finlogix within the preceding 24 months. Furthermore, You shall
              not encourage any of these individuals or entities to terminate or
              alter their relationship with Upsell Finlogix. In addition to any
              other damages to which Upsell Finlogix may be entitled at law or
              equity, any breach of this section will result in liquidated
              damages equal to 50% of the higher of either (a) the aggregate
              compensation (including bonuses and cost of benefits) paid to such
              employee, contractor, vendor, agent, or other representative
              during the preceding fiscal year, or (b) the aggregate
              compensation paid to such employee, contractor, vendor, agent, or
              other representative during the current fiscal year, annualized
              for a full year's compensation. Since the actual costs and damages
              incurred by Upsell Finlogix as a result of breach of this section
              may be difficult to determine, the parties agree that this
              liquidated damages provision represents a fair estimate of
              potential harm and is not intended as a penalty.
            </p>
            <p>
              You shall not solicit any of our other Member or Users to use
              products and/or services that are competitive with the Services.
            </p>
            <p>
              You acknowledge that all (a) patents, utility models, copyrights,
              database rights and rights in trademarks, trade names, designs,
              know-how, and invention disclosures (whether registered or
              unregistered); (b) applications, reissues, confirmations,
              renewals, extensions, divisions or continuations for any of these
              rights; and (c) all other intellectual property rights and similar
              forms of worldwide protection ("Intellectual Property Rights") in
              and to the Services and/or the Platform and their content are
              owned by Upsell Finlogix or Upsell Finlogix's licensors. Neither
              this Agreement (nor your access to the Platform) transfers to you
              or any third party any rights, title, or interest in or to such
              Intellectual Property Rights, except for the limited access rights
              expressly set forth above. Upsell Finlogix and its licensors
              and/or suppliers reserve all rights not granted in this Agreement.
              There are no implied licenses granted under this Agreement.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              III. Member Obligations
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                (i) Responsibility for Platform Use. You acknowledge and agree
                that you shall be responsible for all uses of the Platform, all
                information used or Member Data displayed on the Platform, all
                reporting from the Platform, and all acts or omissions that
                occur on the Platform in connection with your Account.
              </li>
              <li>
                (ii) Account Information and Responsibility. You agree to
                provide contact information and other information concerning
                your Account, including but not limited to your company name,
                address, telephone number, fax number, and e-mail address. You
                also agree to update such information to keep it true, accurate,
                current, and complete. You are responsible for maintaining the
                confidentiality of your Account information, including your
                password, and for all activity that occurs under your Account.
                You agree to notify Upsell Finlogix immediately of any
                unauthorized use of your Account or password, or any other
                breach of security. You may be held liable for losses incurred
                by Upsell Finlogix or any other user of the Platform and/or the
                Services due to someone else using your password or Account. You
                may not use anyone else's password or account at any time. You
                may not attempt to gain unauthorized access to the Platform.
                Should you attempt to do so, assist others in making such
                attempts, or distribute instructions, software, or tools for
                that purpose, then your Account will be terminated without any
                refund of Fees. You agree to provide us with accurate, current,
                and complete information about yourself and your billing
                information as prompted by the Account registration process. You
                may update any of your Account information, designate a
                different credit card to be billed, or change the applicable
                expiration date on your currently designated credit card, by
                clicking on the account button and selecting the appropriate
                link.
              </li>
              <li>
                (iii) User Access. You shall only permit your Users to access
                and use the Platform and/or the Services on your behalf and
                pursuant to this Agreement. You shall remain responsible and
                liable to Upsell Finlogix for any act or omission of a User that
                would constitute a breach of this Agreement if such act or
                omission were by you.
              </li>
              <li>
                (iv) Prohibited Uses. You may not use any automatic device,
                program, algorithm or methodology, or any similar or equivalent
                manual process, to access, acquire, copy, probe, test, or
                monitor any portion of the Platform, or in any way reproduce or
                circumvent the navigational structure or presentation of the
                Platform, to obtain or attempt to obtain any materials,
                documents or information through any means not purposely made
                available through the Platform. You agree that you will not take
                any action that imposes an unreasonable or disproportionately
                large load on the infrastructure of the Platform or any of the
                systems or networks comprising or connected to the Platform.
              </li>
              <li>
                (v) Upsell Finlogix Right to Terminate. You agree that Upsell
                Finlogix may, at any time, in its sole discretion and without
                prior notice to you, terminate your access to the Platform
                and/or the Services and your Account for any reason, including
                without limitation:
              </li>
              <li>
                (vi) Financial Access and Fraud. You acknowledge and agree that
                to enable Upsell Finlogix to render its Services, you will need
                to provide Upsell Finlogix with login access to your financial
                institutions. Upsell Finlogix shall in no way be responsible for
                the security of your accounts or monitoring accounts for
                suspicious activity or fraud. It is solely your responsibility
                to monitor your bank and credit card activity and to report any
                fraudulent activity to your financial institution.
              </li>
              <li className="pl-5">
                <li>
                  1. Any attempt to gain unauthorized access to the Platform or
                  assistance to others attempting to do so;
                </li>
                <li>
                  2. Any attempt to overcome security measures protecting the
                  Platform;
                </li>
                <li>
                  3. Discontinuance or material modification of the Platform or
                  any Services offered;
                </li>
                <li>4. Violations of this Agreement;</li>
                <li>5. Suspected or actual copyright infringement;</li>
                <li>6. Unexpected operational difficulties; and</li>
                <li>
                  7. Requests by law enforcement or other government agencies.
                </li>
              </li>
              <p>
                You agree that Upsell Finlogix will not be liable to you or any
                third party for termination of your access to the Service.
              </p>

              <li>
                (vi) Your Compliance Obligations. You agree that you are solely
                responsible for complying with all laws, taxes, and tariffs
                applicable to your business operations (collectively "Compliance
                Obligations"), and will hold harmless, protect, and defend
                Upsell Finlogix from any claim, suit, or penalty relating to
                Compliance Obligations.
              </li>
              <li>
                (vii) System Requirements. You are responsible, at your cost, to
                meet the minimum system requirements for use of the Platform
                and/or the Services, including obtaining access to the Internet
                using software and hardware that meets Upsell Finlogix's
                security and performance requirements.
              </li>
              <li>
                (viii) Provision of Materials. You are responsible for the
                collection, organization, editing, inputting, and provision to
                Upsell Finlogix of all Member Data specified in an engagement
                letter and/or a statement of work or requested by Upsell
                Finlogix in writing (including email and/or web or mobile forms)
                for purposes of providing the Services. You agree that all
                required Member Data will be uploaded periodically, but in no
                event less frequently than monthly, to enable Upsell Finlogix to
                provide you with current, meaningful, and useful Services. Your
                failure to timely upload documents and information may delay
                and/or impede Upsell Finlogix's ability to perform the Services,
                and you agree that Upsell Finlogix shall have no liability
                whatsoever for any such delay or impediment. Your obligation to
                pay the Fees to Upsell Finlogix will not be amended, modified,
                or excused in any manner whatsoever (including refund, discount,
                or other financial accommodation) by your failure to comply with
                your obligations in this Agreement or by any delay in the
                performance of the Services by Upsell Finlogix.
              </li>

              <li>
                (x) User Training. Moreover, the Member is responsible for
                ensuring that any of the Member's Users using the Services have
                the requisite training from Upsell Finlogix to properly use the
                Services.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              IV. Future In-App Purchases
            </h2>
            <p>
              Member acknowledges that Upsell Finlogix may offer additional
              products and services for purchase within the Website ("In-Web
              Purchases"), including but not limited to Payroll Registrations,
              Payroll Setup, and 1099 Filings. These In-Web Purchases are
              considered supplementary to the base subscription and may be
              purchased directly through the web. Fees for In-Web Purchases will
              be clearly described within the website at the point of purchase.
              Member agree to pay the applicable fees for any In-Web Purchases
              made. By completing an In-Web Purchase, Member agrees to be bound
              by the terms of this Agreement (as applicable) and any additional
              terms and conditions specific to the In-Web Purchase, which will
              be provided at the point of purchase. At the time of each In-Web
              Purchase, Member will be required to indicate agreement to the
              terms by means such as checking a box or clicking a button
              agreeing to the terms of service. The completion of an In-Web
              Purchase without such consent will not obligate Upsell Finlogix to
              fulfill the purchase. For Member who engage solely through the
              software application without receiving an engagement letter, this
              Agreement and any in-Web consent mechanism, including but not
              limited to any "check the box" type agreement, shall constitute
              the entire agreement governing the client's use of Upsell Finlogix
              products and services, including any InApp Purchases.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">V. Member Data</h2>
            <ul>
              <li>
                5.1. Member Data Ownership. The Member retains exclusive
                ownership of the Member Data.{" "}
              </li>
              <li>
                5.2. License. The Member grants Upsell Finlogix a non-exclusive
                license to use, process, store, display, reproduce, and
                aggregate Member Data. Member is solely responsible for the
                content of Member Data and represents and warrants that it owns
                or has obtained the rights to all of the intellectual property
                rights subsisting in the Member Data, and Member has the right
                to provide Upsell Finlogix the license granted herein to use
                such Member Data pursuant to this Agreement. Member agrees that
                it will not include in Member Data any data, including personal
                information, which is subject to the rights of any third parties
                without first obtaining all required authorizations and rights
                in writing from such third parties. Member agree that Upsell
                Finlogix may use Aggregate Data for any purpose and disclose
                Aggregate Data to third parties.
              </li>
              <li>
                5.3. No Liability. Member acknowledges and agrees that Upsell
                Finlogix shall have no liability whatsoever, regardless of the
                legal theory or basis of liability, for Member Data or any
                Services results or outcomes based on, arising out of, or
                relating to Member Data. Moreover, Upsell Finlogix is not
                responsible for the accuracy of, or liable for the inaccuracy
                of, any third-party sources of data included in Member Data.{" "}
              </li>
              <li>
                5.4. Security of Member Data. Upsell Finlogix maintains
                administrative, physical, and technical safeguards for the
                protection of the security, confidentiality, and integrity of
                Member Data. Those safeguards include but are not limited to,
                measures for preventing access, use, modification, or disclosure
                of Member Data by our personnel except (a) to provide the
                Services and prevent or address service or technical problems,
                (b) as required by law, or (c) you expressly permit in writing
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              {" "}
              VI. Upsell Finlogix Support
            </h2>
            <p>
              Unless otherwise agreed in writing, Upsell Finlogix provides
              technical and business support and appropriate staff for the
              purchased Services during normal business hours (9 AM to 6 PM EST)
              from Monday through Friday. Upsell Finlogix makes the Platform
              available 24 hours a day, 7 days a week, except for any planned
              downtime, or unavailability of the Platform caused by
              circumstances beyond Upsell Finlogix's reasonable control,
              including but not limited to acts of God, natural disasters,
              pandemics, epidemic, quarantines, acts of government, civil
              unrest, acts of terrorism, strikes or other labor problems (other
              than one involving Upsell Finlogix employees), Internet service
              provider failure or delay, non-Upsell Finlogix applications, or
              denial of service attack. Upsell Finlogix is responsible for the
              performance of its personnel (including employees and contractors)
              and their compliance with Upsell Finlogix's obligations under this
              Agreement.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              VII. Warranties and Disclaimers
            </h2>
            <p>
              Upsell Finlogix represents and warrants that the services will be
              provided in a professional manner consistent with general industry
              standards and that the services will be performed substantially in
              accordance with the user documentation provided by Upsell
              Finlogix.
            </p>
            <p>
              However, Upsell Finlogix does not guarantee that the services will
              be error-free or uninterrupted, nor does it warrant that all
              service errors will be corrected.
            </p>
            <p>
              The Member acknowledges that Upsell Finlogix does not control the
              transfer of data over communications facilities, including the
              internet. As such, the services may be subject to limitations,
              delays, and other issues inherent in the use of such communication
              channels.
            </p>
            <p>
              This section sets forth the sole and exclusive warranty provided
              by Upsell Finlogix (whether express or implied) concerning this
              agreement.
            </p>
            <p>
              Neither Upsell Finlogix nor any of its licensors or suppliers
              guarantees that the operation of the services will be
              uninterrupted, virus-free, or error-free. Additionally, neither
              Upsell Finlogix nor any of its service providers shall be held
              responsible or liable for any unauthorized alteration, theft, or
              destruction of Member data, data files, or programs.
            </p>
            <p>
              The Member’s exclusive remedy for any breach of warranty is
              strictly governed and limited by the terms of this agreement
            </p>
            <p>
              We expressly disclaim any and all conditions, representations,
              warranties, or other terms—whether express or implied—including,
              but not limited to, any implied warranties of merchantability,
              title, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              If the information provided to Upsell Finlogix in connection with
              the Services appears unusual or out of the ordinary, Upsell
              Finlogix may, but is not required to, call such a situation to
              Member's attention. Upsell Finlogix is not responsible for the
              discovery of any errors, irregularities, or fraud committed by
              Member or others with whom Member conducts business. Although
              Upsell Finlogix will exercise reasonable care in the preparation
              of all materials, the information, and Data Upsell Finlogix
              compiles are based upon Member Data and Upsell Finlogix does not
              guarantee the accuracy of such information. Upsell Finlogix shall
              not be responsible for any errors or oversights in Member's
              reporting through the Services. Reports and information compiled
              by Upsell Finlogix are prepared exclusively for the Member's use
              and not for the use of any third party.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              VIII. Limitation of Liability
            </h2>
            <p>
              Upsell Finlogix and any licensor or other supplier of Upsell
              Finlogix shall not be liable for any indirect, incidental,
              special, or consequential damages. This includes, but is not
              limited to, damages for lost business, lost profits, loss of data,
              or loss of use of any service incurred by the Member, whether
              acting as a Member or otherwise, or by any third party in
              connection with this agreement—regardless of the nature of the
              claim, including but not limited to contract, tort, or otherwise.
              regardless of the nature of the claim (including negligence), even
              if such damages were foreseeable or if the other party had been
              advised of the possibility of such damages. Advised of the
              possibility of such damages. Upsell Finlogix's aggregate liability
              for damages under this agreement, regardless of the nature of the
              claim (including negligence), shall not exceed the fees paid or
              payable by the Member under this agreement to Upsell Finlogix
              during the three (3) months preceding the date that the claim
              arose.
            </p>
            <p>
              In no event will Upsell Finlogix be liable for any damages
              whatsoever arising from acts or omissions caused by a Member (or
              any person or entity under the Member's control) or outside of
              Upsell Finlogix's control.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">IX. Indemnification</h2>
            <p>
              Member shall defend, indemnify, and hold Upsell Finlogix harmless
              from any damages, losses, claims, or liabilities in connection
              with a third-party claim, suit, or proceeding arising out of (i)
              Member's use of the Services in violation of this Agreement; or
              (ii) Upsell Finlogix's use of Member Data, as permitted under this
              Agreement, infringes or violates the third party's intellectual
              property or other rights.
            </p>
            <p>
              The defense and indemnification obligations of a party under this
              section are subject to:{" "}
            </p>
            <ul>
              <li>
                {" "}
                (i) the indemnifying party being given prompt written notice of
                the claim;
              </li>
              <li>
                (ii) the indemnifying party being given immediate and complete
                control over the defense (and settlement) of the claim; and{" "}
              </li>
              <li>
                (iii) the indemnified party providing cooperation and
                assistance, at the indemnifying party's expense, in the defense
                or settlement of the claim and not taking any action that
                prejudices the indemnifying party's defense of, or response to,
                the claim.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">
              X. Term and Termination
            </h2>
            <div>
              <span>TERM</span>
              <p>
                The term of this Agreement shall be the period outlined in the
                engagement letter or the Pricing Plan which Member accepts when
                Member purchases a Subscription (the "Term"). At the end of the
                Term, the term of the License will automatically renew for an
                additional Term (each such additional term a "Renewal Term"),
                unless the Member sends a written notice to Upsell Finlogix
                within 30 days of the initial Term's expiration date requesting
                non-renewal of the Term. The pricing during any Renewal Term
                will be the same as the previous Term unless Upsell Finlogix
                provides written notice to the Member of a price increase at
                least fifteen (15) days before the end of the Term or any
                Renewal Term, in which case the price increase will be effective
                upon renewal.
              </p>
            </div>
            <div>
              <span>TERMINATION</span>
              <p>
                This Agreement may be terminated and/or the Services suspended
                by Upsell Finlogix on thirty (30) days notice. Upon termination,
                any nonrefundable retainer or other Fees will not be refundable;
                provided, however, that any prepayments made by Member shall be
                refunded on a prorated basis. Notwithstanding the above, if
                Member leaves the Services, Member shall not be entitled to any
                refund whatsoever, including any prepayments.
              </p>
            </div>
            <div>
              <span>Treatment of Retainers Upon Termination</span>
              <p>
                All retainers are non-refundable; provided that any unused
                portion of the nonrefundable retainer shall be applied to any
                future Services or software products. At the end of that
                one-year Term, beginning on the date of processing, all fees,
                including the non-refundable retainer, shall be deemed earned
                regardless of how many Services Member uses during that Term. If
                Member chooses to continue receiving Services via a
                non-refundable retainer, Member must execute a new agreement
                with Upsell Finlogix and pay a new non-refundable retainer.
              </p>
            </div>
            <div>
              <span>Effect of Termination</span>
              <p>
                If this Agreement is terminated by Upsell Finlogix, the parties
                agree that under no circumstances will Upsell Finlogix be
                required to provide transition services to Member beyond the
                value of any remaining non-refundable retainer or other sums
                paid to or held by Upsell Finlogix unless Member enters into a
                separate written engagement letter with Upsell Finlogix for such
                transition services. Depending on the terms of the engagement
                letter, an early termination fee of fifteen percent (15%) of the
                Agreement's value may be used as an early cancellation penalty.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span>Suspension of Services</span>
              <p>
                Upsell Finlogix reserves the right to suspend Services if the
                Member fails to pay any Fees due to Upsell Finlogix under this
                Agreement when due and owing. Suspension of Services shall not
                release the Member from its payment obligations hereunder.
                Member agrees that Upsell Finlogix shall not be liable to Member
                or to any third party for any liabilities, claims, or expenses
                arising from or relating to the suspension of Services or from
                any planned downtime, or unavailability of the Platform either
                resulting from Member's nonpayment or events or circumstances
                caused beyond Upsell Finlogix's reasonable control, including
                but not limited to acts of God, natural disasters, pandemics,
                epidemics, quarantines, war, civil unrest, strikes, lockouts, or
                other labor disputes, governmental actions, or interruptions in
                service due to the actions or inactions of third parties.
              </p>
              <p>
                Upsell Finlogix reserves the right to suspend or terminate
                Services if Upsell Finlogix reasonably concludes that (i)
                Member's or a User's use of the Services is causing immediate
                and ongoing harm to Upsell Finlogix or others; or (ii) Member
                becomes the subject of a petition in bankruptcy or any other
                proceeding relating to insolvency, receivership, liquidation or
                assignment for the benefit of creditors. In the event of
                suspension or termination of Services due to such circumstances,
                Upsell Finlogix shall immediately notify Member of the
                discontinuance of Services and the parties shall promptly
                attempt to resolve the harm. In such case, Upsell Finlogix shall
                not be liable to Member or any third party for any liabilities,
                claims, or expenses arising from or relating to such
                discontinuance of Services.
              </p>
              <p>
                If, at Upsell Finlogix's discretion, Member requires a material
                change in the Services rendered or in the scope of work
                performed under this Agreement, Upsell Finlogix has the option
                to terminate this Agreement. For the avoidance of doubt, upon
                any change in the Services rendered, or in the scope of work
                performed by, Upsell Finlogix to Member, it is understood and
                agreed that Member will remain bound pursuant to this Agreement
                and the Privacy Policy for the Term or Member's engagement with
                Upsell Finlogix, whichever is greater.
              </p>
              <p>
                Upon discontinuation of the Services, all Fees paid by Member
                are non-refundable and Upsell Finlogix is released from any
                liability for use of any of Member's logins to operational
                software accessing Member's financial records and accounts
                provided to Upsell Finlogix by Member in connection with
                Member's use of the Services.
              </p>
            </div>
            <div>
              <span>Member's Responsibilities Upon Termination</span>
              <p>
                Member is responsible for terminating, deactivating, or changing
                credentials of all Member's Users to the Platform and any access
                to third-party services, including access to any of Member's
                financial institutions, and systems upon discontinuation of the
                Services or the termination or discontinuance of any User.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold mb-2">XI. Fees and Payment</h2>
            <p>
              Member agrees to pay all Fees due hereunder under the Fee Schedule
              provided on Upsell Finlogix's Platform. All payments of Fees are
              due and payable on the due date designated on the invoice.
            </p>
            <p>
              If Member executes an annual non-refundable retainer, all Fees are
              due and payable in advance upon receipt by Member of an invoice.
              For all other Services, a minimum deposit of the first month's
              Fees and any related set-up fees or expenses shall be paid to
              Upsell Finlogix upon the Effective Date to commence Services on
              the Member's behalf. Thereafter, Services will be billed every
              month to the Member's credit card, debit card, wire instructions,
              or electronic check profile provided to Upsell Finlogix by you. If
              a Member needs to edit or modify Member's payment method, Member
              should contact upsellfinlogix@gmail.com or call (000) 000-0000.
            </p>
            <p>
              If the Member fails to notify Upsell Finlogix within 24 hours of a
              scheduled meeting, Upsell Finlogix reserves the right to bill the
              Member for the meeting time.
            </p>
            <p>
              All Services rendered to the Member shall be considered completed
              and delivered after 45 days of payment from Member and may not be
              disputed unless Upsell Finlogix receives written notice from
              Member disputing delivery of Upsell Finlogix's Services within 45
              days after such payment.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold mb-2">
              XII. Dispute Resolution
            </h2>
            <p>
              All disputes, issues, controversies, complaints, or claims arising
              out of or related to this Agreement or related Services must first
              be submitted to Upsell Finlogix at upsellfinlogix@gmail.com The
              parties agree to work together in good faith to resolve any such
              disputes or complaints. If a resolution is not reached within
              thirty (30) days of the initial submission, the parties agree that
              any unresolved dispute, issue, controversy, complaint, or claim
              arising out of or relating to this Agreement or related Services
              shall be settled by arbitration administered by the American
              Arbitration Association, by the applicable Uniform Electronic
              Transactions Act (UETA) & ESIGN Act. The Act judgement will be
              final, and judgment may be entered upon it by any court having
              jurisdiction thereof. Additionally, notwithstanding this agreement
              to arbitrate, either party may seek emergency equitable relief
              before the state or federal courts located in New York County, New
              York to maintain the status quo pending arbitration, and hereby
              agree to submit to the exclusive personal jurisdiction of the
              courts located within New York County, New York for such purpose.
              For the avoidance of doubt, during the dispute resolution process,
              Member remains obligated to continue making all required payments
              relating to this Agreement or related Services as and when due.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold mb-2">XIII. Miscellaneous</h2>
            <ul className="flex flex-col gap-3">
              <li>
                13.1. Governing Law. This Agreement will be governed by and
                construed by the laws of the Uniform Electronic Transactions Act
                (UETA) & E-SIGN Act, without regard to its conflicts of law
                principles
              </li>
              <li>
                13.2. Waiver: Rights Cumulative. No waiver of any term or right
                in this Agreement shall be effective unless in writing, signed
                by an authorized representative of the waiving party. The
                failure of either party to enforce any provision of this
                Agreement shall not be construed as a waiver or modification of
                such provision, or impairment of its right to enforce such
                provision or any other provision of this Agreement thereafter.
                The rights and remedies of the parties herein provided shall be
                cumulative and not exclusive of any rights or remedies provided
                by law or equity.
              </li>
              <li>
                13.3. Notices. Any notices required to be given under this
                Agreement by either Party to the other shall be in writing and
                shall be transmitted either by (i) email, (ii) registered mail,
                (iii) certified mail, return receipt requested, or (iv)
                overnight mail (with all fees paid), addressed to the Party to
                be notified at the address set forth above or to such other
                address (or person) as such Party shall specify by like notice
                hereunder.
              </li>
              <li>
                13.4. Entire Agreement; Modifications. This Agreement, together,
                with any document names, exhibits, schedules, or other documents
                referenced herein, supersedes any agreements, either oral or
                written, between the parties concerning the rendering of
                Services and contains all of the representations, warranties,
                covenants, and agreements between the parties concerning the
                rendering of those Services. Each Party to this Agreement
                acknowledges that no representations, inducements, promises, or
                agreements, orally or otherwise, have been made by any party, or
                anyone acting on behalf of any party, which are not contained in
                this Agreement, and that no other agreement, statement, or
                promise not contained in this Agreement will be valid or
                binding.
              </li>
              <li>
                13.5. Partial Invalidity; Severability. If any provision of this
                Agreement is held by an arbitrator or court of competent
                jurisdiction to be invalid, void, or unenforceable, the
                remaining provisions will continue in full force and effect
                without being impaired or invalidated in any way. The parties
                agree that if any of the paragraphs set forth herein are deemed
                to be invalid or unenforceable by an arbitrator or a court of
                law, such provisions shall be modified to make them enforceable
                to the fullest extent permitted by law and all other provisions
                of this Agreement shall remain valid and enforceable
              </li>
              <li>
                13.6. Attorneys' Fees. In any action or arbitration brought by
                Upsell Finlogix to enforce the obligations of a Member, Upsell
                Finlogix shall be entitled to collect Upsell Finlogix's
                reasonable attorney's fee, costs, and expenses in such action or
                arbitration.
              </li>
              <li>
                You acknowledge that you have read this Agreement, understand
                it, and agree to be bound by its terms and conditions upon your
                acceptance of the Services. You further acknowledge that you
                have read, understood, and agree to be bound by all the terms
                and conditions outlined in Upsell Finlogix's Privacy Policy.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionAgreement;
