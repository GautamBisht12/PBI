import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import HeroSection from "../components/ui/HeroSection";
import { Clock9Icon } from "lucide-react";
import { sendEmail } from "../utils/emailService";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [heroDetails] = useState({
    heroTitle: "Contact Us",
    heroSubtitle:
      "We'd love to hear from you! Reach out to us using the form below or contact us directly.",
    heroImage: "hero/contact.webp",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      await sendEmail(formData);

      setFormStatus({
        isSubmitting: false,
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

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, message: "" }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <div className="fade-in overflow-hidden ">
      <Helmet>
        <title>
          Contact Us | Get Expert Bookkeeping Consultation | Upsell FinLogix
        </title>
        <meta
          name="description"
          content="Contact Upsell FinLogix for professional bookkeeping and accounting services. Get a free consultation, expert advice, and personalized financial solutions for your business needs."
        />
        <meta
          name="keywords"
          content="contact bookkeeping services, free accounting consultation, bookkeeping contact form, accounting services inquiry, financial consultation, bookkeeping support, accounting help, business financial advice, professional bookkeeper contact"
        />
        <meta
          property="og:title"
          content="Contact Upsell FinLogix | Professional Bookkeeping Services"
        />
        <meta
          property="og:description"
          content="Reach out to our expert bookkeeping team for personalized financial solutions. Contact us via phone, email, or our online form for immediate assistance."
        />
        <meta
          property="og:image"
          content="https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small_2x/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg"
        />
        <meta
          property="og:url"
          content="https://www.upsellfinlogix.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.upsellfinlogix.com/contact" />

        {/* JSON-LD Structured Data for Organization + ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Upsell FinLogix",
              url: "https://www.upsellfinlogix.com",
              logo: "https://www.upsellfinlogix.com/logo.png",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-804-876-0978",
                contactType: "customer service",
                email: "info@upsellfinlogix.com",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "7901 4TH ST N STE 300",
                addressLocality: "St. Petersburg",
                addressRegion: "FL",
                postalCode: "33702",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/upsellfinlogix",
                "https://www.linkedin.com/company/upsellfinlogix",
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero section */}
      <HeroSection heroDetails={heroDetails} />

      {/* Contact section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact info */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-center font-extrabold text-gray-900">
              Contact Information
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 text-center max-w-3xl mx-auto">
              Reach out to us using any of the following methods, and our team
              will respond as soon as possible.
            </p>

            {/* Contact info grid - responsive */}
            <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {/* Email */}
              <div className="flex items-center justify-center flex-col gap-3 md:gap-5">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ceb16b]" />
                </div>
                <div className="text-sm md:text-lg text-gray-500 text-center">
                  <a
                    href="mailto:info@upsellfinlogix.com"
                    className="hover:text-[#ceb16b] transition-colors break-all "
                  >
                    info@upsellfinlogix.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center justify-center flex-col gap-3 md:gap-5">
                <div className="flex-shrink-0">
                  <Clock9Icon className="h-8 w-8 md:h-10 md:w-10 text-[#ceb16b]" />
                </div>
                <div className="text-sm md:text-base text-gray-500 text-center">
                  <p>Monday - Friday</p>
                  <p className="mt-1">9:00 PM - 6:00 AM</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center flex-col gap-3 md:gap-5">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ceb16b]" />
                </div>
                <div className="text-sm md:text-base text-gray-500 text-center">
                  <a
                    href="tel:+18048760978"
                    className="hover:text-[#ceb16b] transition-colors font-sans"
                  >
                    +1 (804) 876-0978
                  </a>
                  <p className="mt-1">Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center flex-col justify-center gap-3 md:gap-5">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ceb16b]" />
                </div>
                <div className="text-sm md:text-base text-gray-500 text-center">
                  <p>7901 4TH ST N STE 300 ST.</p>
                  <p>PETERSBURG, FL 33702</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <section className="bg-white py-8 md:py-16 px-4">
            <div className="max-w-2xl mx-auto bg-[#F5F3F0] p-6 md:p-10 rounded-lg">
              <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                Send Message
              </h2>
              <p className="text-center text-gray-700 mb-8 md:mb-10 text-sm md:text-base">
                Fill out this form and our specialists will contact you shortly
                for detailed consultation.
              </p>

              {/* Form status messages */}
              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-md text-center ${
                    formStatus.isError
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-gray-600 mb-2 text-sm md:text-base">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2 text-sm md:text-base transition-colors"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2 text-sm md:text-base">
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2 text-sm md:text-base transition-colors"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-gray-600 mb-2 text-sm md:text-base">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2 text-sm md:text-base transition-colors"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2 text-sm md:text-base">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2 text-sm md:text-base transition-colors"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600 mb-2 text-sm md:text-base">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black resize-none py-2 text-sm md:text-base transition-colors"
                    disabled={formStatus.isSubmitting}
                  ></textarea>
                </div>

                <div className="text-center sm:text-left">
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`mt-6 px-8 md:px-10 py-3 uppercase tracking-wider text-sm font-medium transition-all duration-200 ${
                      formStatus.isSubmitting
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-[#b79e63] text-black hover:bg-gray-800 hover:text-white transform hover:scale-105"
                    }`}
                  >
                    {formStatus.isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
