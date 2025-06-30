import { useState } from "react";
import HeroSection from "../components/ui/HeroSection";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PricingSection from "../components/ui/PricingSection";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Pay-As-You-Go",
      price: "$24.99",
      extraLabel: "per hour",
      features: [
        "Dedicated Accountant + Industry Expert",
        "Best for on-call bookkeeping and projects",
        "Fast and easy setup",
      ],
      note: "Projects starting at $1,000",
      buttonText: "Free Consultation",
      highlighted: false,
    },
    {
      title: "Bookkeeping",
      price: "$199",
      features: [
        "Dedicated Accountant + Industry Expert",
        "Monthly or Weekly Accounting",
        "Cash Basis or Accrual Basis",
        "Monthly Financial Reports",
      ],
      addons: ["Payroll", "Sales Tax", "Back Office"],
      buttonText: "Get Started Now",
      highlighted: true,
    },
    {
      title: "Accounting Process Support",

      price: "$349",
      features: [
        "Dedicated Accountant + Industry Expert",
        "Accounts payable",
        "Accounts Receivable",
        "Record to Report",
        "Financial Reporting",
      ],
      buttonText: "Free Consultation",
      highlighted: false,
    },
    {
      title: "Corporate Finance Management",
      price: "$999",
      features: [
        "Financial planning and analysis ",
        "Financial planning and business valuation",
        "Forecasting & Budgeting",
        "Cashflow Management",
        "Strategic Planning",
      ],
      buttonText: "Free Consultation",
      highlighted: false,
    },
  ];

  const [heroDetails, setHeroDetails] = useState({
    heroTitle: "Pricing",
    heroSubtitle:
      "Explore our pricing plans and find the perfect fit for your business.",
    heroImage:
      "https://t4.ftcdn.net/jpg/05/24/39/69/360_F_524396965_aEvKerRzFRmTBzm6ffQcaWy8JLQeZvAi.jpg",
  });

  return (
    <>
      <section className="mt-20">
        <HeroSection heroDetails={heroDetails} />
        <h2 className="text-center text-2xl font-bold mt-12 mb-6">
          Behind on your books? <br></br> We can help you get up to date quickly
          and accurately!
        </h2>
        <div className="bg-gradient-to-br from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl  shadow-lg p-6 flex flex-col justify-between border relative ${
                  plan.highlighted
                    ? "bg-orange-50 border-orange-400 ring-2 ring-orange-500 "
                    : "bg-white border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 transform text-center -translate-x-1/2 bg-orange-500 w-[300px] text-white text-sm font-bold px-10 py-3 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-center mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-sm text-center text-gray-500 mb-1">
                    Starting at
                  </div>
                  <div className="text-center text-4xl font-extrabold text-gray-900 flex flex-col items-center">
                    <div className="flex items-baseline gap-2">
                      <span>{plan.price}</span>
                      {plan.extra && (
                        <>
                          <span>+</span>
                          <span>{plan.extra}</span>
                        </>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      per month{plan.extra ? "  •  " + plan.extraLabel : ""}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.addons && (
                    <div className="mt-4">
                      <p className="font-semibold text-sm mb-2">
                        Popular addons
                      </p>
                      <div className="flex space-x-4">
                        {plan.addons.map((addon, idx) => (
                          <div key={idx} className="text-xs text-center">
                            <div className="bg-gray-100 p-2 rounded-full mb-1">
                              <CheckCircle className="h-4 w-4 text-blue-500" />
                            </div>
                            <p className="text-sm">{addon}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* {plan.note && (
                    <p className="mt-4 text-sm text-gray-500">{plan.note}</p>
                  )} */}
                </div>
                <Link
                  to="https://calendly.com/upsellfinlogix/30min"
                  className="mt-6 text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded shadow"
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <PricingSection theme="light" page="pricing" />
      </section>
    </>
  );
};

export default Pricing;
