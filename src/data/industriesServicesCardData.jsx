import {
  BarChart2,
  Briefcase,
  Building,
  Calculator,
  Clock,
  CreditCard,
  DollarSign,
  FileSpreadsheet,
  FileText,
  Globe,
  HardHat,
  Heart,
  Lightbulb,
  MapPin,
  Monitor,
  Package,
  Shield,
  ShoppingCart,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";

// Industry-specific services data
export const industryServicesBookkeeping = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce & DTC Brands",
    description:
      "Multi-channel reconciliation, inventory tracking, and profit margin clarity across Shopify, Amazon, Walmart, eBay, etc.",
    features: [
      {
        icon: <BarChart2 className="w-4 h-4" />,
        text: "Accurate product-wise P&L",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Inventory-linked cost analysis",
      },
      {
        icon: <CreditCard className="w-4 h-4" />,
        text: "Marketplace fee reconciliation",
      },
      {
        icon: <FileText className="w-4 h-4" />,
        text: "Sales tax tracking & reporting",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Wholesale & Distribution",
    description:
      "Real-time financial control for inventory-heavy and logistics-dependent businesses.",
    features: [
      {
        icon: <Briefcase className="w-4 h-4" />,
        text: "Purchase order & supplier tracking",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Inventory shrinkage detection",
      },
      {
        icon: <Globe className="w-4 h-4" />,
        text: "Freight & customs expense monitoring",
      },
      {
        icon: <MapPin className="w-4 h-4" />,
        text: "Multi-location inventory reconciliation",
      },
    ],
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Healthcare & Wellness",
    description:
      "HIPAA-compliant bookkeeping for medical practitioners, clinics, and wellness brands.",
    features: [
      {
        icon: <Shield className="w-4 h-4" />,
        text: "Insurance claims reconciliation",
      },
      {
        icon: <Users className="w-4 h-4" />,
        text: "Patient payment tracking",
      },
      {
        icon: <Calculator className="w-4 h-4" />,
        text: "Equipment depreciation",
      },
      {
        icon: <FileSpreadsheet className="w-4 h-4" />,
        text: "Tax-deductible expense categorization",
      },
    ],
    gradient: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Construction & Real Estate",
    description:
      "Job costing, WIP tracking, and vendor coordination for builders, developers, and agents.",
    features: [
      {
        icon: <Target className="w-4 h-4" />,
        text: "Project-based expense tracking",
      },
      {
        icon: <Clock className="w-4 h-4" />,
        text: "Contractor/vendor payment schedules",
      },
      {
        icon: <FileText className="w-4 h-4" />,
        text: "Retainage & invoice control",
      },
      {
        icon: <Building className="w-4 h-4" />,
        text: "Property-wise profitability reports",
      },
    ],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Agencies & Creatives",
    description:
      "Simplified financial clarity for marketing, consulting, and creative service-based businesses.",
    features: [
      {
        icon: <DollarSign className="w-4 h-4" />,
        text: "Retainer vs. project billing tracking",
      },
      {
        icon: <UserCheck className="w-4 h-4" />,
        text: "Client invoicing & AR management",
      },
      {
        icon: <Monitor className="w-4 h-4" />,
        text: "Software subscription cost control",
      },
      {
        icon: <TrendingUp className="w-4 h-4" />,
        text: "Team-based profitability metrics",
      },
    ],
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export const industryServicesAccounting = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce ",
    description: "",
    features: [
      {
        icon: <BarChart2 className="w-4 h-4" />,
        text: "Multi-channel transaction management",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Inventory & profit reporting",
      },
      {
        icon: <CreditCard className="w-4 h-4" />,
        text: "Merchant fee and refund tracking",
      },
      {
        icon: <FileText className="w-4 h-4" />,
        text: "Gross margin analysis",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Manufacturing & Wholesale (B2B)",
    description: "",
    features: [
      {
        icon: <Briefcase className="w-4 h-4" />,
        text: "O2C & P2P workflow support",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Bulk transaction processing",
      },
      {
        icon: <Globe className="w-4 h-4" />,
        text: "Inventory valuation & COGS tracking",
      },
      {
        icon: <MapPin className="w-4 h-4" />,
        text: "Cash flow & profitability reporting",
      },
    ],
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Healthcare",
    description: "",
    features: [
      {
        icon: <Shield className="w-4 h-4" />,
        text: "Vendor payment management",
      },
      {
        icon: <Users className="w-4 h-4" />,
        text: "Insurance claim reconciliation",
      },
      {
        icon: <Calculator className="w-4 h-4" />,
        text: "Cash flow visibility",
      },
    ],
    gradient: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Hospitality",
    description: "",
    features: [
      {
        icon: <Target className="w-4 h-4" />,
        text: "Daily sales & POS reconciliation",
      },
      {
        icon: <Clock className="w-4 h-4" />,
        text: "Payroll & vendor expense tracking",
      },
      {
        icon: <FileText className="w-4 h-4" />,
        text: "Profitability reporting",
      },
    ],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];
