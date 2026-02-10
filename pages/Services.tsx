import React, { useState } from 'react';
import { HEALTHCARE_SERVICES, FINANCIAL_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { Shield, TrendingUp, Plus } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
      
      {/* Header - Keeping dark for consistency */}
      <div className="bg-dark-950 text-white py-20 relative overflow-hidden border-b border-dark-800">
        {/* Background: Stethoscope + Financial Notebook */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 to-dark-950/80"></div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expertly crafted services designed to secure your health and build your wealth.
          </p>
        </div>
      </div>

      {/* Healthcare Services - Section background white, cards green */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-green-50 rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-green-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Health Care Insurance Services</h2>
              <p className="text-slate-800 mt-2 font-medium">Protecting you and your family against the unexpected.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HEALTHCARE_SERVICES.items.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service}
                Icon={Plus}
                className="bg-green-50 border-green-200 hover:border-green-300"
                iconWrapperClassName="bg-green-600 border-green-600"
                iconClassName="text-white"
                onClick={() => handleServiceClick(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Financial Services - Section background white, cards orange */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-orange-50 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Financial Services</h2>
              <p className="text-slate-900 mt-2">Building a robust foundation for your future.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FINANCIAL_SERVICES.items.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                Icon={TrendingUp}
                className="bg-orange-50 border-orange-200 hover:border-orange-300"
                iconWrapperClassName="bg-secondary border-secondary"
                iconClassName="text-white"
                onClick={() => handleServiceClick(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure what you need?</h2>
          <p className="text-slate-900 mb-8 text-lg">
            Our advisors are here to help you navigate your options. Let's discuss your specific situation.
          </p>
          <a href="/#/contact" className="inline-block bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondaryHover transition-colors shadow-lg hover:shadow-orange-500/30">
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;