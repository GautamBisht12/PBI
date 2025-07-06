import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";
import FAQ from "../components/ui/FAQ";
import WhyChooseUsSection from "../components/ui/WhyChooseUsSection";
import { aboutPageWhyChooseUs } from "../data/whyChooseUsData.jsx";
import { Helmet } from "react-helmet-async";

function AboutPage() {
  const heroData = {
    heroTitle: "About Us",
    heroSubtitle:
      " Empowering Your Business with Professional Bookkeeping, Accounting, and Corporate Finance Solutions",
    heroImage: "hero/documents.webp",
  };
  return (
    <div className="fade-in">
      <Helmet>
        <title>
          About Us | Upsell FinLogix - Your Strategic Finance Partner
        </title>
        <meta
          name="description"
          content="Learn how Upsell FinLogix delivers expert bookkeeping, accounting, and financial strategy services. Discover our mission, values, and why businesses choose us as a trusted financial partner."
        />
        <meta
          name="keywords"
          content="about accounting firm, financial strategy, bookkeeping experts, corporate finance solutions, business valuation, why choose Upsell FinLogix ,QuickBooks and Xero experts"
        />
        <meta
          property="og:title"
          content="About Upsell FinLogix - Trusted Accounting & Finance Experts"
        />
        <meta
          property="og:description"
          content="Explore what makes Upsell FinLogix a leader in bookkeeping and finance. Our experienced team is committed to your business's success."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />
        <meta
          property="og:url"
          content="https://www.upsellfinlogix.com/about"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.upsellfinlogix.com/about" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "Upsell FinLogix",
              url: "https://www.upsellfinlogix.com",
              logo: "https://www.upsellfinlogix.com/logo.png",
              description:
                "Upsell FinLogix delivers comprehensive bookkeeping, accounting, and corporate finance services that streamline your financial operations, ensuring transparency, efficiency, and long-term success.",
              foundingDate: "2023",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-804-876-0978",
                contactType: "customer service",
                email: "info@upsellfinlogix.com",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "7901 4TH ST N STE 300",
                addressLocality: "St. Petersburg",
                addressRegion: "FL",
                postalCode: "33702",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/upsellfinlogix",
                "https://www.linkedin.com/company/upsellfinlogix",
              ],
            },
          })}
        </script>
      </Helmet>

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
                At Upsell FinLogix, we recognize that effective financial
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
                src="about/our-mission.webp"
                alt="Financial planning"
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
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
                  src="about/service1.webp"
                  alt="Bookkeeping & Accounting"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bookkeeping
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
                  src="about/service2.webp"
                  alt="Financial Reporting & Analysis"
                  loading="lazy"
                  decoding="async"
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
                  src="about/service3.webp"
                  alt="Accounts Payable & Receivable"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Accounting Process Support
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
                  src="about/service4.webp"
                  alt="Corporate Finance & Strategy"
                  loading="lazy"
                  decoding="async"
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

      {/* Why Choose Us section */}
      <WhyChooseUsSection
        title={aboutPageWhyChooseUs.title}
        subtitle={aboutPageWhyChooseUs.subtitle}
        features={aboutPageWhyChooseUs.features}
        cardBackgroundColor="bg-blue-800"
        cardHoverColor="hover:bg-blue-700"
      />

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
            At Upsell FinLogix, we are more than just a service provider; we are
            your strategic partner in bookkeeping, accounting, and corporate
            finance. Let us help you navigate the complexities of financial
            management with precision, insight, and transparency, so you can
            focus on growing your business.
          </p>
          <Link
            to="https://calendly.com/upsellfinlogix/30min"
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
      {/* Values section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="about/values.webp"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
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

      {/* Team section */}

      {/* Final CTA section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let Upsell FinLogix help you navigate the complexities of financial
            management with precision, insight, and transparency, so you can
            focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md btn-style shadow-md transition-all duration-300"
            >
              Contact Us
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

      <FAQ />
    </div>
  );
}

export default AboutPage;
