import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-[#FFFDF6] min-h-screen overflow-hidden">
      {/* Section Heading */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-20 pt-10">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#4E5826] text-left">
          About
        </h2>
      </div>

      {/* Flex Container for Image & Text */}
      <div className="flex flex-col mt-8 lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
          <img
            src="plant.avif"
            alt="J. Lopez spa treatment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-10 sm:py-14">
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#4E5826] uppercase tracking-wide mb-4">
            Our Holistic Approach
          </h3>

          <p className="text-base sm:text-lg text-[#4E5826] leading-relaxed">
            At J. Lopez, we believe in the power of organic ingredients to enhance natural beauty. 
            Our rejuvenating facials and personalized skincare regimens are carefully crafted to 
            nourish your skin from the inside out. With a serene ambiance and cruelty-free products, 
            we aim to promote holistic wellness and a positive impact on both your skin and the planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
