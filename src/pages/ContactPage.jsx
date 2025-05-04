import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitted: true,
        isError: false,
        message: "Thank you for your message. We'll get back to you shortly!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="fade-in  overflow-hidden mt-20">
      {/* Hero section */}
      <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 h-[70vh] w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-photo/business-team-hero-banner-background_693425-12089.jpg")`,
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
              Have questions about PowerVision? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-1 lg:gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Contact Information
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Reach out to us using any of the following methods, and our team
                will respond as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>info@powervision.com</p>
                    <p className="mt-1">support@powervision.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (555) 123-4567</p>
                    <p className="mt-1">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>123 Business Avenue</p>
                    <p>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium text-gray-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-primary-600">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-600">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <section className="bg-[#f9f7f3] py-16 px-4">
              <div className="max-w-3xl mx-auto bg-[#F5F3F0]">
                <h2 className="text-center text-3xl font-serif text-gray-900 mb-4">
                  Send Message
                </h2>
                <p className="text-center text-gray-700 mb-10">
                  Fill out this form and our specialists will contact you
                  shortly for detailed consultation.
                </p>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">
                        Your email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black resize-none"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="mt-6 bg-black text-white px-6 py-2 uppercase tracking-wider text-sm hover:bg-gray-800"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* FAQ section */}
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
    </div>
  );
};

export default ContactPage;
