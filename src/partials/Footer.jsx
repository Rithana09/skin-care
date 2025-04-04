const Footer = () => {
  return (
    <footer className="bg-[#4b5320] text-white py-16 px-6 sm:px-10 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo and Newsletter */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-10">
                <path d="M12.23 15.5c-6.57 0-10.24-4.61-10.24-11.26C2 3.5 2.5 3 3.24 3h17.52c.74 0 1.24.5 1.24 1.24 0 6.65-3.66 11.26-9.77 11.26zm0-2c4.83 0 7.29-3.28 7.6-8.75H4.62c.31 5.47 2.77 8.75 7.61 8.75z" />
              </svg>
              <span className="text-xl font-semibold">J. Lopez</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-light mb-6">Connect with Us</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-white pb-2 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="subscribe" className="mr-2 h-4 w-4" />
                  <label htmlFor="subscribe" className="text-sm">Yes, subscribe me to your newsletter.</label>
                </div>

                <button className="border border-white py-3 w-full hover:bg-white hover:text-[#4b5320] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column - Opening Hours */}
          <div className="flex md:justify-center">
            <div>
              <h3 className="text-xl mb-6 font-medium">Opening Hours</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p>Mon - Fri: 8am - 8pm</p>
                <p>Saturday: 9am - 7pm</p>
                <p>Sunday: 9am - 8pm</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="flex md:justify-end">
            <div>
              <h3 className="text-xl mb-6 font-medium">Contact</h3>
              <div className="space-y-2 mb-10 text-sm sm:text-base">
                <p>500 Terry Francine St</p>
                <p>San Francisco, CA 94158</p>
                <p className="mt-4">123-456-7890</p>
                <p>info@mysite.com</p>
              </div>

              <div className="space-y-1 mb-8 text-sm">
                <a href="#" className="block hover:underline">Privacy Policy</a>
                <a href="#" className="block hover:underline">Accessibility Statement</a>
                <a href="#" className="block hover:underline">Terms & Conditions</a>
                <a href="#" className="block hover:underline">Refund Policy</a>
              </div>

              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ... (truncated for clarity) ..." />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.596 0 0 .6 ... (truncated for clarity) ..." />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-xs sm:text-sm text-center md:text-right px-2 sm:px-0">
          © 2035 by J. Lopez. Powered and secured by{" "}
          <a href="#" className="underline whitespace-nowrap">Wix</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
