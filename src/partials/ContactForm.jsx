import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-[#FFFDF6] min-h-screen overflow-hidden">
      {/* Section Heading */}
      <div className="px-8 pt-12 lg:px-20">
        <h2 className="text-5xl font-serif font-bold text-[#4E5826]">Get In Touch</h2>
      </div>

      {/* Flex Container for Image & Form */}
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
          <img
            src="/facial.avif"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-14">
          <div className="max-w-full">
            <h3 className="text-2xl font-serif font-semibold text-[#4E5826] uppercase tracking-wide mb-10">
              Reach Out to Us Today
            </h3>

            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#4E5826] mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E5826]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#4E5826] mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E5826]"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4E5826] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E5826]"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#4E5826] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E5826]"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4E5826] mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E5826]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4E5826] text-white py-4 px-6 rounded-md hover:bg-[#3d471e] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
