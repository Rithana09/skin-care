import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-[#FFFDF6] mt-6 px-6 lg:px-24 py-20 text-center">
      {/* Section Heading */}
      <h4 className="text-[#4E5826] text-base uppercase mb-4 tracking-wider">
        Pampering Beauty Services
      </h4>
      <h1 className="text-[#4E5826] text-5xl lg:text-6xl font-serif mb-6 leading-tight">
        Indulge in Luxury
      </h1>
      <p className="text-[#4E5826] text-lg leading-loose mb-16 lg:w-2/3 mx-auto">
        Experience our exclusive range of services designed to rejuvenate your skin and enhance your natural beauty. From botanical facials to personalized skincare routines, each treatment is tailored to nourish and revitalize your skin, leaving you with a radiant glow.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="lg:border-r border-[#4E5826]">
          {/* Facials */}
          <div className="px-6 lg:px-10 py-12 border-b border-[#4E5826]">
            <h2 className="text-[#4E5826] text-3xl font-serif mb-4">
              Facials
            </h2>
            <h5 className="text-[#4E5826] text-lg font-medium mb-3">
              Skin Rejuvenation
            </h5>
            <p className="text-[#4E5826] text-lg leading-loose">
              Our facials are crafted to revitalize your skin, using botanical extracts and natural ingredients to restore its vitality and glow. Let our expert estheticians pamper you with treatments that leave your skin feeling refreshed and renewed.
            </p>
          </div>

          {/* Body Treatments */}
          <div className="px-6 lg:px-10 py-12">
            <h2 className="text-[#4E5826] text-3xl font-serif mb-4">
              Body Treatments
            </h2>
            <h5 className="text-[#4E5826] text-lg font-medium mb-3">
              Holistic Relaxation
            </h5>
            <p className="text-[#4E5826] text-lg leading-loose">
              Indulge in our body treatments that go beyond skin-deep, offering holistic relaxation and rejuvenation. Experience the benefits of dry brushing and nourishing body wraps that promote overall well-being and leave you feeling refreshed.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Skincare Regimens */}
          <div className="px-6 lg:px-10 py-12 border-b border-[#4E5826]">
            <h2 className="text-[#4E5826] text-3xl font-serif mb-4">
              Skincare Regimens
            </h2>
            <h5 className="text-[#4E5826] text-lg font-medium mb-3">
              Specialized Care
            </h5>
            <p className="text-[#4E5826] text-lg leading-loose">
              Discover the power of tailored skincare regimens that cater to your skin's unique needs. Our experts will create personalized routines using organic, sustainably sourced products to ensure your skin receives the care and attention it deserves.
            </p>
          </div>

          {/* Specialty Treatments */}
          <div className="px-6 lg:px-10 py-12">
            <h2 className="text-[#4E5826] text-3xl font-serif mb-4">
              Specialty Treatments
            </h2>
            <h5 className="text-[#4E5826] text-lg font-medium mb-3">
              Unique Offerings
            </h5>
            <p className="text-[#4E5826] text-lg leading-loose">
              Explore our specialty treatments designed to address specific skin concerns and provide targeted solutions. From facial cupping to botanical-infused therapies, each treatment is aimed at enhancing your skin's health and radiance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
