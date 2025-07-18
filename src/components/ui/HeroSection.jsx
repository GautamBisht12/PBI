import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = ({ heroDetails }) => {
  return (
    <section
      className="relative text-white px-4 sm:px-6 lg:px-8 h-[70vh] w-full"
      aria-label={`Hero section for ${heroDetails.heroTitle}`}
    >
      {/* Preload background image */}
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={heroDetails.heroImage}
          fetchPriority="high"
        />
      </Helmet>

      {/* Background image */}
      <img
        src={heroDetails.heroImage}
        alt=""
        role="presentation"
        aria-hidden="true"
        className={`${heroDetails.imgStyle} absolute inset-0 w-full h-full object-cover object-top z-0`}
        width={1920}
        height={800}
        decoding="async"
        loading="eager"
        fetchPriority="high"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
        <motion.div
          className="text-center flex flex-col mt-28 items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {heroDetails.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
            {heroDetails.heroSubtitle}
          </p>
          {heroDetails.btnText && (
            <Link
              to={heroDetails.btnLink || "/contact"}
              className="mt-8 inline-block btn-style border border-transparent rounded-md py-3 px-8 text-base font-medium"
            >
              {heroDetails.btnText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  heroDetails: PropTypes.shape({
    heroImage: PropTypes.string.isRequired,
    heroTitle: PropTypes.string.isRequired,
    heroSubtitle: PropTypes.string.isRequired,
    btnText: PropTypes.string,
    btnLink: PropTypes.string,
    imgStyle: PropTypes.string,
  }),
};

HeroSection.defaultProps = {
  heroDetails: {
    heroImage: "/default-hero.jpg",
    heroTitle: "Welcome to Our Website",
    heroSubtitle: "Delivering value through every financial service.",
    btnText: "",
    btnLink: "/contact",
    imgStyle: "",
  },
};

export default HeroSection;
