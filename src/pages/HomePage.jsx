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
      <ServicesOverview />
      {/* Features section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl relative inline-block">
              Why Choose <span className="text-orange-500">Upsell</span>{" "}
              <span className="text-green-600">FinLogix</span> ?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-600 transform -translate-y-2"></span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to understand and utilize your business data
              effectively.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 - Transaction Recording */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange-200 transition-colors duration-300">
                  <ChartBarIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  Transaction Recording
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>
                      Daily recording of sales, expenses, receipts, and payments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>
                      Categorizing expenses properly in accounting software
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - Bank & Credit Card Reconciliation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-green-600 to-green-500 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                  <LockClosedIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Bank & Credit Card Reconciliation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      Matching bank/credit card statements to internal records
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      Identifying errors, duplicates, or missing transactions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Accounts Payable (AP) Management */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-200 transition-colors duration-300">
                  <PresentationChartLineIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Accounts Payable (AP) Management
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Tracking what the business owes vendors/suppliers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Managing due dates and scheduling payments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 - Accounts Receivable (AR) Management */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8 text-purple-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Accounts Receivable (AR) Management
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Tracking money owed to the business by clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>
                      Invoicing customers and following up on overdue payments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
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
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your data experience?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-100">
              Join thousands of businesses that are making smarter decisions
              with PowerVision.
            </p>
            <div className="mt-8">
              {isSignedIn ? (
                <Link
                  to="/dashboard"
                  className="btn bg-white text-primary-700 hover:bg-gray-50 text-base px-8 py-3"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <SignUpButton mode="modal">
                  <button className="btn bg-white text-primary-700 hover:bg-gray-50 text-base px-8 py-3">
                    Start Free Trial
                  </button>
                </SignUpButton>
              )}
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
