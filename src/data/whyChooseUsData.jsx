// prettier-ignore-file

import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaThumbtack,
} from "react-icons/fa";
import {
  Shield,
  Award,
  Code,
  Users,
  DollarSign,
  BarChart3,
  Calculator,
  FileBarChart2,
  PackageSearch,
} from "lucide-react";
import {
  FaBullseye,
  FaChartLine,
  FaClipboardCheck,
  FaGlobeAmericas,
  FaUserTie,
} from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";

// Add more configurations for different pages

export const accountingWhyChooseUs = {
  title: "Our Core Services",
  subtitle: "Expert Accounting Services for US Businesses",
  features: [
    {
      iconBgColor: "bg-blue-900",
      icon: <DollarSign className="h-8 w-8 text-green-300" />,
      title: "Accounts Payable (AP)",
      description:
        "Streamline your accounts payable process with our efficient solutions.",
    },
    {
      icon: <TbMoneybag className="h-8 w-8 text-green-300" />,
      iconBgColor: "bg-green-900",
      title: "Accounts Receivable (AR)",
      description: "Efficient management of your accounts receivable process.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-300" />,
      iconBgColor: "bg-purple-900",
      title: "Real-Time Operational Reporting (RTOR)",
      description:
        "Gain real-time insights into your business operations with our RTOR solutions.",
    },
    {
      icon: <FileBarChart2 className="h-8 w-8 text-orange-300" />,
      iconBgColor: "bg-orange-900",
      title: "Transaction Categorization & Reconciliation",
      description:
        "Automatically sort transactions and match records for accurate financial reporting.",
    },
    {
      icon: <PackageSearch className="h-8 w-8 text-yellow-300" />,
      iconBgColor: "bg-yellow-900",
      title: "Inventory & COGS Tracking",
      description:
        "Monitor inventory levels and track cost of goods sold in real time.",
    },
    {
      icon: <DocumentArrowDownIcon className="h-8 w-8 text-yellow-300" />,
      iconBgColor: "bg-yellow-900",
      title: "Financial Data Management",
      description:
        "Efficiently manage your financial data with our robust solutions.",
    },
  ],
};

export const financeWhyChooseUs = {
  title: "Why Partner With Upsell FinLogix",
  subtitle: "Unlock the Power of Financial Expertise for Your Business",
  features: [
    {
      iconBgColor: "bg-indigo-900",
      icon: <FaUserTie className="h-8 w-8 text-indigo-300" />,
      title: "Dedicated US-Focused Financial Specialists",
      description:
        "Work with experienced professionals specializing in US financial systems and compliance.",
    },
    {
      iconBgColor: "bg-emerald-900",
      icon: <FaChartLine className="h-8 w-8 text-emerald-300" />,
      title: "Operational Clarity + Growth Advisory",
      description:
        "Get clear financial direction and expert guidance for business growth.",
    },
    {
      iconBgColor: "bg-cyan-900",
      icon: <FaGlobeAmericas className="h-8 w-8 text-cyan-300" />,
      title: "Virtual Offshore Infrastructure for US Businesses",
      description:
        "Scale cost-effectively with a virtual offshore finance team tailored for the US market.",
    },
    {
      iconBgColor: "bg-fuchsia-900",
      icon: <FaClipboardCheck className="h-8 w-8 text-fuchsia-300" />,
      title: "Investor-Grade, Decision-Ready Reporting",
      description:
        "Present reliable, audit-ready reports for stakeholders and investors.",
    },
    {
      iconBgColor: "bg-red-900",
      icon: <FaBullseye className="h-8 w-8 text-red-300" />,
      title: "Proactive, Profit-Focused Financial Management",
      description:
        "Stay ahead with strategies focused on profitability and sustainable growth.",
    },
  ],
};

export const aboutPageWhyChooseUs = {
  title: "Why Choose Upsell Finlogix?",
  subtitle:
    "We're committed to delivering exceptional service and ensuring your financial operations are accurate and timely.",
  features: [
    {
      icon: <Shield className="h-8 w-8 text-blue-300" />,
      iconBgColor: "bg-blue-900",
      title: "Industry Expertise",
      description:
        "With extensive experience in a wide range of sectors, we understand the unique challenges your business faces.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-300" />,
      iconBgColor: "bg-green-900",
      title: "Commitment to Excellence",
      description:
        "We maintain the highest professional standards, delivering exceptional service and ensuring your financial operations are accurate.",
    },
    {
      icon: <Code className="h-8 w-8 text-purple-300" />,
      iconBgColor: "bg-purple-900",
      title: "Technology-Driven Solutions",
      description:
        "By leveraging advanced financial technologies, we streamline operations and provide real-time insights into your financial data.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-300" />,
      iconBgColor: "bg-orange-900",
      title: "Client-Centric Approach",
      description:
        "We put your business first, working closely with you to understand your needs and help you achieve your financial objectives.",
    },
  ],
};

// Example data for bookkeeping page
export const bookkeepingPageWhyChooseUs = {
  title: "Why Choose Our Bookkeeping Services?",
  subtitle:
    "We deliver precise, industry-specific bookkeeping solutions that help your business thrive.",
  features: [
    {
      icon: <Shield className="h-8 w-8 text-blue-300" />,
      iconBgColor: "bg-blue-900",
      title: "Industry-Focused Accuracy",
      description: "We don't generalize. We specialize.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-300" />,
      iconBgColor: "bg-green-900",
      title: "Compliance-Ready Records",
      description: "Prepared to meet IRS & state requirements.",
    },
    {
      icon: <Calculator className="h-8 w-8 text-purple-300" />,
      iconBgColor: "bg-purple-900",
      title: "Profit-Driving Insights",
      description: "We go beyond reports and help you make smarter decisions.",
    },
  ],
};

export const financeServices = [
  {
    iconBgColor: "bg-blue-900",
    icon: <FaChartLine className="h-8 w-8 text-blue-300" />,
    title: "Financial Planning & Analysis",
    description:
      "Strategic financial reviews, performance insights, and ROI opportunity mapping.",
  },
  {
    iconBgColor: "bg-green-900",
    icon: <FaMoneyBillWave className="h-8 w-8 text-green-300" />,
    title: "Budgeting, Forecasting & Modelling",
    description:
      "Multi-scenario cashflow forecasting and data-driven budgeting frameworks.",
  },
  {
    iconBgColor: "bg-teal-900",
    icon: <FaFileInvoiceDollar className="h-8 w-8 text-teal-300" />,
    title: "Cashflow & Liquidity Management",
    description:
      "Real-time cash monitoring and working capital optimization strategies.",
  },
  {
    iconBgColor: "bg-yellow-900",
    icon: <FaBalanceScale className="h-8 w-8 text-yellow-300" />,
    title: "Business Valuation & Financial Structuring",
    description:
      "Valuation reports for M&A and designing resilient financial frameworks.",
  },
  {
    iconBgColor: "bg-purple-900",
    icon: <FaThumbtack className="h-8 w-8 text-purple-300" />,
    title: "Strategic Financial Advisory",
    description:
      "Profitability planning and tailored recommendations for scalable growth.",
  },
];
