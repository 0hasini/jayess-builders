import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.png';
import menu from '../images/menu.png';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Jayess Builders Logo" className="h-12 w-auto" />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-6 text-brown-700 text-lg pr-2 font-semibold">
        <Link 
          to="/" 
          className={`focus:outline-none ${isActive('/') ? 'border-b-2 border-brown-700' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`focus:outline-none ${isActive('/about') ? 'border-b-2 border-brown-700' : ''}`}
        >
          About Us
        </Link>
        <Link 
          to="/testimonials" 
          className={`focus:outline-none ${isActive('/testimonials') ? 'border-b-2 border-brown-700' : ''}`}
        >
          Testimonials
        </Link>
        <Link 
          to="/contact" 
          className={`focus:outline-none ${isActive('/contact') ? 'border-b-2 border-brown-700' : ''}`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="p-2 cursor-pointer">
          <img src={menu} alt="Menu" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg sm:hidden z-50">
          <div className="flex flex-col py-4">
          <Link 
            to="/" 
            className={`px-4 py-2 text-brown-700 font-semibold transition-colors duration-200 ${
              isActive('/') ? 'bg-[#f3ebe3]' : 'hover:bg-[#e6dbce]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 text-brown-700 font-semibold transition-colors duration-200 ${
              isActive('/about') ? 'bg-[#f3ebe3]' : 'hover:bg-[#e6dbce]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/testimonials" 
            className={`px-4 py-2 text-brown-700 font-semibold transition-colors duration-200 ${
              isActive('/testimonials') ? 'bg-[#f3ebe3]' : 'hover:bg-[#e6dbce]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link 
            to="/contact" 
            className={`px-4 py-2 text-brown-700 font-semibold transition-colors duration-200 ${
              isActive('/contact') ? 'bg-[#f3ebe3]' : 'hover:bg-[#e6dbce]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar; 
