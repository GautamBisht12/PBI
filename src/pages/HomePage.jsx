import { Link } from "react-router-dom";
// import { SignUpButton, useAuth } from "@clerk/clerk-react";

import ServicesOverview from "../components/ui/ServicesOverview";
import PricingSection from "../components/ui/PricingSection";
import { useEffect, useRef, useState } from "react";
import HeroSlider from "../components/ui/HeroSlidder";

import WorkedWith from "../components/ui/WorkedWith";

import Card from "../components/ui/Card";
import FAQ from "../components/ui/FAQ";

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
    <div className="fade-in">
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
            Let Upsell Finlogix help you navigate the complexities of financial
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
      <PricingSection />
      <WorkedWith />
      {/* FAQ */}
      <FAQ />
    </div>
  );
}

export default HomePage;
