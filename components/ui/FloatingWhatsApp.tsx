import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      // Hide when reaching footer (approximate check)
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
      setVisible(!scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="font-sans text-xs font-medium text-lumiere-900 tracking-wide">Book your visit</span>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>

        {/* Button */}
        <a 
          href="https://wa.me/5522998004156" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-lumiere-900 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 relative overflow-hidden"
        >
          {/* Ripple/Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
          <MessageCircle size={28} className="text-white relative z-10" />
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;