import { useState } from "react";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  DollarSign,
  Briefcase,
  Shield,
} from "lucide-react";

import { FaBolt, FaEye, FaTint, FaChartBar, FaRocket } from "react-icons/fa";

import { Link } from "react-router-dom";
import HeroSection from "../../components/ui/HeroSection";
import FAQ from "../../components/ui/FAQ";
import WhyChooseUsSection from "../../components/ui/WhyChooseUsSection";
import { accountingWhyChooseUs } from "../../data/whyChooseUsData.jsx";
import { industryServicesAccounting } from "../../data/industriesServicesCardData.jsx";
import CTA from "../../components/ui/CTA.jsx";

export default function Accounting() {
  const [heroDetails] = useState({
    heroTitle: "Accounting Services for US Businesses",
    heroSubtitle: (
      <p className="text-lg text-gray-50">
        Industry Expertise Across: <br />
        Ecommerce | Manufacturing & Wholesale (B2B) | Healthcare | Hospitality
      </p>
    ),

    heroImage: "https://wallpaperaccess.com/full/153208.jpg",
  });

  const financialBenefits = [
    {
      iconBgColor: "bg-yellow-900",
      icon: <FaBolt className="h-8 w-8 text-yellow-300" />,
      title: "Streamlined Workflows",
      description:
        "Simplify operations with workflows tailored to your industry needs.",
    },
    {
      iconBgColor: "bg-blue-900",
      icon: <FaEye className="h-8 w-8 text-blue-300" />,
      title: "Real-Time Visibility",
      description:
        "Stay informed with up-to-date financial insights and reporting.",
    },
    {
      iconBgColor: "bg-sky-900",
      icon: <FaTint className="h-8 w-8 text-sky-300" />,
      title: "Cash Flow Management",
      description: "Improve liquidity and make smarter spending decisions.",
    },
    {
      iconBgColor: "bg-purple-900",
      icon: <FaChartBar className="h-8 w-8 text-purple-300" />,
      title: "Profitability Optimization",
      description:
        "Analyze margins and identify areas for improved profitability.",
    },
    {
      iconBgColor: "bg-pink-900",
      icon: <FaRocket className="h-8 w-8 text-pink-300" />,
      title: "Scalable Infrastructure",
      description: "Grow confidently with a financial system built to scale.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <HeroSection heroDetails={heroDetails} />

      {/* Who We Are Section */}
      <section className="py-16 bg-white h-[90vh] flex justify-center items-center">
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
                , we deliver reliable, structured, and growth-focused accounting
                support tailored for fast-paced US businesses. Our services
                simplify financial operations, enhance financial visibility, and
                provide actionable insights — so you stay focused on scaling
                while we manage the numbers.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY291bnRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services  */}
      <WhyChooseUsSection
        title={accountingWhyChooseUs.title}
        subtitle={accountingWhyChooseUs.subtitle}
        features={accountingWhyChooseUs.features}
      />

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
              Tailored accounting services designed for your industry's unique
              challenges and requirements
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {industryServicesAccounting.map((service, index) => (
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
                  <div className="flex  items-center space-x-4 mb-6">
                    <div
                      className={`${service.bgColor} p-4 rounded-xl ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {service.title}
                      </h3>
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
                "No matter the industry, our accounting adapts to your business
                DNA. <br /> Trust Upsell FinLogix to keep your books clean,
                compliant, and growth-ready."
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose US Section */}

      <WhyChooseUsSection
        title={"Why Choose Upsell FinLogix "}
        subtitle={" "}
        features={financialBenefits}
      />

      {/* CTA Section  */}
      <CTA
        heading={"Ready to streamline your accounting? "}
        subHeading={
          "Partner with Upsell FinLogix — where precision accounting meets operational clarity, keeping your business profitable and growth-ready."
        }
      />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
