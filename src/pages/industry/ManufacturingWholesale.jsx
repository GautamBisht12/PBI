import { ClockIcon, Check, Cog, Book } from "lucide-react";
import HeroSection from "../../components/ui/HeroSection";
import { MdInventory } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { TbTax } from "react-icons/tb";
import CTA from "../../components/ui/CTA";
import { Link } from "react-router-dom";
import FAQ from "../../components/ui/FAQ";

const ManufacturingWholesale = () => {
  const heroData = {
    heroTitle: "Manufacturing & Wholesale",
    heroSubtitle:
      "Finance systems built for B2B efficiency, growth, and compliance.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    btnText: "Consult with our Manufacturing & Wholesale Expert",
    btnLink: "https://calendly.com/upsellfinlogix/30min",
  };

  const offerings = [
    {
      title: "Bookeepping ",
      icon: <Book className="w-8 h-8 text-white" />,
    },
    {
      title: "COGS Reporting",
      icon: <Cog className="w-8 h-8 text-white" />,
    },
    {
      title: "Tax Filing",
      icon: <TbTax className="w-8 h-8 text-white" />,
    },
    {
      title: "Corporate Finance Planning",
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
  ];

  return (
    <>
      <HeroSection heroDetails={heroData} />

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
                  Empowering B2B Manufacturers and Resellers with Expert
                  Bookkeeping and Finance Management. <br />
                </span>{" "}
                In the manufacturing and wholesale sector, financial oversight
                isn't just about balancing books—it's about managing margins,
                controlling cost flows, tracking inventories, and staying
                compliant across multiple states and supply chains. At
                UpsellFinLogix, we specialize in delivering precision-driven
                bookkeeping, smart compliance, and financial management
                solutions tailored to the unique needs of U.S.-based B2B
                manufacturers, wholesalers, and resellers.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Profitable Bookkeeping and Finance Management Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center  mb-14">
          Profitable Finance Solutions for Manufacturers & Wholesalers
        </h2>
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex   gap-16 items-center">
            {/* Grid like structure with relevant images - Left Side */}
            <div className="relative">
              {/* Main grid container */}
              <div className="grid grid-cols-4 gap-4 h-[200px]">
                {/* Top left - Large card */}
                <div className=" bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <MdInventory className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white ">
                      Inventory Reconciliation
                    </h3>
                    <p className="text-green-100 text-sm">
                      Align your financial records with physical inventory for
                      accurate reporting.
                    </p>
                  </div>
                </div>

                {/* Top right - Medium card */}
                <div className=" bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6  justify-between shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <BiAnalyse className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white ">
                    Margin Analysis
                  </h3>
                  <p className="text-green-100 text-sm">
                    Identify profit opportunities and optimize pricing
                    strategies.
                  </p>
                </div>

                {/* Bottom left - Medium card */}
                <div className=" bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <TbTax className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white ">
                      Tax Filing Support
                    </h3>
                    <p className="text-green-100 text-sm">
                      Industry-specific tax expertise to maximize compliance and
                      savings.
                    </p>
                  </div>
                </div>

                {/* Bottom right - Large card */}
                <div className=" rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-between shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
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
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Vendor Management Reporting
                    </h3>
                    <p className="text-orange-100 text-sm">
                      Track vendor performance and optimize your supply chain
                      costs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div> */}
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Expert Bookkeeping for Manufacturers Section  */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Expert Bookkeeping for Manufacturers
              </h2>

              <div className="space-y-6">
                {/* Dedicated Bookkeeper + Industry Expert */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Dedicated Bookkeeper + Industry Expert
                    </h3>
                    <p className="text-gray-600">
                      A team that understands manufacturing workflows and
                      financial needs.
                    </p>
                  </div>
                </div>

                {/* ERP & Inventory Sync */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      ERP & Inventory Sync
                    </h3>
                    <p className="text-gray-600">
                      Seamless integration with your existing systems for
                      accurate data flow.
                    </p>
                  </div>
                </div>

                {/* Real-Time Ledger Updates */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Real-Time Ledger Updates
                    </h3>
                    <p className="text-gray-600">
                      Always know your financial position with up-to-date
                      reporting.
                    </p>
                  </div>
                </div>

                {/* COGS Analysis + Purchase Order Tracking */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      COGS Analysis + Purchase Order Tracking
                    </h3>
                    <p className="text-gray-600">
                      Detailed insights into your cost structure and procurement
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                alt="Manufacturing bookkeeping and financial management"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We DO Section */}
      <section className="py-20  bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold  mb-4 tracking-tight">
              What we Do
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional service and ensuring
              your financial operations are accurate and timely.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Replace this with actual icons for each service if you have them */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-white/10 text-white p-2 rounded-full ">
                    {offering.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">
                  {offering.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA  */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Build Financial Strength with Us
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Trust-built finance for product-driven operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md btn-style shadow-md transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#192A2D] text-base font-medium rounded-md text-[#192A2D] bg-white hover:bg-blue-50 shadow-sm transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ  */}
      <FAQ />
    </>
  );
};

export default ManufacturingWholesale;
