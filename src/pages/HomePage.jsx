import { Link } from "react-router-dom";
import { SignUpButton, useAuth } from "@clerk/clerk-react";
import {
  ChartBarIcon,
  LockClosedIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import ServicesOverview from "../components/ui/ServicesOverview";
import PricingSection from "../components/ui/PricingSection";
import { useEffect, useRef, useState } from "react";
import HeroSlider from "../components/ui/HeroSlidder";
import { ArrowRightIcon, Book, BookOpen, DollarSign } from "lucide-react";
import WorkedWith from "../components/ui/WorkedWith";
import Testimonials from "../components/ui/Testimonials";
import Card from "../components/ui/Card";

function HomePage() {
  const { isSignedIn } = useAuth();
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
      <section className="py-20 bg-white ">
        {/* Content container */}
        <div className="max-w-3xl  mx-auto px-4 sm:px-6 lg:px-8  z-10 text-center flex flex-col items-center gap-5">
          <h2 className="heading-tagline text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to transform your data experience?
          </h2>
          <p className="mt2 max-w-2xl mx-auto text-xl text-gray-800">
            Join thousands of businesses that are making smarter decisions with
            PowerVision.
          </p>
          <Link
            to="/contact"
            className=" inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md hover:border-[#B69D62]  btn-style-2 transition-colors duration-300 shadow-lg"
          >
            Book an Appointmemt
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
      <PricingSection />
      <WorkedWith />
      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default HomePage;
