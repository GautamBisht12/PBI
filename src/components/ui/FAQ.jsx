import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We serve small to mid-sized businesses, startups, and growing enterprises across industries including professional services, e-commerce, tech, healthcare, and consulting. Our solutions are tailored to your business structure—whether you're a sole proprietor, partnership, LLC, or corporation.",
    },
    {
      question: "What software platforms do you support?",
      answer: (
        <div>
          We are proficient in:
          <ul className="mt-2 ml-4 space-y-1">
            <li>• QuickBooks (Online & Desktop)</li>
            <li>• Zoho Books</li>
            <li>• Xero</li>
            <li>• Excel, Google Sheets, and Power BI</li>
          </ul>
          <p className="mt-3">
            We also integrate with tools like Gusto, Amazon, Stripe, Shopify,
            PayPal, Dext, and Hubdoc.
          </p>
        </div>
      ),
    },
    {
      question: "How often will I receive financial reports?",
      answer: (
        <div>
          You will receive monthly, quarterly, and annual financial statements,
          including:
          <ul className="mt-2 ml-4 space-y-1">
            <li>• Profit & Loss Statement</li>
            <li>• Balance Sheet</li>
            <li>• Cash Flow Statement</li>
            <li>• Custom reports upon request</li>
          </ul>
          <p className="mt-3">
            Our reports are timely, accurate, and designed for clear
            decision-making.
          </p>
        </div>
      ),
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Yes. We adhere to strict data privacy protocols and use secure file-sharing systems. NDAs are available upon request. Your confidentiality and trust are paramount.",
    },
    {
      question: "How do I get started?",
      answer:
        'Click "Schedule a Free Consultation" or fill out our Contact Form. We\'ll discuss your current needs, assess your financial setup, and provide a tailored proposal with clear deliverables.',
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Find quick answers to common questions about our services and how
              we can help your business thrive.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg transition-colors duration-200"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems[index] || false}
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems[index] ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems[index]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-500">
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
