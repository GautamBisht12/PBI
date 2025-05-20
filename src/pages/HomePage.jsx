import { Link } from "react-router-dom";
import { SignUpButton, useAuth } from "@clerk/clerk-react";
import {
  ChartBarIcon,
  LockClosedIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import ServicesOverview from "../components/ui/ServicesOverview";
import PricingSection from "../components/ui/PricingSection";
import { useEffect, useRef, useState } from "react";
import HeroSlider from "../components/ui/HeroSlidder";
import { ArrowRightIcon, Book, BookOpen, DollarSign } from "lucide-react";
import WorkedWith from "../components/ui/WorkedWith";
import Testimonials from "../components/ui/Testimonials";
import Card from "../components/ui/Card";

function HomePage() {
  const { isSignedIn } = useAuth();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const services = [
    "Bookkeeping",
    "Accounting",
    "Financial Reporting ",
    "Record to Report ",
    "Business valuation",
  ];

  const typingRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % services.length;
      const fullText = services[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 180);

      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1700);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingRef.current);
  }, [displayText, isDeleting, loopNum, services, typingSpeed]);

  return (
    <div className="fade-in">
      {/* Hero section */}
      <HeroSlider />
      {/* Explore our services section */}
      <Card />

      <section className="py-20 bg-white">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="heading-tagline  text-3xl font-extrabold text-black sm:text-5xl relative inline-block">
              Explore our Services
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-600 transform -translate-y-0"></span> */}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-2xl text-gray-800 font-extrabold">
              Discover how our services can help you achieve your goals.
            </p>
          </div>

          <div className="flex  gap-16 justify-center items-stretch">
            {/* Feature 1 */}
            <div className="flex-1 basis-full md:basis-[48%] lg:basis-[31%] max-w-full md:max-w-[48%] lg:max-w-[31%] bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <DollarSign className="h-8 w-8 text-[#b69f63]" size={24} />
                </div>
                <h3 className="heading-tagline text-xl font-bold text-center mb-4 text-white group-hover:text-[#B69F63]">
                  Corporate Finance Management
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Financial Planning and Analysis </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Business Valuation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Budgeting and Forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Cashflow Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Strategic Planning</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-[#B69D62] font-medium mt-4 group cursor-pointer hover:text-[#d4b870]">
                <Link to="/services" className="transition-colors duration-300">
                  Explore more
                </Link>
                <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Feature 2 */}
            <div
              style={{ transform: "scale(1.25)" }}
              className="flex-1  basis-full md:basis-[48%] lg:basis-[31%] max-w-full md:max-w-[48%] lg:max-w-[31%] relative group rounded-2xl overflow-hidden p-[2px] min-h-[420px] flex flex-col"
            >
              {/* Running Border Effect */}
              <div className="absolute inset-0 rounded-2xl animate-border-flow z-0"></div>

              {/* Inner Card */}
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 z-10 flex flex-col justify-between h-full shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                    <Book className="h-10 w-10 text-[#b69f63]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-center mb-4 text-white group-hover:text-[#FFD580] drop-shadow-sm tracking-wide">
                    Bookkeeping
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-[15px] leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-[#FFD580] mr-2">•</span>
                      <span>Dedicated Bookkeeper </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FFD580] mr-2">•</span>
                      <span>Weekly, Monthly or Annually bookkeeping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FFD580] mr-2">•</span>
                      <span>Accrual or Cash Basis on US GAAP & IFRS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FFD580] mr-2">•</span>
                      <span>Financial Reporting </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FFD580] mr-2">•</span>
                      <span>Strategic Planning </span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center text-[#FFD580] font-semibold mt-6 group cursor-pointer hover:text-[#f9e4b7] transition-colors duration-300">
                  <Link
                    to="/services"
                    className="transition-colors duration-300"
                  >
                    Explore more
                  </Link>
                  <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 basis-full md:basis-[48%] lg:basis-[31%] max-w-full md:max-w-[48%] lg:max-w-[31%] bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="h-8 w-8 text-[#B69F63]" size={24} />
                </div>
                <h3 className="heading-tagline text-xl font-bold text-center mb-4 text-white group-hover:text-[#B69F63]">
                  Accounting
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Dedicated Accountant </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Accounts Payable </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Accounts Receivable </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Record to Report </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B69F63] mr-2">•</span>
                    <span>Financial Reporting</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-[#B69D62] font-medium mt-4 group cursor-pointer hover:text-[#d4b870]">
                <Link to="/services" className="transition-colors duration-300">
                  Explore more
                </Link>
                <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          <div className="mt-[100px] text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm btn-style focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
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
      </section>
      {/* Industries We serve */}
      <ServicesOverview />

      {/* CTA section */}
      <section className="py-20 bg-white ">
        {/* Content container */}
        <div className="max-w-3xl  mx-auto px-4 sm:px-6 lg:px-8  z-10 text-center flex flex-col items-center gap-5">
          <h2 className="heading-tagline text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to transform your data experience?
          </h2>
          <p className="mt2 max-w-2xl mx-auto text-xl text-gray-800">
            Join thousands of businesses that are making smarter decisions with
            PowerVision.
          </p>
          <Link
            to="/contact"
            className=" inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md hover:border-[#B69D62]  btn-style-2 transition-colors duration-300 shadow-lg"
          >
            Book an Appointmemt
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
      </section>
      <PricingSection />
      <WorkedWith />
      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default HomePage;
