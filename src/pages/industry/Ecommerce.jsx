import { Link } from "react-router-dom";
import HeroSection from "../../components/ui/HeroSection";
import WorkedWith from "../../components/ui/WorkedWith";
import { FaAmazon, FaEbay, FaEtsy, FaShopify } from "react-icons/fa";
import { BsAmazon, BsStripe } from "react-icons/bs";
import { ClockIcon } from "lucide-react";
import { MdInventory } from "react-icons/md";
import CTA from "../../components/ui/CTA";
import FAQ from "../../components/ui/FAQ";
import { Helmet } from "react-helmet-async";

const Ecommerce = () => {
  const heroData = {
    heroTitle: "E-Commerce Bookkeeping, Accounting, and Finance Management",
    heroSubtitle:
      " Accounting that understands ECommerce—because it’s what we do best.",
    heroImage: "/hero/documents.webp",
    btnText: "Consult with our E-Commerce Expert",
    btnLink: "https://calendly.com/upsellfinlogix/30min",
  };

  const companies = [
    {
      name: "Shopify",
      logo: <FaShopify className="w-8 h-8" />,
    },
    {
      name: "Amazon",
      logo: <FaAmazon className="w-8 h-8" />,
    },
    ,
    {
      name: "Walmart",
      logo: <FaEbay className="w-12 h-12" />,
    },
  ];

  const offerings = [
    {
      title: "Bookeepping & Accounting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-blue"
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
      ),
    },
    {
      title: "Tax Reporting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM8 15h5v-2H8v2zm0-4h8v-2H8v2zm0-4h8V5H8v2z" />
          <path d="M14.5 13.5c-.3 0-.5.2-.5.5v1c0 .6.4 1 1 1h.5c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1z" />
        </svg>
      ),
    },
    {
      title: "Corporate Finance Consultancy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 2h4c.6 0 1 .4 1 1v2h4c1.1 0 2 .9 2 2v3h-2V7h-2v2h-2V7h-2v2h-2V7H9v2H7V7H5v3H3V7c0-1.1.9-2 2-2h4V3c0-.6.4-1 1-1zm1 3h2V4h-2v1zM3 12h2v5H3v-5zm4 2h2v3H7v-3zm4-3h2v6h-2v-6zm4 2h2v4h-2v-4zm4-1h2v5h-2v-5zM3 19h18v2H3v-2z" />
        </svg>
      ),
    },
    {
      title: "Finance Process Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-1-5h2v1h-2v-1zm0 2h2v1h-2v-1z" />
          <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l1.84-1.43a.5.5 0 0 0 .11-.65l-1.75-3.03a.5.5 0 0 0-.61-.22l-2.17.87a7.15 7.15 0 0 0-1.7-.98L14 2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5l-.26 2.06c-.63.24-1.2.56-1.7.98l-2.17-.87a.5.5 0 0 0-.61.22L2.62 9.54a.5.5 0 0 0 .11.65l1.84 1.43c-.05.32-.07.65-.07.98s.02.66.07.98l-1.84 1.43a.5.5 0 0 0-.11.65l1.75 3.03c.14.24.44.34.7.22l2.17-.87c.5.42 1.07.75 1.7.98L10 21.5c.04.28.25.5.5.5h3c.25 0 .46-.22.5-.5l.26-2.06c.63-.24 1.2-.56 1.7-.98l2.17.87c.26.12.56.02.7-.22l1.75-3.03a.5.5 0 0 0-.11-.65l-1.84-1.43zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Ensure Profitability",
      description: "Strategic analysis to maximize your bottom line",
      icon: "$+",
    },
    {
      title: "Capital Budgeting & Cost Reduction",
      description: "Smart investment decisions and expense optimization",
      icon: "$-",
    },
    {
      title: "Forecasting & Valuation",
      description: "Data-driven insights for future planning",
      icon: "$+",
    },
    {
      title: "Guide businesses in achieving their financial goals.",
      description: "Strategic financial planning and analysis",
      icon: "$+",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          E-Commerce Bookkeeping & Accounting Services | Upsell FinLogix
        </title>
        <meta
          name="description"
          content="Specialized e-commerce bookkeeping for online retailers. Multi-channel sales tracking, inventory management, Shopify & Amazon integration, payment reconciliation, and tax optimization for US e-commerce businesses."
        />
        <meta
          name="keywords"
          content="e-commerce bookkeeping, online retail accounting, Shopify bookkeeping, Amazon seller accounting, multi-channel sales tracking, inventory management, payment reconciliation, e-commerce tax compliance, online business accounting, marketplace accounting, Stripe integration, e-commerce financial reports"
        />
        <meta
          property="og:title"
          content="Expert E-Commerce Bookkeeping & Financial Management | Upsell FinLogix"
        />
        <meta
          property="og:description"
          content="Professional bookkeeping services built for e-commerce success. Dedicated accountants with 10+ years of online retail expertise, real-time tracking, and seamless platform integration."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        />
        <meta
          property="og:url"
          content="https://www.upsellfinlogix.com/industry/ecommerce"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://www.upsellfinlogix.com/industry/ecommerce"
        />
      </Helmet>

      <HeroSection heroDetails={heroData} />

      {/* Specialization Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SPECIALIZATION IN E-COMMERCE
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                WHO WE ARE
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="text-[#B69D62] font-extrabold">
                  {" "}
                  Upsell FinLogix{" "}
                </span>{" "}
                is a corporate finance firm specializing in bookkeeping,
                accounting, and financial management solutions. Backed by over a
                decade of dedicated e-commerce expertise through Upsell
                E-Commerce, we combine deep E-Commerce industry insight with
                corporate finance mastery to deliver strategic, reliable, and
                growth-focused financial services.
              </p>
            </div>
            <div className="relative">
              <img
                src="/industry/ecommerce-page-whoWeAre.webp"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Profitable Bookkeeping and Finance Management Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center  mb-14">
          Bookkeeping, Accounting & Financial Management <br />
          That Drive Profitability
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Grid like structure with relevant images - Left Side */}
            <div className="relative">
              {/* Main grid container */}
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                {/* Top left - Large card */}
                <div className=" bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <ClockIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white ">
                      Real-Time Bookkeeping
                    </h3>
                    <p className="text-green-100 text-sm">
                      Timely transaction reconciliation and financial tracking
                      to ensure your business records remain accurate, current,
                      and ready for smarter decisions.
                    </p>
                  </div>
                </div>

                {/* Top right - Medium card */}
                <div className=" bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6  justify-between shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <MdInventory className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white ">
                    Inventory Intelligence
                  </h3>
                  <p className="text-green-100 text-sm">
                    Advanced inventory tracking and cost analysis to optimize
                    your product portfolio and maximize margins.
                  </p>
                </div>

                {/* Bottom left - Medium card */}
                <div className=" bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white ">
                      Tax-Ready Reports
                    </h3>
                    <p className="text-green-100 text-sm">
                      Comprehensive financial documentation prepared for tax
                      compliance and optimized for e-commerce business
                      deductions.
                    </p>
                  </div>
                </div>

                {/* Bottom right - Large card */}
                <div className=" rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-between shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Growth Strategy
                    </h3>
                    <p className="text-orange-100 text-sm">
                      Strategic planning for sustainable growth, combining
                      capital budgeting, cost reduction, and profit-maximizing
                      strategies to drive long-term success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-4">
                  Financial Excellence
                </div>
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Upsell
                  <span className=" bg-clip-text text-[#B69D62]">
                    {" "}
                    FinLogix
                  </span>
                </h2>
                <p className="text-gray-300 text-2xl leading-relaxed font-light mb-6">
                  Profitable Bookkeeping & Financial Management for US
                  E-commerce Businesses
                </p>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <span className="text-gray-400 text-lg font-medium">
                    How Upsell FinLogix helps online sellers grow smarter and
                    stay compliant
                  </span>
                </div>
              </div>

              {/* Stats or features */}
              <div className="flex flex-col flex-wrap justify-start space-x-4">
                <span className="font-semibold text-base ml-5 mb-2">
                  Marketplaces:
                </span>
                <div className="flex gap-4">
                  {companies.map((c) => (
                    <>
                      <div className="p-2 w-20 bg-white/5 rounded-xl flex justify-center items-center backdrop-blur-sm border border-white/10">
                        {c.logo}
                      </div>
                    </>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/profitable-bookkeeping-and-finance-management"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#192d2f] bg-[#B69F63] hover:bg-[#192d2f] hover:text-white  hover:border-[#B69F63] shadow-md  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  More Info
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
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

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Bookkeeping built for eccommerce */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Section - Left */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Bookkeeping, Built for
                  <span className="text-blue-600"> ECommerce</span>
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#B69D62]">
                  Upsell FinLogix
                </span>{" "}
                specializes exclusively in bookkeeping services tailored for
                e-commerce businesses. With over a decade of deep e-commerce
                experience, we understand the unique financial complexities
                faced by online sellers — from multi-channel sales tracking to
                inventory management and payment reconciliations.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our expert bookkeeping solutions ensure:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Accurate, real-time financial records that keep you
                      audit-ready
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      By{" "}
                      <strong>Dedicated Accountant + E-commerce Expert</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Seamless integration with leading platforms like Shopify,
                      Amazon, and Stripe
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Detailed transaction categorization to maximize tax
                      benefits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Transparent, timely reporting for smarter business
                      decisions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Strict data confidentiality and compliance with industry
                      standards
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl text-white">
                <p className="text-lg font-medium text-white">
                  Partner with{" "}
                  <span className="font-bold">Upsell FinLogix</span> for
                  bookkeeping that goes beyond numbers — empowering you to scale
                  confidently with financial clarity and control.
                </p>
              </div>
            </div>

            {/* Images Section - Right */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                {/* Large image - top left */}
                <div className="row-span-2">
                  <img
                    src="/industry/ecommerce-page-img1.webp"
                    alt="E-commerce analytics dashboard"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>

                {/* Top right */}
                <div>
                  <img
                    src="/industry/ecommerce-page-img2.webp"
                    alt="Financial charts and graphs"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>

                {/* Bottom right */}
                <div>
                  <img
                    src="/industry/ecommerce-page-img3.webp"
                    alt="Online shopping and e-commerce"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>

              {/* Floating elements for modern touch */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#B69D62] rounded-full opacity-30 animate-pulse delay-1000"></div>

              {/* Platform logos overlay */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-3">
                  <span>Marketplaces:</span>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      <FaShopify size={20} />
                    </div>
                    <div className="w-8 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      <BsAmazon size={20} />
                    </div>
                    <div className="w-8 h-8 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      <BsStripe size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              WE ALWAYS GIVE THE BEST FOR OUR CLIENTS
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-green-300 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We DO Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
              What we Do
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional service and ensuring
              your financial operations are accurate and timely.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Replace this with actual icons for each service if you have them */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                    {offering.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {offering.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <WorkedWith />

      <FAQ />
    </>
  );
};

export default Ecommerce;
