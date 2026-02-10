import React, { useState } from 'react';
import { X, CheckCircle, Loader2, Calendar, MapPin, Clock } from 'lucide-react';
import { EventItem } from '../types';

interface EventRegistrationModalProps {
  event: EventItem;
  onClose: () => void;
}

const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: 1
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call to send email
    setTimeout(() => {
      // In a real application, you would use a service like EmailJS here or call your backend API
      // emailjs.send('service_id', 'template_id', { event: event.title, ...formData })
      
      console.log('--- Email Simulation ---');
      console.log(`To: info@rsrbsolutions.com`);
      console.log(`Subject: New Registration for ${event.title}`);
      console.log('Body:', JSON.stringify(formData, null, 2));
      console.log('------------------------');

      setStatus('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-950/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {status === 'success' ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 animate-bounce">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Confirmed!</h3>
            <p className="text-slate-600 mb-8">
              Thank you, <strong>{formData.name}</strong>. We've received your registration for <strong>{event.title}</strong>. A confirmation email has been sent to {formData.email}.
            </p>
            <button 
              onClick={onClose}
              className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondaryHover transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full max-h-[90vh]">
            {/* Header */}
            <div className="bg-slate-50 p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Event Registration</h3>
              <p className="text-slate-500 text-sm">Please fill in your details to reserve your spot.</p>
            </div>

            {/* Event Summary */}
            <div className="bg-blue-50/50 p-4 border-b border-blue-100 flex gap-4 items-start">
               <img src={event.image} alt={event.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
               <div>
                 <h4 className="font-bold text-slate-900 text-sm mb-1">{event.title}</h4>
                 <div className="space-y-1">
                   <div className="flex items-center gap-1.5 text-xs text-slate-600">
                     <Calendar className="h-3.5 w-3.5" /> <span>{event.month} {event.day}</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-xs text-slate-600">
                     <Clock className="h-3.5 w-3.5" /> <span>{event.time}</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-xs text-slate-600">
                     <MapPin className="h-3.5 w-3.5" /> <span>{event.location}</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Form */}
            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="attendees" className="block text-sm font-bold text-slate-700 mb-1">Attendees</label>
                    <input
                      type="number"
                      id="attendees"
                      name="attendees"
                      min="1"
                      max="10"
                      required
                      value={formData.attendees}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-secondary text-white font-bold py-3.5 rounded-lg hover:bg-secondaryHover transition-all shadow-lg hover:shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      'Confirm Registration'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventRegistrationModal;