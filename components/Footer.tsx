import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Plus, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 text-white pt-16 pb-8 border-t border-dark-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center">
                <Shield className="h-8 w-8 text-secondary" />
                <Plus className="h-4 w-4 text-[#4ade80] absolute" strokeWidth={3} />
              </div>
              <span className="font-bold text-2xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Dedicated to securing your health and financial future. We provide comprehensive insurance and financial planning solutions tailored to your unique life journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Testimonials', 'Blog', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span>123 Financial District Blvd,<br />Suite 400<br />New York, NY 10005</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:9083709774" className="hover:text-secondary transition-colors">(908) 370-9774</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>info@rsrbsolutions.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe to get the latest updates on health insurance and financial tips.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-dark-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary border border-dark-800 placeholder-slate-500"
              />
              <button type="submit" className="bg-secondary text-white px-4 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;