import { NavLink } from 'react-router-dom';
import { Clock, MapPin, Phone, Mail, Facebook, Twitter, Youtube } from 'lucide-react';
import { ShellyLogo } from './ShellyLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <ShellyLogo className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-800 ml-2">Shelly</span>
            </div>
            <p className="text-gray-600 mb-4">
              Providing quality education to empower the next generation with knowledge and skills for a brighter future.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span>Mon - Fri: 8:00AM - 6:00PM</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span>123 Learning St., Knowledge City</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span>+1 234 5678 90</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span>info@shellyedu.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/classes" className="text-gray-600 hover:text-orange-500 transition-colors">Classes</NavLink>
              </li>
              <li>
                <NavLink to="/teachers" className="text-gray-600 hover:text-orange-500 transition-colors">Teachers</NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Student Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Scholarships</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get the latest updates and news.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} Shelly Education. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-red-600 hover:text-red-800 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;