import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";
import FAQ from "../components/ui/FAQ";

const Industry = () => {
  const heroData = {
    heroTitle: "Expert Bookkeeping Across Diverse Industries",
    heroSubtitle:
      "Specialized financial solutions tailored to your industry's unique needs and challenges.",
    heroImage:
      "https://www.curt.org/wp-content/uploads/2019/06/iStock-931461960.jpg",
    btnText: "Explore Our Industry Expertise",
  };

  const industries = [
    {
      id: 1,
      title: "E-commerce",
      description:
        "Specialized bookkeeping for online retailers with multi-channel sales tracking, inventory management, and payment reconciliations.",
      icon: "🛒",
      features: [
        "Multi-platform Integration",
        "Inventory Tracking",
        "Payment Reconciliation",
        "Tax Optimization",
      ],
      link: "/industry/ecommerce",
      bgColor: "from-blue-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Construction & Contracting",
      description:
        "Project-based accounting, job costing, equipment depreciation, and compliance management for construction businesses.",
      icon: "🏗️",
      features: [
        "Job Costing",
        "Equipment Tracking",
        "Project Management",
        "Compliance Reporting",
      ],
      link: "/industry/construction",
      bgColor: "from-orange-500 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Healthcare",
      description:
        "HIPAA-compliant financial management, insurance billing, patient account management, and regulatory compliance.",
      icon: "🏥",
      features: [
        "HIPAA Compliance",
        "Insurance Billing",
        "Patient Accounts",
        "Regulatory Reporting",
      ],
      link: "/industry/healthcare",
      bgColor: "from-green-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aGNhcmUlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Hospitality",
      description:
        "Revenue management, seasonal accounting, tip reporting, and multi-location financial consolidation for hospitality businesses.",
      icon: "🏨",
      features: [
        "Revenue Management",
        "Seasonal Accounting",
        "Tip Reporting",
        "Multi-location Support",
      ],
      link: "/industry/hospitality",
      bgColor: "from-purple-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Manufacturing",
      description:
        "Cost accounting, inventory valuation, production cost analysis, and supply chain financial management.",
      icon: "🏭",
      features: [
        "Cost Accounting",
        "Inventory Valuation",
        "Production Analysis",
        "Supply Chain Finance",
      ],
      link: "/industry/manufacturing",
      bgColor: "from-red-500 to-red-600",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Wholesale Service",
      description:
        "Bulk transaction processing, vendor management, distribution cost tracking, and B2B financial solutions.",
      icon: "📦",
      features: [
        "Bulk Processing",
        "Vendor Management",
        "Distribution Costs",
        "B2B Solutions",
      ],
      link: "/industry/wholesale",
      bgColor: "from-indigo-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <HeroSection heroDetails={heroData} />

      {/* Industries Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, providing
              specialized bookkeeping and financial management solutions
              tailored to each sector's unique requirements.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group flex flex-col"
              >
                {/* Card Header with Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r bg-black opacity-40`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      {/* <div className="text-4xl mb-2">{industry.icon}</div> */}
                      <h3 className="text-2xl font-bold">{industry.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Services:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      to={industry.link}
                      className={`block w-full text-center bg-gradient-to-r btn-style text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Industry-Specific Expertise?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Industry Knowledge
              </h3>
              <p className="text-gray-600">
                Deep understanding of industry-specific regulations, compliance
                requirements, and best practices.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dedicated Experts
              </h3>
              <p className="text-gray-600">
                Specialized accountants with years of experience in your
                specific industry sector.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                Customized bookkeeping processes designed to meet your
                industry's unique operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let Upsell Finlogix help you streamline your financial operations
            with industry-specific expertise. Let us help you navigate the
            complexities of financial management with precision, insight, and
            transparency, so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="https://calendly.com/upsellfinlogix/30min"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md btn-style shadow-md transition-all duration-300"
            >
              Schedule a Free Consultation
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

      <FAQ />
    </>
  );
};

export default Industry;
