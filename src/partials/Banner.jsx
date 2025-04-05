import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-screen">
      {/* Left Side - Text and Product Image */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#4E5826] leading-snug text-center">
          Nature's <br /> Skincare Secrets
        </h1>

        <img
          src="/serum1.avif"
          alt="Skincare product"
          className="w-[180px] h-[240px] sm:w-[200px] sm:h-[270px] md:w-[220px] md:h-[300px] lg:w-[250px] lg:h-[320px] object-cover rounded-lg shadow-lg"
        />

        <p className="text-base sm:text-lg lg:text-xl text-[#4E5826] text-center px-2 sm:px-4">
          Unlock the power of natural skincare
        </p>

        <button className="border border-[#4E5826] text-[#4E5826] py-2 px-5 rounded-full text-base sm:text-lg hover:bg-[#4E5826] hover:text-white transition duration-300">
          Book Now
        </button>
      </div>

      {/* Right Side - Model Image */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
        <img
          src="/serum.avif"
          alt="Woman applying skincare"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
