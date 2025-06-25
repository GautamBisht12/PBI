import { Link } from "react-router-dom";

const CTA = ({ heading, subHeading }) => {
  return (
    <div className="mt-24 bg-black text-white rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">
        {heading ? heading : "Ready to elevate your business?"}
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        {subHeading
          ? subHeading
          : "Contact us today to discuss how our services can help you achieve your business goals. We offer customized solutions tailored to your specific needs and budget."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="https://calendly.com/upsellfinlogix/30min"
          className="px-8 py-3 bg-[#B69D62] text-white font-medium rounded-lg hover:bg-transparent hover:border-[#B69D62] border border-black  transition-colors"
        >
          Book an appointment
        </Link>
      </div>
    </div>
  );
};

export default CTA;
