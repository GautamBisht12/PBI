import {
  ArrowRightIcon,
  CheckCircle,
  BarChart4,
  FileText,
  Book,
} from "lucide-react";

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
        <div className="text-center m-16 mb-20">
          <h2 className="heading-tagline text-2xl font-extrabold text-black sm:text-4xl relative inline-block">
            Explore our Services
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-800 font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Discover how our services can help you achieve your goals.
            </span>
            <span className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#b69f63] opacity-5 rounded-full blur-xl"></span>
          </p>
        </div>

        <div className="space-y-6 lg:px-8 mt-20 text-center group">
          <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[74rem] md:grid-cols-3 lg:pb-10">
            {cardData.map((d, index) =>
              d.title === "Bookkeeping" ? (
                <div
                  key={index}
                  className="pricing-wrapper col-span-1 md:col-span-1 lg:col-span-1 w-full relative rounded-2xl bg-gradient-to-t from-blue-300 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]"
                  style={{ transform: "scale(1.08)" }} // Reduced scale from 1.15 to 1.08
                >
                  <div className="relative pricing-cloud rounded-2xl p-5 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-evenly will-change-transform">
                    <div>
                      <div className="w-14 h-14 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-3 mx-auto shadow-[0_0px_25px_0px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 text-blue-300"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <polyline
                            points="6,25 6,3 22,3 22,26 7,26"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <polyline
                            points="22,5 25,5 25,29 8,29 6,26"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <polyline
                            points="6,24 6,26 8,29 12,29"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <line
                            x1="9"
                            y1="7"
                            x2="19"
                            y2="7"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <h3 className="plan-title text-xl font-bold text-gray-800">
                        {d.title}
                      </h3>
                      <ul className="text-gray-800 mt-4">
                        {d.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start mb-2 justify-start font-bold"
                          >
                            <span className="text-[#B69F63] mr-2">•</span>
                            <span className="text-left text-sm md:text-base">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center text-primary-700 font-medium mt-2 group cursor-pointer hover:text-[#867345]">
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
                      className="iconify absolute top-28 left-24 text-[350px] z-[-1] pointer-events-none text-[#669ede] opacity-30 transition duration-1000 delay-200 group-hover:-translate-y-8 group-hover:-translate-x-8"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <polyline
                        points="6,25 6,3 22,3 22,26 7,26"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                      <polyline
                        points="22,5 25,5 25,29 8,29 6,26"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                      <polyline
                        points="6,24 6,26 8,29 12,29"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                      <line
                        x1="9"
                        y1="7"
                        x2="19"
                        y2="7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="pricing-wrapper w-full relative rounded-2xl bg-gradient-to-t from-indigo-600 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]"
                >
                  <div className="relative bg-white rounded-2xl p-6 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-between will-change-transform">
                    <div>
                      {d.title === "Accounting" ? (
                        <div className="w-14 h-14 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.3)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-blue-300"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M10.5,2C9.8,2,9.3,2.4,9.1,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V11 c0-0.6-0.4-1-1-1h-2V5c0-1.1-0.9-2-2-2h-4.1C11.7,2.4,11.2,2,10.5,2z M10.5,3C10.8,3,11,3.2,11,3.5S10.8,4,10.5,4S10,3.8,10,3.5 S10.2,3,10.5,3z M5.5,5H8v1h5V5h2.5C15.8,5,16,5.2,16,5.5V10h-3c-0.6,0-1,0.4-1,1v8H5.5C5.2,19,5,18.8,5,18.5v-13 C5,5.2,5.2,5,5.5,5z M10.6,8.4h-4v2h4V8.4z M10.6,11.4h-4v2h4V11.4z M10.6,14.5h-4v2h4V14.5z M14,12h5v2h-5V12z M14,15h2v2h-2V15z M17,15h2v2h-2V15z M14,18h2v2h-2V18z M17,18h2v2h-2V18z"
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.3)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-blue-300"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67c0-.84.79-1.43 2.1-1.43c1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81c0 1.79 1.49 2.69 3.66 3.21c1.95.46 2.34 1.15 2.34 1.87c0 .53-.39 1.39-2.1 1.39c-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77c-.01-2.2-1.9-2.96-3.66-3.42z"
                            />
                          </svg>
                        </div>
                      )}
                      <h3 className="plan-title text-xl text-gray-800 font-extrabold">
                        {d.title}
                      </h3>
                      <ul className="text-gray-800 mt-3 text-balance">
                        {d.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start mb-2 justify-start font-semibold"
                          >
                            <span className="text-[#B69F63] mr-2">•</span>
                            <span className="text-left text-sm md:text-base">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-primary-700 font-bold mt-3 group cursor-pointer hover:text-[#7a693e]">
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
                          className="iconify absolute top-28 left-24 text-[350px] z-[-1] pointer-events-none text-[#669ede] opacity-30 transition duration-1000 delay-200 group-hover:-translate-y-8 group-hover:-translate-x-8"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M10.5,2C9.8,2,9.3,2.4,9.1,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V11 c0-0.6-0.4-1-1-1h-2V5c0-1.1-0.9-2-2-2h-4.1C11.7,2.4,11.2,2,10.5,2z M10.5,3C10.8,3,11,3.2,11,3.5S10.8,4,10.5,4S10,3.8,10,3.5 S10.2,3,10.5,3z M5.5,5H8v1h5V5h2.5C15.8,5,16,5.2,16,5.5V10h-3c-0.6,0-1,0.4-1,1v8H5.5C5.2,19,5,18.8,5,18.5v-13 C5,5.2,5.2,5,5.5,5z M10.6,8.4h-4v2h4V8.4z M10.6,11.4h-4v2h4V11.4z M10.6,14.5h-4v2h4V14.5z M14,12h5v2h-5V12z M14,15h2v2h-2V15z M17,15h2v2h-2V15z M14,18h2v2h-2V18z M17,18h2v2h-2V18z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify absolute top-28 left-24 text-[350px] z-[-1] pointer-events-none text-[#669ede] opacity-30 transition duration-1000 delay-200 group-hover:-translate-y-8 group-hover:-translate-x-8"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67c0-.84.79-1.43 2.1-1.43c1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81c0 1.79 1.49 2.69 3.66 3.21c1.95.46 2.34 1.15 2.34 1.87c0 .53-.39 1.39-2.1 1.39c-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77c-.01-2.2-1.9-2.96-3.66-3.42z"
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
