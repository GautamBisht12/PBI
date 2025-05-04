import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import HeroSection from "../components/ui/HeroSection";
import { Clock10Icon, Clock9Icon } from "lucide-react";

const ContactPage = () => {
  const [heroDetails, setHeroDetails] = useState({
    heroTitle: "Contact Us",
    heroSubtitle:
      "We'd love to hear from you! Reach out to us using the form below or contact us directly.",
    heroImage:
      "https://img.freepik.com/premium-photo/business-team-hero-banner-background_693425-12089.jpg",
  });
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
      <HeroSection heroDetails={heroDetails} />

      {/* Contact section */}
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-1 lg:gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl text-center font-extrabold text-gray-900">
                Contact Information
              </h2>
              <p className="mt-4 text-lg text-gray-500 text-center">
                Reach out to us using any of the following methods, and our team
                will respond as soon as possible.
              </p>

              <div className="mt-14 space-y-6 flex justify-between ">
                <div className="flex items-center justify-center flex-col  gap-5">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-10 w-10 text-[#ceb16b]" />
                  </div>
                  <div className="ml-3 text-base text-gray-500 text-center">
                    <p>info@powervision.com</p>
                    <p className="mt-1">support@powervision.com</p>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col  gap-5">
                  <div className="flex-shrink-0">
                    <Clock9Icon className="h-10 w-10 text-[#ceb16b]" />
                  </div>
                  <div className="ml-3 text-base text-gray-500 text-center">
                    <p>Monday - Friday</p>
                    <p className="mt-1">9:00 PM - 6:00 AM</p>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col gap-5 ">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-10 w-10 text-[#ceb16b] " />
                  </div>
                  <div className="ml-3 text-base text-gray-500 text-center">
                    <p>+1 (555) 123-4567</p>
                    <p className="mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-center flex-col justify-center gap-5 ">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-10 w-10 text-[#ceb16b]" />
                  </div>
                  <div className="ml-3 text-base text-gray-500 text-center">
                    <p>123 Business Avenue</p>
                    <p>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-12">
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
              </div> */}
            </div>

            {/* Contact form */}
            <section className="bg-white py-16 px-4 ">
              <div className="max-w-2xl mx-auto bg-[#F5F3F0] p-10">
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
                  <div className="">
                    <button
                      type="submit"
                      className="mt-6 bg-[#b79e63] text-black px-10 py-3 uppercase tracking-wider text-sm hover:bg-gray-800 hover:text-white"
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
    </div>
  );
};

export default ContactPage;
