import React from "react";

const Process = () => {
  return (
    <div className="bg-[#F4F2E8] px-6 sm:px-10 lg:px-24 py-16 sm:py-20 text-center">
      {/* Section Heading */}
      <h4 className="text-[#4E5826] text-sm sm:text-base uppercase mb-2 tracking-wider">
        How It Works
      </h4>
      <h1 className="text-[#4E5826] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight">
        Our Process
      </h1>
      <p className="text-[#4E5826] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose mb-12 max-w-3xl mx-auto">
        Our process involves personalized consultations, customized treatments, and expert
        advice to ensure your skin receives the care it deserves.
      </p>

      {/* Process Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="border-b lg:border-b-0 lg:border-r border-[#4E5826]">
          {/* Consultation */}
          <div className="px-4 sm:px-6 md:px-10 py-10 border-b border-[#4E5826]">
            <h2 className="text-[#4E5826] text-2xl sm:text-3xl font-serif mb-2">
              Consultation
            </h2>
            <h5 className="text-[#4E5826] text-base sm:text-lg font-medium mb-3">
              Personalized Analysis
            </h5>
            <p className="text-[#4E5826] text-base sm:text-lg leading-relaxed">
              We analyze your skin type and concerns to create a tailored skincare
              regimen that suits your unique needs.
            </p>
          </div>

          {/* Aftercare */}
          <div className="px-4 sm:px-6 md:px-10 py-10">
            <h2 className="text-[#4E5826] text-2xl sm:text-3xl font-serif mb-2">
              Aftercare
            </h2>
            <h5 className="text-[#4E5826] text-base sm:text-lg font-medium mb-3">
              Skin Maintenance
            </h5>
            <p className="text-[#4E5826] text-base sm:text-lg leading-relaxed">
              Receive expert advice on at-home skincare routines and product
              recommendations to maintain your skin's health and radiance.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Treatment */}
          <div className="px-4 sm:px-6 md:px-10 py-10 border-b border-[#4E5826]">
            <h2 className="text-[#4E5826] text-2xl sm:text-3xl font-serif mb-2">
              Treatment
            </h2>
            <h5 className="text-[#4E5826] text-base sm:text-lg font-medium mb-3">
              Specialized Care
            </h5>
            <p className="text-[#4E5826] text-base sm:text-lg leading-relaxed">
              Experience botanical-infused treatments and rejuvenating facials designed
              to revitalize and nourish your skin.
            </p>
          </div>

          {/* Follow-up */}
          <div className="px-4 sm:px-6 md:px-10 py-10">
            <h2 className="text-[#4E5826] text-2xl sm:text-3xl font-serif mb-2">
              Follow-up
            </h2>
            <h5 className="text-[#4E5826] text-base sm:text-lg font-medium mb-3">
              Continued Support
            </h5>
            <p className="text-[#4E5826] text-base sm:text-lg leading-relaxed">
              We ensure your skincare journey is a success by providing ongoing
              guidance and support to address any concerns or questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
