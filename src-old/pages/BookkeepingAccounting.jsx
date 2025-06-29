import { useState } from "react";
import {
  FileText,
  Book,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  DollarSign,
  Briefcase,
  Shield,
  Award,
  UserCheck,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";
import FAQ from "../components/ui/FAQ";

export default function BookkeepingAccounting() {
  const [expandedId, setExpandedId] = useState(null);
  const [heroDetails] = useState({
    heroTitle: "Diverse Industries Bookkeeping  ",
    heroSubtitle:
      "Bookkeeping solutions for diverse industries—delivering clarity, compliance, and control.",
    heroImage: "https://wallpaperaccess.com/full/153208.jpg",
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const services = [
    {
      id: 1,
      icon: <FileText size={24} />,
      title: "Financial Statement Preparation",
      shortDesc:
        "Comprehensive financial reports to understand your business performance.",
      fullDesc:
        "We prepare detailed financial statements that give you clear visibility into your business's financial health. Our team ensures these statements are accurate, compliant with accounting standards, and delivered on time.",
      features: [
        {
          title: "Monthly Profit & Loss Statement (Income Statement)",
          description:
            "Track your revenue, expenses, and profitability over specific periods with detailed categorization and trend analysis.",
        },
        {
          title: "Balance Sheet",
          description:
            "Get a complete snapshot of your business's assets, liabilities, and equity position with professionally prepared balance sheets.",
        },
        {
          title: "Cash Flow Statement",
          description:
            "Understand where your money is coming from and going to with our detailed cash flow analysis, helping you manage liquidity effectively.",
        },
      ],
    },
    {
      id: 2,
      icon: <Book size={24} />,
      title: "General Ledger Management",
      shortDesc: "Maintaining accurate and organized financial records.",
      fullDesc:
        "Our general ledger management services ensure your financial data is meticulously organized, accurate, and readily available when needed for reporting or analysis.",
      features: [
        {
          title: "Maintaining the central record of all financial transactions",
          description:
            "We record, categorize, and organize every transaction with proper documentation and audit trails.",
        },
        {
          title: "Ensuring books balance and are error-free",
          description:
            "Regular reconciliations and checks to maintain the integrity of your financial data with early error detection.",
        },
        {
          title: "Account Reconciliation",
          description:
            "Regular matching of your transaction records with bank statements to identify and resolve discrepancies.",
        },
      ],
    },
    {
      id: 3,
      icon: <Users size={24} />,
      title: "Payroll Recording",
      shortDesc:
        "Accurate tracking of employee compensation and related expenses.",
      fullDesc:
        "We handle the complexities of payroll recording to ensure accurate financial statements and tax compliance. Our team works with your existing payroll systems or can recommend solutions that fit your needs.",
      features: [
        {
          title: "Logging payroll expenses and tax withholdings",
          description:
            "Detailed record-keeping of salaries, wages, benefits, and all withholdings for accurate financial reporting.",
        },
        {
          title: "Often integrated with payroll platforms (e.g., Gusto, ADP)",
          description:
            "Seamless integration with your preferred payroll system for streamlined processes and data consistency.",
        },
        {
          title: "Payroll Tax Compliance",
          description:
            "Ensuring your payroll records support accurate tax filings and compliance with local, state, and federal regulations.",
        },
      ],
    },
    {
      id: 4,
      icon: <Clock size={24} />,
      title: "Catch-Up Bookkeeping",
      shortDesc: "Bringing your books up to date quickly and accurately.",
      fullDesc:
        "Whether you're months or years behind, our catch-up bookkeeping service will bring your financial records up to date efficiently and accurately, giving you a clear picture of your business's financial position.",
      features: [
        {
          title: "Bringing books up to date when a business has fallen behind",
          description:
            "Systematic approach to organizing and processing backlogged transactions with minimal disruption to your current operations.",
        },
        {
          title: "Often includes several months or years of backlog cleanup",
          description:
            "Comprehensive recovery of historical financial data, ensuring continuity and accuracy in your financial records.",
        },
        {
          title: "Financial Recovery Planning",
          description:
            "Strategies to prevent future backlog issues and maintain timely financial reporting going forward.",
        },
      ],
    },
    {
      id: 5,
      icon: <CheckCircle size={24} />,
      title: "Tax-Ready Books",
      shortDesc: "Preparing your financial records for smooth tax filing.",
      fullDesc:
        "We prepare your books for tax season, ensuring all necessary information is organized, accurate, and ready for your tax professional, making the tax filing process smoother and potentially reducing your tax preparation costs.",
      features: [
        {
          title:
            "Organizing and preparing records for your CPA or tax preparer",
          description:
            "Properly categorized expenses, revenue, and deductions with supporting documentation to streamline tax preparation.",
        },
        {
          title: "1099 tracking & Reporting",
          description:
            "Accurate tracking of payments to contractors and preparation of necessary 1099 forms for compliance with IRS requirements.",
        },
        {
          title: "Sales tax reporting",
          description:
            "Detailed records of sales tax collected and paid, supporting accurate tax filings and minimizing audit risks.",
        },
      ],
    },
    {
      id: 6,
      icon: <TrendingUp size={24} />,
      title: "Financial Analysis & Reporting",
      shortDesc:
        "Insights and trends to help you make informed business decisions.",
      fullDesc:
        "Beyond basic bookkeeping, we provide valuable financial analysis to help you understand your business performance, identify opportunities, and make data-driven decisions for growth.",
      features: [
        {
          title: "Key Performance Indicators (KPIs)",
          description:
            "Tracking and reporting on financial metrics that matter most to your specific business and industry.",
        },
        {
          title: "Trend Analysis",
          description:
            "Identifying patterns in your financial data to help forecast future performance and spot potential issues early.",
        },
        {
          title: "Customized Financial Reports",
          description:
            "Creating tailored reports that address your specific business questions and decision-making needs.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <HeroSection heroDetails={heroDetails} />

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          <div className="flex items-center gap-3">
            <Shield className="text-[#B69F63]" size={30} />
            <span className="font-medium">AICPA Member</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="text-[#B69F63]" size={30} />
            <span className="font-medium">10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <UserCheck className="text-[#B69F63]" size={30} />
            <span className="font-medium">Certified Bookkeepers</span>
          </div>
          <div className="flex items-center gap-3">
            <AlertCircle className="text-[#B69F63]" size={24} />
            <span className="font-medium">100% Accuracy Guarantee</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-16 text-[#192A2D]">
          Our Comprehensive Bookkeeping Services
        </h2>

        {/* Accordion Style Services */}
        <div className="max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#B69F63] p-3 rounded-full text-[#192D2F]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.shortDesc}</p>
                  </div>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    expandedId === service.id ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {expandedId === service.id && (
                <div className="p-6 pt-0 border-t border-gray-100 animate-fadeIn">
                  <p className="text-gray-700 mb-6">{service.fullDesc}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-[#a58f57] mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-blue-50 py-16 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Bookkeeping Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#192A2D] mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Certified Expertise
              </h3>
              <p className="text-gray-600">
                Our team consists of certified bookkeepers with specialized
                training in accounting software and financial reporting
                standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#192A2D] mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Time Savings</h3>
              <p className="text-gray-600">
                Focus on running your business while we handle the
                time-consuming task of keeping your financial records accurate
                and up-to-date.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#192A2D] mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Insights</h3>
              <p className="text-gray-600">
                Beyond numbers, we provide analysis that helps you understand
                your financial position and make informed business decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tax Compliance</h3>
              <p className="text-gray-600">
                Stay compliant with tax laws and regulations with properly
                maintained books that make tax season stress-free.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                More affordable than hiring a full-time bookkeeper while still
                getting expert-level service customized to your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                We have experience across various industries, understanding the
                specific accounting needs and challenges of your business
                sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="container mx-auto px-4 py-20 ">
        <div className="max-w-5xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 relative inline-block mx-auto">
              Our Bookkeeping Process
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2e4d52] to-[#B69F63] transform -translate-y-2"></span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-12 text-left md:text-right order-2 md:order-1">
                  <span className="text-[#B69F63] font-semibold text-sm tracking-wider uppercase mb-1 block">
                    Step 1
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Initial Assessment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We begin with a thorough review of your current financial
                    records, identifying strengths and areas for improvement in
                    your bookkeeping processes.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex items-center justify-center md:w-2/12">
                  <div className="w-16 h-16 bg-[#192A2D] rounded-full flex items-center justify-center text-white z-10 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
                <div className="w-full md:w-5/12 hidden md:block order-3"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-5/12 hidden md:block order-1"></div>
                <div className="relative order-1 md:order-2 flex items-center justify-center md:w-2/12">
                  <div className="w-16 h-16 bg-[#192A2D] rounded-full flex items-center justify-center text-white z-10 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pl-12 text-left order-2 md:order-3">
                  <span className="text-[#B69F63] font-semibold text-sm tracking-wider uppercase mb-1 block">
                    Step 2
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Custom Solution Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Based on your specific needs, we create a tailored
                    bookkeeping solution that addresses your business
                    requirements and goals.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-12 text-left md:text-right order-2 md:order-1">
                  <span className="text-[#B69F63] font-semibold text-sm tracking-wider uppercase mb-1 block">
                    Step 3
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Implementation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We set up systems, establish procedures, and begin the
                    regular recording and management of your financial
                    transactions.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex items-center justify-center md:w-2/12">
                  <div className="w-16 h-16 bg-[#192A2D] rounded-full flex items-center justify-center text-white z-10 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                <div className="w-full md:w-5/12 hidden md:block order-3"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-5/12 hidden md:block order-1"></div>
                <div className="relative order-1 md:order-2 flex items-center justify-center md:w-2/12">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#192A2D] to-[#28474d] rounded-full flex items-center justify-center text-white z-10 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <span className="text-xl font-bold">4</span>
                  </div>
                </div>
                <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pl-12 text-left order-2 md:order-3">
                  <span className="text-[#B69F63] font-semibold text-sm tracking-wider uppercase mb-1 block">
                    Step 4
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Regular Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide timely financial statements and insights that
                    help you understand your business's financial health and
                    performance.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-12 text-left md:text-right order-2 md:order-1">
                  <span className="text-[#B69F63] font-semibold text-sm tracking-wider uppercase mb-1 block">
                    Step 5
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We regularly review and refine our processes to ensure we're
                    meeting your evolving business needs and maximizing
                    efficiency.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex items-center justify-center md:w-2/12">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#192A2D] to-[#28474d]  rounded-full flex items-center justify-center text-white z-10 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <span className="text-xl font-bold">5</span>
                  </div>
                </div>
                <div className="w-full md:w-5/12 hidden md:block order-3"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md  btn-style shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start Your Bookkeeping Journey
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#192A2D] to-[#29454a] py-16">
        <div className="container mx-auto px-4 ">
          <div className="max-w-3xl mx-auto text-center text-white ">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your bookkeeping?
            </h2>
            <p className="text-xl opacity-90 mb-8 text-white">
              Let our expert team take the burden of financial record-keeping
              off your shoulders so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                to="/contact"
                className="btn-style-2 font-medium py-3 px-8 rounded-lg  transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
