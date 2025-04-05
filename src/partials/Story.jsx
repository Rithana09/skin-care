import React from "react";

const Story = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-screen">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 bg-[#F4E8DA] flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 space-y-4">
        <h4 className="text-sm sm:text-base text-[#4E5826] uppercase tracking-wide">
          About Us
        </h4>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#4E5826]">
          Our Story
        </h1>

        <p className="text-base sm:text-lg text-[#4E5826] leading-relaxed">
          At J. Lopez, we are dedicated to providing a holistic approach to
          beauty through organic skincare. Our rejuvenating facials and
          botanical treatments are carefully crafted to enhance your natural
          glow. With sustainably sourced ingredients and expert estheticians,
          we aim to nurture your skin from within, promoting overall wellness
          and radiance.
        </p>

        <button className="mt-4 border border-[#4E5826] text-[#4E5826] py-2 px-5 rounded-full text-sm sm:text-base hover:bg-[#4E5826] hover:text-white transition duration-300 self-start">
          Learn More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
        <img
          src="/gel.avif"
          alt="Skincare Product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Story;
