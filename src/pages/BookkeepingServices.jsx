import { useState } from "react";
import {
  BookOpen,
  CreditCard,
  FileText,
  DollarSign,
  Book,
  Clock,
  FileSpreadsheet,
  Calculator,
  Briefcase,
  UserCheck,
  BarChart2,
  TrendingUp,
  LineChart,
  PieChart,
} from "lucide-react";
import HeroSection from "../components/ui/HeroSection";
import FAQ from "../components/ui/FAQ";
import Testimonials from "../components/ui/Testimonials";
import { Link } from "react-router-dom";

export default function BookkeepingService() {
  const [activeTab, setActiveTab] = useState("core");
  const heroDetails = {
    heroTitle: "Bookkeeping Services We Can Offer",
    heroSubtitle:
      "We provide comprehensive bookkeeping solutions tailored to your business needs, ensuring your financial records are accurate, up-to-date, and compliant.",
    heroImage: "https://wallpaperaccess.com/full/153208.jpg",
  };

  const CoreServices = [
    {
      icon: <BookOpen size={24} />,
      title: "Transaction Recording",
      description:
        "Accurate recording of all your business transactions, ensuring your financial data is up-to-date and organized.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Bank & Credit Card Reconciliation",
      description:
        "Regular reconciliation of all accounts to ensure your books match your bank statements and identify any discrepancies.",
    },
    {
      icon: <FileText size={24} />,
      title: "Accounts Payable (AP) Management",
      description:
        "Tracking and managing all vendor invoices, ensuring timely payments and maintaining good vendor relationships.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Accounts Receivable (AR) Management",
      description:
        "Monitoring customer invoices and payments to improve cash flow and reduce late payments.",
    },
    {
      icon: <Book size={24} />,
      title: "General Ledger Management",
      description:
        "Maintaining your company's master accounting records with precision and accuracy.",
    },
    {
      icon: <Clock size={24} />,
      title: "Catch-Up Bookkeeping",
      description:
        "Bringing your books up-to-date if they've fallen behind, restoring order to your financial records.",
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Financial Statement Preparation",
      description:
        "Creating professional balance sheets, income statements, and cash flow statements.",
    },
    {
      icon: <Calculator size={24} />,
      title: "Tax-Ready Reporting",
      description:
        "Preparing all necessary financial documents for smooth tax filing and compliance.",
    },
  ];

  const AdditionalServices = [
    {
      icon: <Briefcase size={24} />,
      title: "Record to Report Process Management",
      description:
        "Streamlining the entire financial close process from transaction recording to financial statement generation.",
    },
    {
      icon: <UserCheck size={24} />,
      title: "Payroll Recording & Processing",
      description:
        "Managing employee payroll with accuracy, ensuring proper tax withholding and timely payments.",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Financial Reporting",
      description:
        "Creating customized financial reports that provide meaningful insights into your business performance.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Budgeting and Forecasting",
      description:
        "Developing realistic budgets and forecasts to help plan for your business's future growth.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Business Valuation",
      description:
        "Determining the economic value of your business to support investment decisions and growth strategies.",
    },
    {
      icon: <PieChart size={24} />,
      title: "Financial Planning",
      description:
        "Creating comprehensive financial roadmaps to help achieve your business goals and objectives.",
    },
  ];

  const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-1 flex flex-col h-full">
      <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection heroDetails={heroDetails} />
      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Services Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab("core")}
              className={`px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                activeTab === "core"
                  ? "bg-[#192D2F] text-[#cfb675]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Core Bookkeeping Tasks
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                activeTab === "additional"
                  ? "bg-[#192D2F] text-[#cfb675]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Additional Accounting Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "core"
            ? CoreServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))
            : AdditionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:max-w-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to streamline your bookkeeping?
              </h2>
              <p className="text-lg text-gray-600">
                Let our expert team handle your financial records while you
                focus on growing your business. We offer customized solutions
                that fit your specific needs and budget.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-style font-medium py-3 px-8 rounded-lg  transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-blue-600 text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
