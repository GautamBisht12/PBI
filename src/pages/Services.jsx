import { useState } from "react";
import HeroSection from "../components/ui/HeroSection";
import { CheckCircle } from "lucide-react";
import CTA from "../components/ui/CTA";
import FAQ from "../components/ui/FAQ";

const Services = () => {
  const [heroDetails] = useState({
    heroTitle: "Corporate Finance, Accounting & Bookkeeping",
    heroSubtitle:
      "Services designed to strengthen the financial backbone of your business. ",
    heroImage: "https://wallpaperaccess.com/full/153208.jpg",
  });

  const serviceCategories = [
    {
      title: "Accounting",
      description:
        "Comprehensive accounting solutions tailored to your business needs.",
      services: [
        "Dedicated Accountant ( expertise in relevant industry)",
        "Day To Day Accounting Tasks ",
        "Bank & Credit Card Reconciliation",
        "Accounts Payable (AP) Management",
        "Accounts Receivable (AR) Management",
      ],
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Bookkeeping",
      description:
        "Expert bookkeeping services to keep your financial records accurate and up-to-date.",
      services: [
        "Monthly Financial Statements",
        "General Ledger Maintenance",
        "Payroll Processing",
        "Sales Tax Preparation",
        "Financial Reporting & Analysis",
        "Budgeting & Forecasting",
      ],
      image:
        "https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tlZXBpbmclMjBhY2NvdW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Corporate Finance Management",
      description:
        "Comprehensive branding solutions to establish a strong market presence.",
      services: [
        "Financial planning and analysis ",
        "Financial planning and business valuation",
        "Budgeting and Forecasting",
        "Cashflow management",
        "Strategic planning",
      ],
      image:
        "https://th.bing.com/th/id/OIP.tPVB-7ooVwyiqBXrzVYyVAHaE8?cb=iwp2&w=1600&h=1067&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection heroDetails={heroDetails} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Trusted Corporate Finance, Accounting & Bookkeeping for US
            Businesses
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Accurate, compliant, and tailored financial solutions that
            strengthen your business and drive strategic growth.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.services.map((service, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[#B69D62] flex-shrink-0" />
                      <span className="text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}

        {/* Testimonials */}
      </div>
      <CTA />
      <FAQ />
    </div>
  );
};

export default Services;
