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

export default function BookkeepingService() {
  const [activeTab, setActiveTab] = useState("core");

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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bookkeeping Services We Can Offer
            </h1>
            <p className="text-xl opacity-90 mb-8 text-yellow-300">
              We provide comprehensive bookkeeping solutions tailored to your
              business needs, ensuring your financial records are accurate,
              up-to-date, and compliant.
            </p>
            <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Services Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab("core")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === "core"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Core Bookkeeping Tasks
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === "additional"
                  ? "bg-blue-600 text-white"
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
              <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Their bookkeeping services have transformed how we manage our
                finances. Accurate, timely, and incredibly helpful in making
                business decisions."
              </p>
              <div>
                <p className="font-medium text-gray-800">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">CEO, Retail Solutions</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I was months behind on my books when I found this team. Their
                catch-up services were efficient and their ongoing support is
                invaluable."
              </p>
              <div>
                <p className="font-medium text-gray-800">Michael Chen</p>
                <p className="text-gray-500 text-sm">Owner, Tech Solutions</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The financial reports they provide have given me clear insights
                into my business performance. Their expertise has been crucial
                for our growth."
              </p>
              <div>
                <p className="font-medium text-gray-800">Lisa Martinez</p>
                <p className="text-gray-500 text-sm">
                  Director, Healthcare Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              How often will my books be updated?
            </h3>
            <p className="text-gray-600">
              We offer flexible schedules based on your business needs — weekly,
              bi-weekly, or monthly updates. For businesses with high
              transaction volumes, we recommend more frequent updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              What accounting software do you use?
            </h3>
            <p className="text-gray-600">
              We're proficient in all major accounting platforms including
              QuickBooks, Xero, Sage, and FreshBooks. We can work with your
              existing system or recommend one that suits your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Can you help with tax preparation?
            </h3>
            <p className="text-gray-600">
              While we prepare tax-ready financial statements, we partner with
              certified tax professionals for actual tax filing. We ensure
              seamless coordination between bookkeeping and tax services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              How do you handle confidential financial information?
            </h3>
            <p className="text-gray-600">
              We implement bank-level security protocols and encrypt all data.
              Our team members sign confidentiality agreements, and we maintain
              strict access controls to protect your sensitive information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
