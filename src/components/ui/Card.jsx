import { BarChart4, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Card = () => {
  const cardData = [
    {
      title: "Corporate Finance Management",
      points: [
        "Financial Planning and Analysis",
        "Business Valuation",
        "Budgeting and Forecasting",
        "Cashflow Management",
        "Strategic Planning",
      ],
      icon: BarChart4,
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600",
      gradientFrom: "from-indigo-600",
      gradientTo: "to-indigo-700",
      borderColor: "border-indigo-200",
      hoverShadow: "hover:shadow-indigo-200/50",
      link: "/services/finance",
      isMain: false,
    },
    {
      title: "Bookkeeping ",
      // subtitle: "Our Premier Service",
      points: [
        "Dedicated Bookkeeper + Industry Expert",
        "Weekly, Monthly or Annually bookkeeping",
        "Accrual or Cash Basis on US GAAP & IFRS",
        "Financial Reporting",
        "Strategic Planning",
      ],
      icon: CheckCircle,
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      iconColor: "text-blue-600",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-600",
      borderColor: "border-blue-300",
      hoverShadow: "hover:shadow-blue-300/50",
      isMain: true,
      link: "/services/bookkeeping",
    },
    {
      title: "Accounting Process Support",
      points: [
        "Dedicated Accountant + Industry Expert",
        "Accounts Payable",
        "Accounts Receivable",
        "Record to Report",
        "Financial Reporting",
      ],
      icon: FileText,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-700",
      borderColor: "border-purple-200",
      hoverShadow: "hover:shadow-purple-200/50",
      link: "/services/accounting",
      isMain: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Explore our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Discover how our services can help you achieve your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 items-stretch">
          {cardData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`
            relative group transition-all duration-300 ease-in-out
            ${
              card.isMain
                ? "sm:scale-105 sm:-translate-y-2 z-10"
                : "hover:scale-102 sm:hover:scale-103 hover:-translate-y-1"
            }
          `}
              >
                {/* Most Popular Badge */}
                {card.isMain && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} 
                text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md`}
                    >
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Card Container */}
                <div
                  className={`h-full rounded-xl sm:rounded-2xl border-2 ${
                    card.borderColor
                  } ${card.bgColor}
              shadow-lg ${
                card.hoverShadow
              } hover:shadow-2xl transition-all duration-300 ease-in-out
              ${card.isMain ? "shadow-2xl ring-2 ring-blue-200" : "hover:z-30"}
               relative`}
                >
                  {/* Decorative Top-Right Circle - Hidden on mobile */}
                  <div
                    style={{ zIndex: 0 }}
                    className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-10 sm:opacity-15
                bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo}
                rounded-full transform translate-x-8 sm:translate-x-10 lg:translate-x-12 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12 
                hidden sm:block
                `}
                  />

                  {/* Card Header */}
                  <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <div
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-md ${
                          card.isMain ? "ring-2 ring-blue-200" : ""
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 sm:w-8 sm:h-8 ${card.iconColor}`}
                        />
                      </div>
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-bold text-gray-900 text-center mb-2 leading-tight ${
                        card.isMain ? "text-blue-900" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {card.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 mr-2 sm:mr-3 rounded-full bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} flex-shrink-0`}
                          />
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-4 sm:mt-6">
                      <Link
                        to={card.link}
                        className={`flex justify-center items-center
                    w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base
                    bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo}
                    text-white shadow-lg hover:shadow-xl
                    transform hover:scale-105 transition-all duration-200
                    ${card.isMain ? "ring-2 ring-blue-300 ring-offset-2" : ""}
                  `}
                      >
                        <span className="truncate">
                          {card.isMain
                            ? "Get Started Today"
                            : "View Service Details"}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5 ml-2 flex-shrink-0"
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
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/services"
            className="btn-style-3 p-3 sm:p-4 rounded-lg text-sm sm:text-base"
          >
            Explore all Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
