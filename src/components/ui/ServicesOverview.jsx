import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const services = [
  {
    title: "Bookkeeping & Accounting",
    description:
      "Learn how bookkeeping and accounting firms maintain financial clarity.",
    link: "/services/accounting",
    icon: "📊",
  },

  {
    title: "Bookkeeping Services",
    description: "Discover core bookkeeping tasks and additional services.",
    link: "/services/bookkeeping",
    icon: "📈",
  },
];

const ServicesOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#1E2D2F] from-white to-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          {/* Image div - responsive */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <img
              className="w-full max-w-md lg:max-w-none object-cover rounded-lg"
              src="https://thumbs.dreamstime.com/b/young-businessman-business-meeting-conference-room-office-66968197.jpg"
              alt="Professional consultant"
            />
          </div>
          {/* Text div - responsive */}
          <div className="w-full lg:w-7/12 px-10">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
                Our Focus Areas
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#B69F63] to-[#192A2D] transform -translate-y-0"></span>
              </h2>
              <p className="text-[#B79E63] max-w-2xl">
                Comprehensive financial solutions tailored to your business
                needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative hover:bg-[#1E2D2F] hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link to={service.link}>
                    <div className="p-4 rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                      {/* Gradient accent on hover */}
                      <div
                        className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white to-[#B69F63] transition-all duration-300 ${
                          hoveredIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      ></div>

                      {/* Icon with background */}
                      <div className="mb-4 bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center text-xl">
                        {service.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B79E63] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-white mb-4 flex-grow">
                        {service.description}
                      </p>

                      <div className="flex items-center text-[#B69D62] font-medium mt-auto">
                        <span>Learn more</span>
                        <ArrowRightIcon
                          className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                            hoveredIndex === index
                              ? "transform translate-x-1"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
