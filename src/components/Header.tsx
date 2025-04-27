import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Map, Phone, Clock, Facebook, Twitter, Youtube } from 'lucide-react';
import { ShellyLogo } from './ShellyLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full z-50">
      {/* Top bar with contact info */}
      <div className="bg-gray-100 py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-orange-500 mr-2" />
              <span>Mon - Fri: 8:00AM - 6:00PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-orange-500 mr-2" />
              <span>+1 234 5678 90</span>
            </div>
            <div className="flex items-center">
              <Map className="h-4 w-4 text-orange-500 mr-2" />
              <span>123 Learning St., Knowledge City</span>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-white py-4 px-6 shadow-sm transition-all duration-300 ${isScrolled ? 'sticky top-0 shadow-md' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <ShellyLogo className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">Shelly</span>
          </NavLink>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500 transition-colors"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500 transition-colors"}>
              About
            </NavLink>
            <NavLink to="/classes" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500 transition-colors"}>
              Classes
            </NavLink>
            <NavLink to="/teachers" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500 transition-colors"}>
              Teachers
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500 transition-colors"}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500 transition-colors"}>
              Contacts
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700"} onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700"} onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/classes" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700"} onClick={() => setIsMenuOpen(false)}>
              Classes
            </NavLink>
            <NavLink to="/teachers" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700"} onClick={() => setIsMenuOpen(false)}>
              Teachers
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700"} onClick={() => setIsMenuOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-orange-500 font-medium" : "text-gray-700"} onClick={() => setIsMenuOpen(false)}>
              Contacts
            </NavLink>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;