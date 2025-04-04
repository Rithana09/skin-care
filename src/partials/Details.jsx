import React from "react";

const Details = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">
      {/* Left Side - Contact Form */}
      <div className="bg-[#E4E4D6] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-16">
        <h5 className="text-[#4E5826] uppercase text-sm sm:text-base mb-2 tracking-wide">
          Contact Us
        </h5>
        <h1 className="text-[#4E5826] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
          Get in Touch <br /> Today
        </h1>
        <p className="text-[#4E5826] text-base sm:text-lg mb-10 max-w-2xl">
          Have a question or need more information? Feel free to reach out to us.
          We're here to assist you.
        </p>

        {/* Form */}
        <form className="space-y-8 w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name *"
              className="bg-transparent border-b border-[#4E5826] outline-none py-3 text-[#4E5826] placeholder-[#4E5826] w-full"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="bg-transparent border-b border-[#4E5826] outline-none py-3 text-[#4E5826] placeholder-[#4E5826] w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            className="bg-transparent border-b border-[#4E5826] outline-none py-3 text-[#4E5826] placeholder-[#4E5826] w-full"
          />
          <input
            type="tel"
            placeholder="Phone *"
            className="bg-transparent border-b border-[#4E5826] outline-none py-3 text-[#4E5826] placeholder-[#4E5826] w-full"
          />
          <textarea
            placeholder="Your Message *"
            className="bg-transparent border-b border-[#4E5826] outline-none py-3 text-[#4E5826] placeholder-[#4E5826] w-full resize-none"
            rows="5"
          ></textarea>

          {/* Submit Button */}
          <button className="bg-[#4E5826] text-white py-3 px-8 rounded-full text-base sm:text-lg hover:bg-[#3B4620] transition duration-300 w-fit">
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div
        className="hidden lg:block bg-cover bg-center"
        style={{ backgroundImage: "url('/serum2.avif')" }}
      ></div>
    </div>
  );
};

export default Details;
