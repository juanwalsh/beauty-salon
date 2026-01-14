import React from 'react';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-lumiere-900 text-lumiere-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-lumiere-800 pb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl tracking-widest">LUMIÈRE</h2>
              <span className="text-[0.6rem] uppercase tracking-[0.4em] text-lumiere-300 block mt-1">Salon & Spa</span>
            </div>
            <p className="text-lumiere-300 text-sm font-light leading-relaxed">
              Elevating beauty to an art form.
              An environment designed for your complete renewal.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-lumiere-200 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-lumiere-200">Location</h3>
            <div className="flex items-start space-x-3 text-sm font-light text-lumiere-100">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-lumiere-400" />
              <p>Rua Oscar Freire, 1234<br/>Jardins, São Paulo - SP</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-lumiere-200">Contact</h3>
            <div className="flex items-center space-x-3 text-sm font-light text-lumiere-100">
              <Phone size={18} className="text-lumiere-400" />
              <p>+55 (11) 99999-9999</p>
            </div>
            <div className="flex items-center space-x-3 text-sm font-light text-lumiere-100">
              <Mail size={18} className="text-lumiere-400" />
              <p>concierge@lumiere.com.br</p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-lumiere-200">Opening Hours</h3>
            <div className="space-y-2 text-sm font-light text-lumiere-100">
              <div className="flex justify-between border-b border-lumiere-800 pb-2">
                <span>Tue - Fri</span>
                <span>10:00 - 20:00</span>
              </div>
              <div className="flex justify-between border-b border-lumiere-800 pb-2">
                <span>Saturday</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-lumiere-400">
                <span>Sun - Mon</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-wider text-lumiere-500 font-sans">
          <p>© 2024 Lumière Salon. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-lumiere-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-lumiere-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;