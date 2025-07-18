import { Link } from "react-router-dom";

const PricingSection = ({ theme, page }) => {
  const showCTA = page === "pricing";
  return (
    <>
      {/* Pricing Section */}
      <section
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"} `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`heading-tagline text-3xl font-extrabold ${
                theme === "dark" ? "text-gray-300" : "text-black"
              } sm:text-4xl relative inline-block `}
            >
              Transparent Pricing
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-600 transform translate-y-1"></span>
            </h2>
            <p
              className={`mt-4 max-w-2xl mx-auto text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } `}
            >
              Simple per-transaction pricing that scales with your business.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-[#B69D62] to-[#ab8d47] px-6 py-8 text-white">
              <h3 className="text-2xl font-bold">Per-Transaction Pricing</h3>
              <p className="mt-2 opacity-90">
                Pay only for what you use with our flexible pricing model
              </p>
            </div>

            <div className="p-5  md:p-8 ">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-100 pb-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Average Rate per Transaction
                  </h4>
                  <p className="text-gray-600">
                    Transparent pricing based on your transaction volume
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-4xl font-bold text-gray-900">
                    $0.75 – $1
                  </span>
                  <span className="text-gray-500 ml-2">per transaction</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium">
                    Example: For 200 transactions per month, the cost would
                    range from $150 to $200
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium">
                    Volume Discounts: Tiered pricing for higher transaction
                    volumes
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl sm:p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    Factors Influencing Pricing
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">
                        Business Size: Larger businesses with more complex
                        financial activities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">
                        Transaction Volume: Higher numbers of transactions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">
                        Service Complexity: Additional services like payroll
                        processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">
                        Geographic Location: Regional cost variations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl sm:p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    What Counts as a "Transaction"?
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">
                        A sale (POS or online)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">
                        A customer invoice or payment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">
                        A bill from a vendor
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">A payroll entry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">A bank transfer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">A tax payment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}

          {!showCTA && (
            <div className="text-center">
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#192d2f] bg-[#B69F63] hover:bg-[#192d2f] hover:text-white  hover:border-[#B69F63] shadow-md hover:shadow-lg transition-all duration-300"
              >
                See full pricing details
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <p className="mt-4 text-[#B69F63]">
                Need a customized solution?{" "}
                <Link
                  to="/contact"
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PricingSection;
