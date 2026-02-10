import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Plus } from 'lucide-react';
import { COMPANY_NAME, HEALTHCARE_SERVICES, FINANCIAL_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { ServiceItem } from '../types';

const GALLERY_IMAGES = [
  { 
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80", 
    position: "object-center", 
    alt: "Professional Financial Planning Meeting" 
  },
  { 
    url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1920&q=80", 
    position: "object-[center_20%]", 
    alt: "Compassionate Healthcare Professionals" 
  },
  { 
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80", 
    position: "object-[center_65%]", 
    alt: "Education and Future Planning" 
  },
  { 
    url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1920&q=80", 
    position: "object-center", 
    alt: "Strategic Financial Analysis & Growth" 
  },
  { 
    url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80", 
    position: "object-[center_35%]", 
    alt: "Strategic Retirement & Financial Planning" 
  },
  { 
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80", 
    position: "object-[center_15%]", 
    alt: "Business Team Collaboration" 
  },
  { 
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=80", 
    position: "object-[center_75%]", 
    alt: "Family and Home Protection" 
  },
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const featuredHealthcare = HEALTHCARE_SERVICES.items.slice(0, 3);
  const featuredFinancial = FINANCIAL_SERVICES.items.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="animate-fadeIn">
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeServiceModal} />
      )}

      {/* 1. Full-Width Slideshow Section */}
      <div className="w-full h-[350px] md:h-[480px] relative overflow-hidden bg-dark-950">
        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img.url} 
              alt={img.alt}
              className={`w-full h-full object-cover ${img.position} brightness-[0.85]`}
            />
          </div>
        ))}
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm ${
                idx === currentImageIndex ? 'w-8 bg-secondary' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Text Content Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Text Content */}
            <div className="text-left z-10">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight animate-fade-in-up" 
                  style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  Securing Your <br className="hidden md:block"/>
                  <span className="text-[#16a34a]">Health</span> & <span className="text-secondary">Financial Future</span>
                </h1>
                
                <div 
                  className="space-y-4 mb-8 text-slate-900 leading-relaxed font-medium animate-fade-in-up" 
                  style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  <p className="text-lg md:text-xl font-bold text-slate-900">
                    At {COMPANY_NAME}, we bridge the gap between comprehensive healthcare coverage and robust financial planning. Trust us to protect what matters most to you.
                  </p>
                  <p className="text-base text-slate-900">
                    Life's uncertainties shouldn't keep you up at night. Whether you're planning for retirement, protecting your family, or navigating healthcare coverage, we provide clarity and confidence every step of the way.
                  </p>
                  <p className="text-base text-slate-900">
                    Our integrated approach means you don't have to choose between quality healthcare and financial security. We craft personalized solutions that adapt as your life evolves, giving you and your loved ones true peace of mind.
                  </p>
                </div>
                
                <div 
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" 
                  style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  <Link to="/services" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondaryHover transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transform hover:-translate-y-1">
                    Explore Services <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link to="/contact" className="bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center transform hover:-translate-y-1">
                    Contact Us
                  </Link>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative z-10 mt-8 lg:mt-0">
               {/* Decorative background element */}
               <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/5 to-slate-200/50 rounded-2xl transform rotate-2 blur-xl"></div>
               {/* Image: Stethoscope and documents */}
               <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Health Insurance and Financial Planning Documents" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px] transform transition-transform hover:scale-[1.01] duration-500 animate-fade-in-up border border-slate-100"
                  style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
               />
               
               {/* Floating Card */}
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-200 hidden md:block animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-full">
                      <Shield className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-700 font-bold uppercase">Protection</p>
                      <p className="text-sm font-extrabold text-slate-900">Comprehensive Coverage</p>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section - Updated background to white */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial Consultation" 
                className="relative rounded-2xl shadow-xl z-10 w-full object-cover border border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-50 p-3 rounded-full">
                    <CheckCircle2 className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 font-bold">Client Satisfaction</p>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">Partnering for Your Peace of Mind</h3>
              <p className="text-black mb-6 leading-relaxed">
                {COMPANY_NAME} stands at the intersection of healthcare and wealth management. We understand that true security comes from addressing both physical well-being and fiscal stability.
              </p>
              <p className="text-black mb-8 leading-relaxed">
                Whether you are navigating Medicare options or planning for a tax-free retirement, our team of dedicated experts is here to guide you every step of the way with personalized solutions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Expert Guidance on Medicare & Insurance",
                  "Comprehensive Financial & Estate Planning",
                  "Personalized Strategies for Every Life Stage",
                  "Trusted Fiduciary Standards"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-black font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-secondary font-bold hover:text-secondaryHover transition-colors inline-flex items-center gap-1">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Expertise</h2>
            <p className="text-xl text-slate-900 max-w-2xl mx-auto">
              We offer a dual approach to your security, covering both health and wealth with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Healthcare Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold text-slate-900">Healthcare Services</h3>
              </div>
              <div className="grid gap-6">
                {featuredHealthcare.map((service, idx) => (
                  <ServiceCard 
                    key={idx} 
                    {...service} 
                    Icon={Plus}
                    className="bg-green-50 border-green-200 hover:border-green-300"
                    iconWrapperClassName="bg-green-600 border-green-600"
                    iconClassName="text-white"
                    onClick={() => handleServiceClick(service)}
                  />
                ))}
              </div>
              <div className="mt-8 text-center md:text-left">
                <Link to="/services" className="text-secondary font-bold hover:text-secondaryHover transition-colors">
                  View All Healthcare Services &rarr;
                </Link>
              </div>
            </div>

            {/* Financial Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold text-slate-900">Financial Services</h3>
              </div>
              <div className="grid gap-6">
                {featuredFinancial.map((service, idx) => (
                  <ServiceCard 
                    key={idx} 
                    {...service}
                    Icon={TrendingUp}
                    className="bg-orange-50 border-orange-200 hover:border-orange-300"
                    iconWrapperClassName="bg-secondary border-secondary"
                    iconClassName="text-white"
                    onClick={() => handleServiceClick(service)}
                  />
                ))}
              </div>
              <div className="mt-8 text-center md:text-left">
                <Link to="/services" className="text-secondary font-bold hover:text-secondaryHover transition-colors">
                  View All Financial Services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 skew-x-12 transform origin-top" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to secure your future?</h2>
          <p className="text-xl text-slate-900 mb-10">
            Schedule a consultation with our experts today and take the first step towards total peace of mind.
          </p>
          <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondaryHover transition-all shadow-lg hover:shadow-orange-500/30 inline-block">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;