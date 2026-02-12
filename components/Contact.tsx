import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div id="contact" className="relative bg-white lg:min-h-[600px]">
      <div className="lg:absolute lg:inset-0 lg:w-1/2">
        <img
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Driver view"
        />
        <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply lg:w-full"></div>
      </div>
      
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="lg:col-start-2 lg:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ready to plan your journey? Contact us today for a free quote or to discuss your logistical needs.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-brand-700" />
                </div>
                <div className="ml-3 text-base text-gray-700 font-medium">
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-brand-700">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-brand-700" />
                </div>
                <div className="ml-3 text-base text-gray-700 font-medium">
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-700">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-700" />
                </div>
                <div className="ml-3 text-base text-gray-700 font-medium">
                  Serving Events & Locations Nationwide
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                    />
                  </div>
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Trip Details</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-700 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
                  >
                   {isSubmitted ? 'Message Sent!' : (
                     <span className="flex items-center">
                       Send Message <Send className="ml-2 w-4 h-4"/>
                     </span>
                   )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;