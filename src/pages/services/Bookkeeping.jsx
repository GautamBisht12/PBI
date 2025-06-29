import { Briefcase, CheckCircle } from "lucide-react";
import HeroSection from "../../components/ui/HeroSection";
import { bookkeepingPageWhyChooseUs } from "../../data/whyChooseUsData.jsx";

import FAQ from "../../components/ui/FAQ";

import { industryServicesBookkeeping } from "../../data/industriesServicesCardData.jsx";
import CTA from "../../components/ui/CTA";
import WhyChooseUsSection from "../../components/ui/WhyChooseUsSection.jsx";

export default function Bookkeeping() {
  const heroDetails = {
    heroTitle: " Bookkeeping",
    heroSubtitle: "Industry-Specific Bookkeeping That Drives Real Impact",
    heroImage: "https://wallpaperaccess.com/full/153208.jpg",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection heroDetails={heroDetails} />

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
                src="https://plus.unsplash.com/premium_photo-1661308288174-0f6ac8d391d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va2tlZXBpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored bookkeeping services designed for your industry's unique
              challenges and requirements
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {industryServicesBookkeeping.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`${service.bgColor} p-4 rounded-xl ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 group/feature"
                      >
                        <div
                          className={`${service.bgColor} p-2 rounded-lg ${service.iconColor} group-hover/feature:scale-110 transition-transform duration-200`}
                        >
                          {feature.icon}
                        </div>
                        <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-20`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">
                "No matter the industry, our bookkeeping adapts to your business
                DNA. <br /> Trust Upsell FinLogix to keep your books clean,
                compliant, and growth-ready."
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
