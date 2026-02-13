import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await emailjs.send(
        'service_rzw5kq9',        // Your Service ID
        'template_dsb6xyg',       // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'kYeVI9MMJ-MCjL6cG'        // Your Public Key
      );

      console.log('SUCCESS!', response.status, response.text);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error: any) {
      console.error('FAILED...', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="contact" className="relative bg-white lg:min-h-[600px]">
      <div className="lg:absolute lg:inset-0 lg:w-1/2">
        <img
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1470&q=80"
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

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="py-3 px-4 border rounded-md"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="py-3 px-4 border rounded-md"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="py-3 px-4 border rounded-md"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="py-3 px-4 border rounded-md"
              />

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-md text-white bg-brand-700 hover:bg-brand-800 transition"
              >
                {isSubmitted ? 'Message Sent!' : (
                  <span className="flex items-center justify-center">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </button>

              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;