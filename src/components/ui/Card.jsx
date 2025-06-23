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
      link: "/services#corporate-finance",
    },
    {
      title: "Bookkeeping",
      // subtitle: "Our Premier Service",
      points: [
        "Dedicated Bookkeeper",
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
      link: "/services#bookkeeping",
    },
    {
      title: "Accounting",
      points: [
        "Dedicated Accountant",
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
      link: "/services#accounting",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our services can help you achieve your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {cardData.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <div
                key={index}
                className={`
                  relative group transition-all duration-300 ease-in-out
                  ${
                    card.isMain
                      ? "lg:scale-110 lg:-translate-y-4 z-10"
                      : "hover:scale-105 hover:-translate-y-2"
                  }
                `}
              >
                {/* Main Service Badge */}
                {card.isMain && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`
                      bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} 
                      text-white px-6 py-2 rounded-full text-sm font-semibold
                      shadow-lg
                    `}
                    >
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`
                  h-full rounded-2xl border-2 ${card.borderColor} ${
                    card.bgColor
                  }
                  shadow-lg ${card.hoverShadow} hover:shadow-2xl
                  transition-all duration-300 ease-in-out
                  ${card.isMain ? "shadow-2xl ring-2 ring-blue-200" : ""}
                  overflow-hidden
                `}
                >
                  {/* Card Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className={`
                        p-4 rounded-2xl bg-white shadow-md
                        ${card.isMain ? "ring-2 ring-blue-200" : ""}
                      `}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${card.iconColor}`}
                        />
                      </div>
                    </div>

                    <h3
                      className={`
                      text-2xl font-bold text-gray-900 text-center mb-2
                      ${card.isMain ? "text-blue-900" : ""}
                    `}
                    >
                      {card.title}
                    </h3>

                    {card.subtitle && (
                      <p className="text-blue-600 text-center font-medium mb-4">
                        {card.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="px-8 pb-8">
                    <ul className="space-y-4">
                      {card.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div
                            className={`
                            flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3
                            bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo}
                          `}
                          />
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <Link
                        to={card.link}
                        className={`flex justify-center items-center
                        w-full py-3 px-6 rounded-xl font-semibold
                        bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo}
                        text-white shadow-lg hover:shadow-xl
                        transform hover:scale-105 transition-all duration-200
                        ${
                          card.isMain
                            ? "ring-2 ring-blue-300 ring-offset-2"
                            : ""
                        }
                      `}
                      >
                        {card.isMain ? "Get Started Today" : "Learn More"}
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

                  {/* Decorative Elements */}
                  <div
                    className={`
                    absolute top-0 right-0 w-32 h-32 opacity-10
                    bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo}
                    rounded-full transform translate-x-16 -translate-y-16
                  `}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/services" className="btn-style-3 p-4 rounded-lg">
            Explore all Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
