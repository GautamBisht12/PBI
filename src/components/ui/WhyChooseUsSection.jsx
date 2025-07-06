/* eslint-disable react/prop-types */
const WhyChooseUsSection = ({
  title = "Why Choose Us?",
  subtitle = "We're committed to delivering exceptional service and ensuring your operations are accurate and timely.",
  features = [],
  backgroundColor = "bg-gray-900",
  textColor = "text-white",
  gridCols = "lg:grid-cols-3", // Default to 3 columns, can be overridden
}) => {
  return (
    <section className={`py-20 ${backgroundColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{title}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">{subtitle}</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300"
            >
              <div
                className={`w-16 h-16 ${feature.iconBgColor} rounded-full flex items-center justify-center mb-3 mx-auto`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
