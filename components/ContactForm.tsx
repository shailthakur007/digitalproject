import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none placeholder-slate-400"
          placeholder="How can we help you today?"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
      >
        <span>Send Message</span>
        <Send className="h-5 w-5" />
      </button>
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center animate-pulse">
          Thank you! Your message has been sent successfully. We will get back to you soon.
        </div>
      )}
    </form>
  );
};

export default ContactForm;