import { Link } from "react-router-dom";
import HeroSection from "../../components/ui/HeroSection";
import WorkedWith from "../../components/ui/WorkedWith";

const Ecommerce = () => {
  const heroData = {
    heroTitle: "Ecommerce Accounting and Compliance",
    heroSubtitle:
      " Accounting that understands ECommerce—because it’s what we do best.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    btnText: "Consult with our E-Commerce Expert",
  };

  const services = [
    {
      id: "01",
      title: "Bookkeeping & Accounting",
      // description:
      //   "Comprehensive financial record management tailored for E-Commerce operations",
      icon: "📊",
    },
    {
      id: "02",
      title: "Tax Reporting",
      // description:
      //   "Strategic tax planning and compliance for online businesses",
      icon: "📋",
    },
    {
      id: "03",
      title: "Corporate Finance Consultancy",
      // description: "Expert guidance for financial strategy and business growth",
      icon: "💼",
    },
    {
      id: "04",
      title: "Finance Process Management",
      // description: "Streamlined financial workflows and operational efficiency",
      icon: "⚙️",
    },
  ];

  const offerings = [
    {
      title: "Record to Report",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 0 1 1-1h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm12 0v4h4l-4-4zM6 10h6v2H6v-2zm0 4h9v2H6v-2z" />
        </svg>
      ),
    },
    {
      title: " Financial Statements",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6H5zm7 7V4l6 6h-6zM7 13h10v2H7v-2zm0 4h6v2H7v-2z" />
        </svg>
      ),
    },
    {
      title: "Finance Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6H5zm7 7V4l6 6h-6zM7 13h10v2H7v-2zm0 4h6v2H7v-2z" />
        </svg>
      ),
    },
    {
      title: "Valuation & Profitability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 17h2v-4h4v4h2V7h4v10h2V10h4v10h2v2H3v-2z" />
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">What we Do </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              We're committed to delivering exceptional service and ensuring
              your financial operations are accurate and timely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
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
              <h3 className="text-xl font-bold text-center mb-4">
                Bookeepping & Accounting
              </h3>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-300"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM8 15h5v-2H8v2zm0-4h8v-2H8v2zm0-4h8V5H8v2z" />
                  <path d="M14.5 13.5c-.3 0-.5.2-.5.5v1c0 .6.4 1 1 1h.5c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Tax Reporting
              </h3>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-300"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 2h4c.6 0 1 .4 1 1v2h4c1.1 0 2 .9 2 2v3h-2V7h-2v2h-2V7h-2v2h-2V7H9v2H7V7H5v3H3V7c0-1.1.9-2 2-2h4V3c0-.6.4-1 1-1zm1 3h2V4h-2v1zM3 12h2v5H3v-5zm4 2h2v3H7v-3zm4-3h2v6h-2v-6zm4 2h2v4h-2v-4zm4-1h2v5h-2v-5zM3 19h18v2H3v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Corporate Finance Consultancy
              </h3>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-1-5h2v1h-2v-1zm0 2h2v1h-2v-1z" />
                  <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l1.84-1.43a.5.5 0 0 0 .11-.65l-1.75-3.03a.5.5 0 0 0-.61-.22l-2.17.87a7.15 7.15 0 0 0-1.7-.98L14 2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5l-.26 2.06c-.63.24-1.2.56-1.7.98l-2.17-.87a.5.5 0 0 0-.61.22L2.62 9.54a.5.5 0 0 0 .11.65l1.84 1.43c-.05.32-.07.65-.07.98s.02.66.07.98l-1.84 1.43a.5.5 0 0 0-.11.65l1.75 3.03c.14.24.44.34.7.22l2.17-.87c.5.42 1.07.75 1.7.98L10 21.5c.04.28.25.5.5.5h3c.25 0 .46-.22.5-.5l.26-2.06c.63-.24 1.2-.56 1.7-.98l2.17.87c.26.12.56.02.7-.22l1.75-3.03a.5.5 0 0 0-.11-.65l-1.84-1.43zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Finance Process Management
              </h3>
            </div>
          </div>
        </div>
      </section>

      <WorkedWith />

      {/* What We Serve Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
              WHAT WE SERVE
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              Empowering your financial growth with expert guidance and smart
              strategies.
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
                  <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
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

      {/* Thank You Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">THANK YOU</h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            Your trust means everything to us. Thank you for the chance to
            showcase how we can create lasting value for your business.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-style text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecommerce;
