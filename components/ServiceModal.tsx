import React from 'react';
import { X } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-4">
             {Icon && <div className="p-2 bg-white rounded-lg shadow-sm text-secondary"><Icon className="h-6 w-6" /></div>}
             <h3 className="text-xl font-bold text-slate-900 leading-tight">{service.title}</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors p-1 rounded-full hover:bg-slate-200">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          <p className="text-lg text-slate-900 font-bold mb-4">{service.description}</p>
          <div className="h-px bg-slate-100 my-4" />
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Service Details</h4>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {service.details || "Contact us for more detailed information about this service."}
          </p>
          
          <div className="mt-8">
            <a href="/#/contact" className="block w-full text-center bg-secondary text-white font-bold py-3.5 rounded-lg hover:bg-secondaryHover transition-colors shadow-lg shadow-orange-500/20">
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;