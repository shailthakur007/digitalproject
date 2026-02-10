import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header - Keeping dark for consistency with Navbar */}
      <div className="bg-dark-950 py-20 border-b border-dark-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About {COMPANY_NAME}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Dedicated to providing comprehensive solutions for your health and wealth since our inception.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-900 mb-6 leading-relaxed">
                {COMPANY_NAME} was founded with a singular purpose: to simplify the complex worlds of healthcare insurance and financial planning. We recognized that individuals and families often face fragmented advice, leaving gaps in their long-term security.
              </p>
              <p className="text-slate-900 mb-6 leading-relaxed">
                By integrating these two critical pillars, we offer a holistic approach. We believe that true financial health is impossible without adequate healthcare protection, and quality healthcare requires sound financial backing.
              </p>
              <p className="text-slate-900 leading-relaxed">
                Over the years, we have grown into a trusted partner for thousands of clients, known for our integrity, transparency, and unwavering commitment to client success.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team at Office" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px] border border-white" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
              <p className="text-slate-900 leading-relaxed">
                To be the leading provider of integrated health and financial solutions, creating a world where every individual can age with dignity, security, and confidence in their future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
               <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-900 leading-relaxed">
                To empower our clients through education and personalized service, delivering tailored insurance and financial strategies that protect their assets, health, and legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-slate-900">Built on a foundation of trust and expertise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client-Centric</h3>
              <p className="text-slate-900">We put your needs first, offering unbiased advice tailored to your specific situation.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Knowledge</h3>
              <p className="text-slate-900">Our team consists of certified professionals with years of experience in insurance and finance.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Holistic Approach</h3>
              <p className="text-slate-900">We look at the big picture, ensuring your health coverage and financial plans work in harmony.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;