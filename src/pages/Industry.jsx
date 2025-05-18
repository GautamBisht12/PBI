import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";

function Industry() {
  const heroData = {
    heroTitle: "Industry",
    heroSubtitle:
      " Our mission is to provide high-quality bookkeeping and accounting services to businesses of all sizes. We are dedicated to helping our clients achieve their financial goals and grow their businesses.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  };
  return (
    <div className="fade-in">
      {/* Hero section */}
      <HeroSection heroDetails={heroData} />

      {/* Mission section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Upsell Finlogix, we recognize that effective financial
                management is essential for the growth and stability of any
                business. Our mission is to deliver comprehensive bookkeeping,
                accounting, and corporate finance services that streamline your
                financial operations, ensuring transparency, efficiency, and
                long-term success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to go beyond just providing basic financial
                services. We aim to be a trusted partner in your business
                journey, delivering reliable, scalable, and efficient solutions
                that ensure financial clarity, control, and sustainable growth.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Financial planning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We provide a full range of financial services designed to meet the
              needs of businesses across various industries, including
              e-commerce, real estate, healthcare, and hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                  alt="Bookkeeping & Accounting"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bookkeeping & Accounting
                </h3>
                <p className="text-gray-600">
                  We manage day-to-day financial records, ensuring accuracy and
                  compliance. Our services include tracking transactions,
                  reconciling accounts, and maintaining your general ledger.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Financial Reporting & Analysis"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Financial Reporting & Analysis
                </h3>
                <p className="text-gray-600">
                  Our customized financial reports provide actionable insights
                  into your business's financial health, empowering you to make
                  data-driven decisions.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Accounts Payable & Receivable"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Accounts Payable & Receivable
                </h3>
                <p className="text-gray-600">
                  We optimize cash flow by managing both accounts payable and
                  receivable, from timely payment processing to efficient
                  collections.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Corporate Finance & Strategy"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Corporate Finance & Strategy
                </h3>
                <p className="text-gray-600">
                  We offer strategic corporate finance services, including
                  financial modeling, budgeting, and forecasting to help you
                  make sound financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Approach: Precision, Transparency, and Insight
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We prioritize precision and transparency in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blue-50 rounded-xl p-8 border-t-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-600 text-center">
                We integrate the latest accounting software to automate routine
                tasks, reducing the potential for errors and enhancing
                operational efficiency.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-t-4 border-green-500 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                Proactive Strategy Development
              </h3>
              <p className="text-gray-600 text-center">
                Our team works alongside you to develop strategic financial
                plans that align with your business goals, ensuring that your
                finances are always structured for success.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-8 border-t-4 border-orange-500 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                Real-Time Financial Visibility
              </h3>
              <p className="text-gray-600 text-center">
                With our real-time financial dashboards, you gain instant access
                to the key metrics that matter most to your business, enabling
                quick decision-making and continuous monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">
              Why Choose Upsell Finlogix?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              We're committed to delivering exceptional service and ensuring
              your financial operations are accurate and timely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-300 text-center">
                With extensive experience in a wide range of sectors, we
                understand the unique challenges your business faces.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-gray-300 text-center">
                We maintain the highest professional standards, delivering
                exceptional service and ensuring your financial operations are
                accurate.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Technology-Driven Solutions
              </h3>
              <p className="text-gray-300 text-center">
                By leveraging advanced financial technologies, we streamline
                operations and provide real-time insights into your financial
                data.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Client-Centric Approach
              </h3>
              <p className="text-gray-300 text-center">
                We put your business first, working closely with you to
                understand your needs and help you achieve your financial
                objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500 rounded-lg -z-10"></div>
            </div>
            <div className="order-1 lg:order-2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our values guide everything we do:
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Integrity & Accountability
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We operate with the utmost integrity, ensuring
                      transparency and building trust with every client.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Client Commitment
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Your business's success is our success. We are dedicated
                      to providing services that deliver measurable results.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Innovation & Agility
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We continuously adapt to changes in the financial
                      landscape to offer the most innovative solutions that keep
                      you ahead of the curve.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Long-Term Relationships
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We believe in creating lasting partnerships by delivering
                      consistent value and support as your business grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Since our founding, we have helped businesses across multiple
              industries streamline their financial operations, improve their
              cash flow, and achieve their growth objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">500+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Clients Served
              </h3>
              <p className="text-gray-600">
                Across various industries and business sizes
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">35%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Average Cost Reduction
              </h3>
              <p className="text-gray-600">
                For businesses switching to our services
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Support & Monitoring
              </h3>
              <p className="text-gray-600">
                Ensuring your financial operations run smoothly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="py-20 bg-fixed bg-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/90"></div>

        {/* Content container */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-white">
            Partner with Us for a Stronger Financial Future
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            At Upsell Finlogix, we are more than just a service provider; we are
            your strategic partner in bookkeeping, accounting, and corporate
            finance. Let us help you navigate the complexities of financial
            management with precision, insight, and transparency, so you can
            focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md  btn-style-2 transition-colors duration-300 shadow-lg"
          >
            Book an Appointmemt
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our experienced team of financial professionals is dedicated to
              your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Team member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Sarah Johnson
                </h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience in financial management and
                  accounting, Sarah leads our team with vision and expertise.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Michael Chang"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Michael Chang
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  Chief Financial Officer
                </p>
                <p className="text-gray-600">
                  Michael brings deep expertise in corporate finance and
                  strategic planning, helping our clients optimize their
                  financial operations.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80"
                  alt="Jessica Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Jessica Martinez
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  Head of Client Services
                </p>
                <p className="text-gray-600">
                  Jessica ensures that our clients receive exceptional service
                  and that their financial needs are met with precision and
                  care.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let Upsell Finlogix help you navigate the complexities of financial
            management with precision, insight, and transparency, so you can
            focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md btn-style shadow-md transition-all duration-300"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#192A2D] text-base font-medium rounded-md text-[#192A2D] bg-white hover:bg-blue-50 shadow-sm transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industry;
