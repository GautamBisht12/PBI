import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ heroDetails }) => {
  return (
    <>
      <section className="relative text-white  px-4 sm:px-6 lg:px-8 h-[70vh] w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage: `url(${heroDetails.heroImage})`,
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative  z-10 max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full">
          <div className="text-center flex flex-col mt-28 items-center justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {heroDetails.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
              {heroDetails.heroSubtitle}
            </p>
            {heroDetails.btnText && (
              <Link
                to="/contact"
                className="mt-8 inline-block btn-style border border-transparent rounded-md py-3 px-8 text-base font-medium "
              >
                {heroDetails.btnText}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
