import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Plus, Phone } from 'lucide-react';
import { COMPANY_NAME, NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-dark-950 border-b border-dark-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <Shield className="h-10 w-10 text-secondary" />
                <Plus className="h-5 w-5 text-[#4ade80] absolute" strokeWidth={3} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white leading-none">{COMPANY_NAME}</span>
                <span className="text-sm font-semibold tracking-wide mt-1">
                  <span className="text-[#4ade80]">Health</span> <span className="text-white">&</span> <span className="text-secondary">Wealth</span> <span className="text-white">Partners</span>
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu - Aligned Left next to Logo */}
          <div className="hidden lg:flex items-center space-x-8 ml-12">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions - Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {/* Phone Number Display */}
            <a href="tel:9083709774" className="flex items-center gap-2 text-lg text-white hover:text-secondary transition-colors font-medium">
              <Phone className="h-5 w-5 text-secondary" />
              <span>(908) 370-9774</span>
            </a>

            <Link
              to="/contact"
              className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-dark-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-900 border-t border-dark-800 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-xl font-medium ${
                  location.pathname === link.path
                    ? 'text-secondary bg-dark-800'
                    : 'text-white hover:text-secondary hover:bg-dark-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Phone Link */}
            <a 
              href="tel:9083709774"
              className="block px-3 py-3 rounded-md text-xl font-medium text-white hover:text-secondary hover:bg-dark-800 flex items-center gap-3"
            >
              <Phone className="h-5 w-5 text-secondary" />
              (908) 370-9774
            </a>

            <div className="pt-4 pb-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-secondary text-white px-5 py-4 rounded-lg font-bold text-xl hover:bg-orange-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;