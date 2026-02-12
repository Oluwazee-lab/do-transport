import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-200 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-4">
              Events | Holidays | Parties
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Your Journey,</span>{' '}
              <span className="block text-brand-700 xl:inline">Our Expertise</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {BUSINESS_INFO.tagline} Whether it's a group event, airport transfer, or party logistics, we ensure you and your equipment arrive safely and on time.
            </p>
            <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-700 hover:bg-brand-800 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get a Quote
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-700 bg-brand-100 hover:bg-brand-200 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img
                  className="w-full h-full object-cover"
                  src="/pic.png"
                  alt="Car on the road"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Reliable Transport</p>
                  <p className="text-brand-200 text-sm">Anywhere, Anytime</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;