import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white px-6 sm:px-10 lg:px-24 py-16">
      {/* Heading Section */}
      <h4 className="text-[#4E5826] text-sm sm:text-base uppercase mb-2 tracking-wide">
        Testimonials
      </h4>
      <h1 className="text-[#4E5826] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
        Client Experiences
      </h1>
      <p className="text-[#4E5826] text-base sm:text-lg md:text-xl mb-10 max-w-3xl">
        Our clients love the transformative results and natural radiance they
        achieve with our skincare regimen.
      </p>

      {/* Testimonial List */}
      <div className="space-y-8">
        {/* Testimonial Item */}
        <div className="border-t border-[#4E5826] pt-6 flex flex-col md:flex-row gap-4 md:gap-10">
          <p className="text-[#4E5826] text-base sm:text-lg font-medium min-w-[100px]">
            Samantha
          </p>
          <p className="text-[#4E5826] text-base sm:text-lg italic md:max-w-3xl">
            “J. Lopez products have truly transformed my skin, leaving it soft,
            supple, and glowing.”
          </p>
        </div>

        <div className="border-t border-[#4E5826] pt-6 flex flex-col md:flex-row gap-4 md:gap-10">
          <p className="text-[#4E5826] text-base sm:text-lg font-medium min-w-[100px]">
            Michael
          </p>
          <p className="text-[#4E5826] text-base sm:text-lg italic md:max-w-3xl">
            “I've never experienced such a personalized and effective skincare
            routine tailored just for me.”
          </p>
        </div>

        <div className="border-t border-b border-[#4E5826] pt-6 pb-6 flex flex-col md:flex-row gap-4 md:gap-10">
          <p className="text-[#4E5826] text-base sm:text-lg font-medium min-w-[100px]">
            Sophia
          </p>
          <p className="text-[#4E5826] text-base sm:text-lg italic md:max-w-3xl">
            “Absolutely love the organic ingredients and the glow it gives my
            skin!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
