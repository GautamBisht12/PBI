import { ArrowRightIcon, CheckCircle, BarChart4, FileText } from "lucide-react";

import { Link } from "react-router-dom";

const Card = () => {
  const cardData = [
    {
      title: "Corporate Finance Management",
      points: [
        "Financial Planning and Analysis ",
        "Business Valuation",
        "Budgeting and Forecasting",
        "Cashflow Management",
        "Strategic Planning",
      ],
      icon: BarChart4,
      bgColor: "text-indigo-100",
      gradientFrom: "from-indigo-600",
    },
    {
      title: "Bookkeeping",
      points: [
        "Dedicated Bookkeeper ",
        "Weekly, Monthly or Annually bookkeeping",
        "Accrual or Cash Basis on US GAAP & IFRS",
        "Financial Reporting",
        "Strategic Planning",
      ],
      icon: CheckCircle,
      bgColor: "text-blue-100",
      gradientFrom: "from-blue-300",
    },
    {
      title: "Accounting",
      points: [
        "Dedicated Accountant ",
        "Accounts Payable ",
        "Accounts Receivable ",
        "Record to Report",
        "Financial Reporting",
      ],
      icon: FileText,
      bgColor: "text-indigo-100",
      gradientFrom: "from-indigo-600",
    },
  ];

  return (
    <>
      <div className="mb-22">
        <div className="text-center m-16 mb-32">
          <h2 className="heading-tagline text-3xl font-extrabold text-black sm:text-5xl relative inline-block">
            Explore our Services
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-2xl text-gray-800 font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Discover how our services can help you achieve your goals.
            </span>
            <span className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#b69f63] opacity-5 rounded-full blur-xl"></span>
          </p>
        </div>

        <div className="space-y-6 lg:px-8 mt-20 text-center group ">
          <div className="mx-auto grid justify-center gap-16 sm:grid-cols-2 md:max-w-[74rem] md:grid-cols-3 lg:pb-10">
            {cardData.map((d, index) =>
              d.title === "Bookkeeping" ? (
                <div
                  key={index}
                  className="pricing-wrapper col-span-1 md:col-span-1 lg:col-span-1 w-full relative rounded-2xl bg-gradient-to-t from-blue-300 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]"
                  style={{ transform: "scale(1.25)" }} // Makes this card slightly larger
                >
                  <div className="relative pricing-cloud rounded-2xl p-8 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-between will-change-transform">
                    <div>
                      <h3 className="plan-title text-xl font-bold text-gray-800">
                        {d.title}
                      </h3>
                      {/* <div className="mt-4 flex justify-center">{d.icon}</div> */}
                      <ul className="text-gray-800 mt-6 ">
                        {d.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start mb-3 justify-start"
                          >
                            <span className="text-[#B69F63] mr-2">•</span>
                            <span className="text-left">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center text-primary-700 font-medium mt-6 group cursor-pointer hover:text-[#867345]">
                      <Link
                        to="/services"
                        className="transition-colors duration-300"
                      >
                        Explore more
                      </Link>
                      <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="iconify absolute top-8 left-8 text-[500px] z-[-1] pointer-events-none text-blue-100 transition duration-1000 delay-200 group-hover:-translate-y-8 group-hover:-translate-x-8"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16 2H8C6.897 2 6 2.897 6 4v16c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h8v16zM9 7h6v2H9V7zm0 4h6v2H9v-2zm0 4h4v2H9v-2z"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="pricing-wrapper w-full relative rounded-2xl bg-gradient-to-t from-indigo-600 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]"
                >
                  <div className="relative bg-white rounded-2xl p-8 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-between will-change-transform">
                    <div>
                      <h3 className="plan-title text-xl text-gray-800">
                        {d.title}
                      </h3>
                      {/* <div className="mt-4 flex justify-center">{d.icon}</div> */}
                      <ul className="text-gray-800 mt-4 text-balance">
                        {d.points.map((point, idx) => (
                          <li key={idx} className="flex items-start mb-2">
                            <span className="text-[#B69F63] mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-primary-700 font-medium mt-4 group cursor-pointer hover:text-[#7a693e]">
                      <Link
                        to="/services"
                        className="transition-colors duration-300"
                      >
                        Explore more
                      </Link>
                      <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    </div>
                    {d.title === "Accounting" ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify absolute top-8 left-4 text-[500px] z-[-1] pointer-events-none text-purple-100 transition duration-1000 delay-1000 group-hover:-translate-y-8 group-hover:-translate-x-8"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M17 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2m-1 14h-2v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h4v-1H9a1 1 0 0 1 0-2h2v-1a1 1 0 0 1 2 0v1h2a1 1 0 0 1 0 2h-4v1h3a1 1 0 0 1 0 2Z"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify absolute top-8 left-4 text-[500px] z-[-1] pointer-events-none text-indigo-100 transition duration-1000 delay-1000 group-hover:-translate-y-8 group-hover:-translate-x-8"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M3 17h2v4H3v-4zm4-4h2v8H7v-8zm4-4h2v12h-2V9zm4-4h2v16h-2V5zm4-3h2v19h-2V2z"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm btn-style-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
          >
            Explore All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
