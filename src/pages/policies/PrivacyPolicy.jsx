import HeroSection from "../../components/ui/HeroSection";

const PrivacyPolicy = () => {
  const heroDetails = {
    heroTitle: "Privacy Policy",
    heroSubtitle:
      " This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website or services.",
    heroImage:
      "https://picjumbo.com/wp-content/uploads/business-woman-signing-a-contract-2210x1473.jpg",
  };
  return (
    <>
      <HeroSection heroDetails={heroDetails} />
      <section className="px-6 py-16 bg-white text-gray-800 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Upsell FinLogix respects your privacy and is committed to
              protecting it in accordance with this Privacy Policy. This policy
              applies to all information collected through our website,
              www.upsellfinlogix.com, and the bookkeeping, tax, and corporate
              finance services we offer. This policy is intended to comply with
              applicable federal and state regulations. By using our Website or
              Services, you agree to the collection and use of your information
              as outlined in this Privacy Policy. If you do not consent, please
              discontinue use immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-semibold mt-4">
              2.1 Personal Information You Provide
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Account Registration & Profile: name, email, phone number,
                company name, address, tax ID, credentials.
              </li>
              <li>
                Service Interactions: financial documents, tax forms, payroll
                details.
              </li>
              <li>
                Communications: support tickets, emails, chat logs, and
                attachments.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">
              2.2 Technical & Usage Data
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                IP address, browser type, device type, operating system,
                referral URLs.
              </li>
              <li>Date/time stamps, session durations, pages viewed.</li>
              <li>
                Cookie identifiers, session IDs, and anonymized usage metrics.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">
              2.3 Aggregated/De-identified Data
            </h3>
            <p>
              We may aggregate or de-identify data for analytics, reporting, or
              trend identification without identifying individuals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Service Delivery</li>
              <li>Account and Customer Support</li>
              <li>Business Operations & Improvement</li>
              <li>Marketing & Communications (opt-out available)</li>
              <li>Compliance & Safety</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              4. Information Sharing & Disclosure
            </h2>
            <p>
              We do not sell or trade your personal data. We may share
              information under these circumstances:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Service Providers under confidentiality agreements</li>
              <li>Assigned Professionals (CPAs, attorneys, etc.)</li>
              <li>In case of merger, acquisition, or asset sale</li>
              <li>To comply with legal requirements</li>
              <li>Advertising and Analytics with anonymized data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              We use cookies, web beacons, and analytics tools to enhance user
              experience and measure Website performance. You can manage cookies
              through browser settings. Disabling essential cookies may affect
              functionality.
            </p>
            <p>
              To opt out of Google Analytics, install Google’s browser add-on.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              6. Your Rights and Choices
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access, Correction, Deletion of personal data</li>
              <li>Marketing Opt-Out via email or unsubscribe link</li>
              <li>Manage cookie preferences via browser settings</li>
              <li>We do not respond to Do Not Track (DNT) signals</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Privacy Rights</h2>
            <p>Consumers may request:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Categories and purposes of collected/disclosed data</li>
              <li>Third parties with whom data is shared</li>
              <li>Access to or deletion of personal data</li>
              <li>Opt out of the sale of their data</li>
            </ul>
            <p>
              Submit requests to:{" "}
              <a
                href="mailto:info@upsellfinlogix.com"
                className="text-blue-600 underline"
              >
                info@upsellfinlogix.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Data Retention</h2>
            <p>
              We retain personal information as long as necessary for business
              and legal purposes. Data may be deleted upon verified request,
              subject to compliance obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              9. Security Protections
            </h2>
            <p>
              We use administrative, physical, and technical safeguards
              including:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Encrypted transmission (HTTPS/TLS), encryption-at-rest</li>
              <li>Access controls, regular audits</li>
              <li>Incident response planning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              10. Children's Privacy
            </h2>
            <p>
              Our Services are not directed at individuals under 18. If we
              become aware of such collection, we will promptly delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              11. International Transfers
            </h2>
            <p>
              By using our Services, you consent to the transfer and storage of
              your data in the U.S., subject to this policy and applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              12. Updates to This Policy
            </h2>
            <p>
              We may update this policy periodically. Continued use after
              updates constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              13. Contact Information
            </h2>
            <p>For questions or requests, contact us at:</p>
            <ul className="list-none ml-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@upsellfinlogix.com"
                  className="text-blue-600 underline"
                >
                  info@upsellfinlogix.com
                </a>
              </li>
              <li>Phone: +1 (804) 876-0978</li>
              <li>
                Address: 7901 4TH ST N STE 300, ST. PETERSBURG, FL 33702, United
                States
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
