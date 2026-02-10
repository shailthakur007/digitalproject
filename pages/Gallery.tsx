import React, { useState } from 'react';
import { Calendar, MapPin, Clock, X, ZoomIn } from 'lucide-react';
import { UPCOMING_EVENTS, GALLERY_IMAGES } from '../constants';
import EventRegistrationModal from '../components/EventRegistrationModal';
import { EventItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const openRegistration = (event: EventItem) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeRegistration = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  const currentImage = GALLERY_IMAGES.find(img => img.id === selectedImage);

  return (
    <div className="animate-fadeIn">
      {/* Header - Dark */}
      <div className="bg-dark-950 text-white py-20 border-b border-dark-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Events & Gallery</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join our community events and explore moments from our journey in helping people secure their future.
          </p>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 group border border-slate-200 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 text-center shadow-md min-w-[60px] border border-slate-100">
                    <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">{event.month}</span>
                    <span className="block text-2xl font-bold text-slate-900">{event.day}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                      <Clock className="h-4 w-4 text-secondary/70" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                      <MapPin className="h-4 w-4 text-secondary/70" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-900 text-sm mb-6 flex-grow">
                    {event.description}
                  </p>
                  <button 
                    onClick={() => openRegistration(event)}
                    className="block w-full text-center bg-slate-100 text-slate-900 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition-colors mt-auto border border-slate-200 hover:border-transparent cursor-pointer"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Moments</h2>
            <p className="text-slate-900 max-w-2xl mx-auto">
              A glimpse into our seminars, community outreach, and office culture.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((item) => (
              <div 
                key={item.id} 
                className="relative group break-inside-avoid overflow-hidden rounded-xl cursor-pointer border border-slate-200 shadow-sm"
                onClick={() => openLightbox(item.id)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white h-10 w-10 opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium text-sm">{item.category}</p>
                  <p className="text-slate-300 text-xs">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <EventRegistrationModal 
          event={selectedEvent} 
          onClose={closeRegistration} 
        />
      )}

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 z-[60] bg-dark-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-10 w-10" />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border border-dark-700"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-semibold">{currentImage.category}</h3>
              <p className="text-slate-400">{currentImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;