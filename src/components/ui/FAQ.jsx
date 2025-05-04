const FAQ = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find quick answers to common questions about PowerVision.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                How secure is PowerVision?
              </h3>
              <p className="mt-2 text-gray-500">
                PowerVision implements enterprise-grade security measures
                including end-to-end encryption, role-based access control, and
                regular security audits. We comply with industry standards like
                SOC 2 and GDPR.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                Do I need a Power BI license to use PowerVision?
              </h3>
              <p className="mt-2 text-gray-500">
                Yes, PowerVision integrates with your existing Power BI service.
                Your organization needs at least a Power BI Pro or Premium
                license to use our platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                Can I control who sees which reports?
              </h3>
              <p className="mt-2 text-gray-500">
                Absolutely! PowerVision offers granular access control, allowing
                administrators to determine precisely which users or groups can
                access specific reports and dashboards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                How often are the reports updated?
              </h3>
              <p className="mt-2 text-gray-500">
                PowerVision connects directly to your Power BI service, so your
                reports update according to the refresh schedule you've set in
                Power BI. We also support real-time dashboards for data that
                requires immediate visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
