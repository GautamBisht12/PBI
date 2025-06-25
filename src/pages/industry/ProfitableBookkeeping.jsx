import { Link } from "react-router-dom";
import HeroSection from "../../components/ui/HeroSection";

import WorkedWith from "../../components/ui/WorkedWith";
import FAQ from "../../components/ui/FAQ";

import { FaArrowTrendUp } from "react-icons/fa6";

const ProfitableBookkeeping = () => {
  const heroData = {
    heroTitle: "Profitable Bookkeeping",
    heroSubtitle:
      "Unlock the secrets to financial success with our Profitable Bookkeeping services. We specialize in helping businesses optimize their financial operations, ensuring profitability and growth.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    btnText: "Start Your Profitable Journey",
    btnLink: "/https://calendly.com/upsellfinlogix/30min",
  };

  const profitStrategies = [
    {
      title: "Daily/Weekly Accurate Books",
      description:
        "Real-time financial clarity for better decision-making and cash flow management.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "COGS Tracking by SKU",
      description:
        "Granular product profitability analysis to identify your best and worst performers.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      color: "from-green-500 to-green-700",
    },
    {
      title: "Multi-state Sales Tax Compliance",
      description:
        "Avoid costly penalties with our specialized e-commerce tax expertise.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Financial Reporting for Lenders & Investors",
      description:
        "Professional documentation to secure funding and investment opportunities.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "KPI Dashboards (ROAS, CAC, LTV)",
      description:
        "Visual metrics tracking to optimize marketing spend and customer acquisition.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Clean Year-End Books",
      description:
        "Stress-free tax season with organized, audit-ready financial records.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-teal-500 to-teal-700",
    },
  ];

  const profitabilityData = [
    {
      whatWeDo: "Reconcile Amazon/Shopify data",
      howItIncreases: "Identify missed payouts or chargebacks",
      icon: "🔄",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      whatWeDo: "Track Cash Flow Weekly",
      howItIncreases: "Avoid overdrafts & stockouts",
      icon: "💰",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      whatWeDo: "Provide GAAP P&L Reports",
      howItIncreases: "Win investor/lender confidence",
      icon: "📊",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      whatWeDo: "Analyze Advertising ROI",
      howItIncreases: "Optimize marketing spend for better returns",
      icon: "📈",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ];

  return (
    <>
      <HeroSection heroDetails={heroData} />

      {/* Profit-Driving Strategies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Profit-Driving Strategies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your financial operations with our comprehensive
              bookkeeping solutions designed to maximize profitability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profitStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${strategy.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Drive Profitability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Drive Profitability
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to financial management directly impacts
              your bottom line
            </p>
          </div>

          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-6 mb-2">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <h3 className="text-2xl font-bold text-white">What We Do</h3>
              <h3 className="text-2xl font-bold text-white">
                How It Increases Your Profitability
              </h3>
            </div>
          </div>

          {/* Table Content */}
          <div className="space-y-2">
            {profitabilityData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center text-2xl shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${item.textColor}`}>
                        {item.whatWeDo}
                      </h4>
                    </div>
                  </div>

                  <div className="relative">
                    <div>
                      <FaArrowTrendUp />
                    </div>

                    <div className="md:pl-12">
                      <p className="text-gray-700 font-medium text-lg">
                        {item.howItIncreases}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WorkedWith />

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Maximize Your Profitability?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let our expert team transform your bookkeeping into a profit-driving
            machine.
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
    </>
  );
};

export default ProfitableBookkeeping;
