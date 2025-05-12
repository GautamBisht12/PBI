import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://wallpaperaccess.com/full/153056.jpg",
    headline: "Experience You Can Trust",
    subtext: "Private advocate agency for all legal matters",
  },
  {
    image: "https://wallpaperaccess.com/full/643457.jpg",
    headline: "Expert Legal Guidance",
    subtext: "Committed to protecting your rights",
  },
  {
    image:
      "https://www.bizmanualz.com/wp-content/uploads/2024/02/what-does-a-chief-financial-officer-cfo-dosmkg.jpg",
    headline: "Reliable Bookkeeping and Accounting Firm",
    subtext:
      "Streamlined Solutions for Accurate, Compliant, and Scalable Growth",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="sync">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: 1,
                  scale: 1.15,
                  transition: {
                    opacity: { duration: 1 },
                    scale: { duration: 6, ease: "linear" },
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1 },
                }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16" // Add margin-top for spacing
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
            {slides[current].headline}
          </h1>
          <p className="text-lg md:text-2xl  text-white ">
            {slides[current].subtext}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-10 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
