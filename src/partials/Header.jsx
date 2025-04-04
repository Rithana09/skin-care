import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cream text-olive py-4 px-6 flex justify-between items-center relative">
      <div className="text-2xl font-semibold">J. Lopez</div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-lg">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-4 py-6 text-lg">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
