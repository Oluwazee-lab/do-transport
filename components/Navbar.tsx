import React, { useState } from 'react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold text-brand-700 tracking-tight">{BUSINESS_INFO.name}</span>
              <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">Transport Services</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-700 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
              className="inline-flex items-center px-4 py-2 border border-brand-700 text-sm font-medium rounded-full text-brand-700 bg-white hover:bg-brand-50 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-brand-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-700 hover:bg-brand-50 rounded-md text-center"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
              className="block w-full mt-4 px-5 py-3 text-center font-bold text-white bg-brand-700 rounded-md shadow-md"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;