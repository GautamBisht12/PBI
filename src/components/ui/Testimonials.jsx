import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CFO, TechInnovate",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      quote:
        "PowerVision has transformed how we analyze our financial data. The dashboards are intuitive and the insights have helped us increase our revenue by 25% in just six months.",
    },
    {
      name: "Michael Chang",
      position: "Marketing Director, GrowthFirst",
      image:
        "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg",
      quote:
        "The marketing insights we get from PowerVision have been game-changing. The ability to securely share reports with specific team members has improved our collaboration tremendously.",
    },
    {
      name: "Jessica Martinez",
      position: "COO, LogisticsPro",
      image:
        "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
      quote:
        "Our operational efficiency has improved by 35% since implementing PowerVision. The real-time dashboards help us identify bottlenecks and resolve them immediately.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See what our clients are saying about our services.
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-lg font-medium text-gray-500">
              Testimonials
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {/* Star rating */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 italic mb-6 line-clamp-4">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-indigo-100"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Read More Success Stories
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
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
