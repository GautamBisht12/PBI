import { Link } from "react-router-dom";

const CTA = ({ heading, subHeading , theme}) => {
  return (
    <div className={`mt-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} p-12 text-center`}>

      <h2 className="text-3xl font-bold mb-6">
        {heading ? heading : "Ready to elevate your business?"}
      </h2>
     <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
        {subHeading
          ? subHeading
          : "Contact us today to discuss how our services can help you achieve your business goals. We offer customized solutions tailored to your specific needs and budget."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="https://calendly.com/upsellfinlogix/30min"
          className="px-8 py-3  font-medium rounded-lg  btn-style  transition-colors"
        >
          Book an appointment
        </Link>
        <Link
          to="/pricing"
          className={`border border-black text-black font-medium py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-300`}
        >
          View Pricing
        </Link>
      </div>
    </div>
  );
};

export default CTA;
