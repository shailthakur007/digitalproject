import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="bg-dark-950 py-20 border-b border-dark-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Client Testimonials</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl hover:border-secondary/30">
                <Quote className="h-10 w-10 text-secondary/30 mb-6" />
                <p className="text-slate-900 leading-relaxed mb-8 flex-grow italic font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/20"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-800 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;