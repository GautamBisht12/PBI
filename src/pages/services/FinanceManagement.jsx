import { useState } from "react";
import { CheckCircle, Briefcase } from "lucide-react";

import { FaBolt, FaEye, FaTint, FaChartBar, FaRocket } from "react-icons/fa";

import HeroSection from "../../components/ui/HeroSection";
import FAQ from "../../components/ui/FAQ";
import WhyChooseUsSection from "../../components/ui/WhyChooseUsSection";
import {
  financeServices,
  financeWhyChooseUs,
} from "../../data/whyChooseUsData.jsx";
import { industryServicesAccounting } from "../../data/industriesServicesCardData.jsx";
import CTA from "../../components/ui/CTA.jsx";

export default function Accounting() {
  const [heroDetails] = useState({
    heroTitle: "Corporate Financial Management Services",
    heroSubtitle:
      "Strategic financial oversight designed to optimize profitability, enhance operational control, and empower confident business decisions.",

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
                ,we turn corporate finance from a compliance function into a
                strategic growth engine. Our corporate financial management
                services are engineered to improve business resilience, unlock
                profitability, optimize working capital, and provide actionable
                financial insights. Through structured processes and real-time
                financial oversight, we help businesses navigate financial
                complexities with clarity — ensuring operational control,
                capital efficiency, and scalable profit growth.
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
        title={financeServices.title}
        subtitle={financeServices.subtitle}
        features={financeServices}
      />

      {/* Create profitability Section  */}
      <section></section>

      {/* Why Choose US Section */}

      <WhyChooseUsSection
        title={financeWhyChooseUs.title}
        subtitle={financeWhyChooseUs.subtitle}
        features={financeWhyChooseUs.features}
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
