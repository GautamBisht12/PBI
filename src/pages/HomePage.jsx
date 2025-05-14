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
      {/* Services overview */}
      <ServicesOverview />
      {/* Features section */}
      <section
        className="py-20 bg-fixed bg-top bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/643390.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="heading-tagline  text-3xl font-extrabold text-[#B79E63] sm:text-5xl relative inline-block">
              Explore our Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-600 transform -translate-y-0"></span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-white">
              Discover how our services can help you achieve your goals.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 - Transaction Recording */}
            <div className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ChartBarIcon className="h-8 w-8 text-[#B69F63]" />
              </div>
              <h3 className="heading-tagline  text-xl font-bold text-center mb-4 text-white group-hover:text-[#B69F63]">
                Transaction Recording
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>
                    Daily recording of sales, expenses, receipts, and payments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>
                    Categorizing expenses properly in accounting software
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 2 - Bank & Credit Card Reconciliation */}
            <div className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <LockClosedIcon className="h-8 w-8 text-[#B69F63]" />
              </div>
              <h3 className="heading-tagline text-xl font-bold text-center mb-4 text-white group-hover:text-[#B69F63]">
                Bank & Credit Card Reconciliation
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>
                    Identifying errors, duplicates, or missing transactions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>
                    Matching bank/credit card statements to internal records
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 3 - Accounts Payable (AP) Management */}
            <div className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <PresentationChartLineIcon className="h-8 w-8 text-[#B69F63]" />
              </div>
              <h3 className="heading-tagline text-xl font-bold text-center mb-4 text-white group-hover:text-[#B69F63]">
                Accounts Payable (AP) Management
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>Managing due dates and scheduling payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>Tracking what the business owes vendors/suppliers</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 - Accounts Receivable (AR) Management */}
            <div className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-[#B69F63]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
              <h3 className="heading-tagline text-xl font-bold text-center mb-4 text-white group-hover:text-[#B69F63]">
                Accounts Receivable (AR) Management
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>
                    Invoicing customers and following up on overdue payments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B69F63] mr-2">•</span>
                  <span>Tracking money owed to the business by clients</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm btn-style-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
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
      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-tagline text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              See what our clients are saying about PowerVision.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="Sarah Johnson"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Sarah Johnson
                  </h3>
                  <p className="text-gray-500">CFO, TechInnovate</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                "PowerVision has transformed how we analyze our financial data.
                The dashboards are intuitive and the insights have helped us
                increase our revenue by 25% in just six months."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
                    alt="Michael Chang"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Michael Chang
                  </h3>
                  <p className="text-gray-500">
                    Marketing Director, GrowthFirst
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                "The marketing insights we get from PowerVision have been
                game-changing. The ability to securely share reports with
                specific team members has improved our collaboration
                tremendously."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg"
                    alt="Jessica Martinez"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Jessica Martinez
                  </h3>
                  <p className="text-gray-500">COO, LogisticsPro</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                "Our operational efficiency has improved by 35% since
                implementing PowerVision. The real-time dashboards help us
                identify bottlenecks and resolve them immediately."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
