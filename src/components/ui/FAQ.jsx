const FAQ = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find quick answers to common questions about PowerVision.
            </p>
          </div>

          <div className="mt-12 space-y-8 ">
            <div className="bg-white p-6 rounded-lg shadow-sm ">
              <h3 className="text-lg font-medium text-gray-900">
                What types of businesses do you work with?
              </h3>
              <p className="mt-2 text-gray-500">
                We serve small to mid-sized businesses, startups, and growing
                enterprises across industries including professional services,
                e-commerce, tech, healthcare, and consulting. Our solutions are
                tailored to your business structure—whether you're a sole
                proprietor, partnership, LLC, or corporation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                What software platforms do you support?
              </h3>
              <p className="mt-2 text-gray-500">
                We are proficient in:
                <ul>
                  <li>QuickBooks (Online & Desktop)</li>
                  <li>Zoho Books</li>
                  <li>Xero </li>
                  <li>Excel, Google Sheets, and Power BI </li>
                </ul>
                We also integrate with tools like Gusto, Amazon, Stripe,
                Shopify, PayPal, Dext, and Hubdoc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                How often will I receive financial reports?
              </h3>
              <p className="mt-2 text-gray-500">
                You will receive monthly, quarterly, and annual financial
                statements, including:
                <ul>
                  <li>Profit & Loss Statement </li>
                  <li>Balance Sheet </li>
                  <li>Cash Flow Statement </li>
                  <li>Custom reports upon request </li>
                </ul>
                Our reports are timely, accurate, and designed for clear
                decision-making.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                Is my financial data secure?
              </h3>
              <p className="mt-2 text-gray-500">
                Yes. We adhere to strict data privacy protocols and use secure
                file-sharing systems. NDAs are available upon request. Your
                confidentiality and trust are paramount.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                How do I get started?
              </h3>
              <p className="mt-2 text-gray-500">
                Click “Schedule a Free Consultation” or fill out our Contact
                Form. We'll discuss your current needs, assess your financial
                setup, and provide a tailored proposal with clear deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
