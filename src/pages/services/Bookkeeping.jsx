import { Briefcase, CheckCircle } from "lucide-react";
import HeroSection from "../../components/ui/HeroSection";
import { bookkeepingPageWhyChooseUs } from "../../data/whyChooseUsData.jsx";
import { Helmet } from "react-helmet-async";
import FAQ from "../../components/ui/FAQ";

import { industryServicesBookkeeping } from "../../data/industriesServicesCardData.jsx";
import CTA from "../../components/ui/CTA";
import WhyChooseUsSection from "../../components/ui/WhyChooseUsSection.jsx";

export default function Bookkeeping() {
  const heroDetails = {
    heroTitle: " Bookkeeping",
    heroSubtitle: (
      <p className="text-lg text-gray-50">
        Industry Expertise Across: <br />
        Ecommerce | Manufacturing & Wholesale (B2B) | Healthcare | Hospitality
      </p>
    ),
    heroImage: "/hero/buildings.webp",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>
          Bookkeeping Services for E-commerce, Healthcare & More | Upsell
          FinLogix
        </title>
        <meta
          name="description"
          content="Get expert bookkeeping services tailored for industries like e-commerce, manufacturing, healthcare, and hospitality. Stay compliant, organized, and growth-ready with Upsell FinLogix."
        />
        <meta
          name="keywords"
          content="bookkeeping services, ecommerce bookkeeping, healthcare bookkeeping, hospitality bookkeeping, manufacturing bookkeeping, AP AR reconciliation, IRS compliant bookkeeping, financial reporting"
        />
        <meta
          property="og:title"
          content="Industry-Specific Bookkeeping Services | Upsell FinLogix"
        />
        <meta
          property="og:description"
          content="From clean-up to compliance, our bookkeeping services ensure precision and insight for your business's financial growth."
        />
        <meta property="og:image" content="slidder/buildings.webp" />
        <meta
          property="og:url"
          content="https://www.upsellfinlogix.com/services/bookkeeping"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://www.upsellfinlogix.com/services/bookkeeping"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Industry-Specific Bookkeeping Services",
            description:
              "Expert bookkeeping solutions tailored for the specific operational needs, tax regulations, and profitability goals of your industry — ensuring accuracy, compliance, and strategic insights at every step.",
            provider: {
              "@type": "Organization",
              name: "Upsell FinLogix",
              url: "https://www.upsellfinlogix.com",
            },
            serviceType: "Bookkeeping Services",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Industry-Specific Bookkeeping Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Bookkeeping",
                    description:
                      "Multi-channel sales tracking, inventory management, payment reconciliation, and marketplace integration for online retailers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Manufacturing & Wholesale (B2B) Bookkeeping",
                    description:
                      "Cost accounting, inventory valuation, production analysis, and supply chain financial management for B2B operations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Healthcare Bookkeeping",
                    description:
                      "HIPAA-compliant financial management, insurance billing, patient account management, and regulatory compliance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hospitality Bookkeeping",
                    description:
                      "Revenue management, seasonal accounting, tip reporting, and multi-location financial consolidation for hospitality businesses",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSection heroDetails={heroDetails} />

      {/* Who We Are Section */}
      <section className="py-16 bg-white px-5 sm:px-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                WHO WE ARE
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                At{" "}
                <span className="text-[#B69D62] font-extrabold">
                  {" "}
                  Upsell FinLogix{" "}
                </span>
                , we understand that each industry has unique financial
                dynamics. Our bookkeeping solutions are built to align with the
                specific operational needs, tax regulations, and profitability
                goals of your industry — ensuring accuracy, compliance, and
                strategic insights at every step.
              </p>
            </div>
            <div className="relative">
              <img
                src="/services/bookkeeping-page.webp"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-3 sm:mb-4">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Tailored bookkeeping services designed for your industry's unique
              challenges and requirements
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {industryServicesBookkeeping.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                    <div
                      className={`${service.bgColor} p-3 sm:p-4 rounded-lg sm:rounded-xl ${service.iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-2 sm:space-x-3 group/feature"
                      >
                        <div
                          className={`${service.bgColor} p-1.5 sm:p-2 rounded-md sm:rounded-lg ${service.iconColor} group-hover/feature:scale-110 transition-transform duration-200 flex-shrink-0 mt-0.5`}
                        >
                          {feature.icon}
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors leading-relaxed">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} rounded-xl sm:rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-20`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-2 bg-white px-4 sm:px-6 py-4 sm:py-3 rounded-2xl sm:rounded-full shadow-md max-w-4xl mx-auto">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 font-medium text-center leading-relaxed">
                <span className="block sm:inline">
                  "No matter the industry, our bookkeeping adapts to your
                  business DNA.
                </span>
                <span className="block sm:inline mt-1 sm:mt-0">
                  {" "}
                  Trust Upsell FinLogix to keep your books clean, compliant, and
                  growth-ready."
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection
        title={bookkeepingPageWhyChooseUs.title}
        subtitle={bookkeepingPageWhyChooseUs.subtitle}
        features={bookkeepingPageWhyChooseUs.features}
      />
      <CTA
        heading={" Ready to streamline your bookkeeping?"}
        subHeading={
          "      Let our expert team handle your financial records while you focus on growing your business. We offer customized solutions that fit your specific needs and budget."
        }
        theme={"light"}
      />
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
