import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
             <span className="text-2xl font-bold text-white tracking-tight">{BUSINESS_INFO.name}</span>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p className="text-center text-sm text-brand-700 mt-1">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;