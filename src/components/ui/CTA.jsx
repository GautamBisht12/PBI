const CTA = () => {
  return (
    <div className="mt-24 bg-black text-white rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to elevate your business?
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        Contact us today to discuss how our services can help you achieve your
        business goals. We offer customized solutions tailored to your specific
        needs and budget.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-[#B69D62] text-white font-medium rounded-lg hover:bg-transparent hover:border-[#B69D62] border border-black  transition-colors">
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default CTA;
