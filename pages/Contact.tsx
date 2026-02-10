import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header - Dark */}
      <div className="bg-dark-950 text-white py-20 border-b border-dark-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions about your insurance or financial planning? We're here to help.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                    <p className="text-slate-900">
                      123 Financial District Blvd, Suite 400<br />
                      New York, NY 10005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                    <p className="text-slate-900"><a href="tel:9083709774" className="hover:text-secondary transition-colors">(908) 370-9774</a></p>
                    <p className="text-sm text-slate-700 font-medium mt-1">Mon-Fri 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                    <p className="text-slate-900">info@rsrbsolutions.com</p>
                    <p className="text-sm text-slate-700 font-medium mt-1">We typically reply within 24 hours</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-900">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-slate-900">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-slate-100 border-t border-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <p className="text-lg font-medium flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Interactive Google Map would go here
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;