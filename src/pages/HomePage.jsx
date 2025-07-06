import { Link } from "react-router-dom";
// import { SignUpButton, useAuth } from "@clerk/clerk-react";

import ServicesOverview from "../components/ui/ServicesOverview";
import PricingSection from "../components/ui/PricingSection";
import { useEffect, useRef, useState } from "react";
import HeroSlider from "../components/ui/HeroSlidder";

import WorkedWith from "../components/ui/WorkedWith";

import Card from "../components/ui/Card";
import { Helmet } from "react-helmet-async";

function HomePage() {
  // const { isSignedIn } = useAuth();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const services = [
    "Bookkeeping",
    "Accounting",
    "Financial Reporting ",
    "Record to Report ",
    "Business valuation",
  ];

  const typingRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % services.length;
      const fullText = services[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 180);

      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1700);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingRef.current);
  }, [displayText, isDeleting, loopNum, services, typingSpeed]);

  return (
    <div className="fade-in overflow-hidden">
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/slidder/slidder1.webp"
          fetchpriority="high"
        />
        <title>
          Reliable Bookkeeping & Accounting Services | Upsell FinLogix
        </title>
        <meta
          name="description"
          content="Upsell FinLogix offers expert bookkeeping, accounting, corporate finance management, business valuation, and strategic financial planning for growth-focused businesses."
        />
        <meta
          name="keywords"
          content="bookkeeping services, accounting firm, financial planning, business valuation, cash flow management, corporate finance, strategic financial planning, budgeting, FP&A"
        />
        <meta
          property="og:title"
          content="Upsell FinLogix – Strategic Financial Solutions"
        />
        <meta
          property="og:description"
          content="Streamlined bookkeeping and financial management solutions tailored for eCommerce, healthcare, manufacturing, and service-based businesses."
        />
        <meta
          property="og:image"
          content="https://www.upsellfinlogix.com/slidder/slidder1.webp"
        />
        <meta property="og:url" content="https://www.upsellfinlogix.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.upsellfinlogix.com" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Upsell FinLogix",
            url: "https://www.upsellfinlogix.com",
            logo: "https://www.upsellfinlogix.com/logo.png",
            description:
              "Reliable and expert financial services including bookkeeping, accounting, and business valuation.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-804-876-0978",
              contactType: "customer service",
              email: "info@upsellfinlogix.com",
              availableLanguage: ["English"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "7901 4TH ST N STE 300",
              addressLocality: "St. Petersburg",
              addressRegion: "FL",
              postalCode: "33702",
              addressCountry: "US",
            },
            areaServed: [
              {
                "@type": "Country",
                name: "United States",
              },
            ],
            sameAs: [
              "https://www.facebook.com/upsellfinlogix",
              "https://www.linkedin.com/company/upsellfinlogix",
            ],
          })}
        </script>
      </Helmet>

      {/* Hero section */}
      <HeroSlider />
      {/* Explore our services section */}

      <Card />

      {/* Industries We serve */}
      <ServicesOverview />

      {/* CTA section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let Upsell FinLogix help you navigate the complexities of financial
            management with precision, insight, and transparency, so you can
            focus on growing your business.
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
      <PricingSection theme="dark" />
      <WorkedWith />
      {/* Testimonials */}
    </div>
  );
}

export default HomePage;
