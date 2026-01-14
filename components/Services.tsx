import React, { useState } from 'react';
import { SERVICES } from '../constants';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';
import { useBooking } from '../context/BookingContext';

const Services: React.FC = () => {
  const { openBooking } = useBooking();
  
  // State to track which cards are flipped. Key is ID, value is boolean.
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleCardClick = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle the specific card
    }));
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-lumiere-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-lumiere-200 pb-8">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl text-lumiere-900">Service <span className="italic text-lumiere-400">Menu</span></h2>
          </FadeIn>
          <FadeIn delay={200} className="mt-6 md:mt-0">
            <p className="text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-lumiere-800">
              Click the card to see details
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const isFlipped = flippedCards[service.id];
            
            return (
              <FadeIn key={service.id} delay={index * 100} className="h-[250px] md:h-[290px] lg:h-[320px] perspective-1000 cursor-pointer group">
                <div 
                  onClick={() => handleCardClick(service.id)}
                  className={`relative w-full h-full transition-transform duration-700 preserve-3d shadow-lg shadow-lumiere-200/50 group-hover:scale-105 ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  
                  {/* CARD FRONT */}
                  <div className="absolute inset-0 bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-between backface-hidden border border-lumiere-100">
                    <div className="flex justify-between items-start">
                      <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.2em] text-lumiere-400 border border-lumiere-200 rounded-full px-2 py-1">
                        {service.category}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-2xl md:text-3xl text-lumiere-900 mb-2">
                        {service.title}
                      </h3>
                      <div className="w-8 h-[1px] bg-lumiere-900 mx-auto mt-3 md:mt-4" />
                    </div>
                    <div className="text-center">
                       <span className="font-serif text-base md:text-lg text-lumiere-500 italic">
                        {service.price}
                      </span>
                    </div>
                    <div className="text-center mt-auto pt-2 md:pt-4">
                      <span className="text-[0.5rem] md:text-[0.65rem] text-lumiere-300 uppercase tracking-widest">+ Info</span>
                    </div>
                  </div>

                  {/* CARD BACK */}
                  <div className="absolute inset-0 bg-lumiere-900 p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center backface-hidden rotate-y-180">
                    <h3 className="font-serif text-xl md:text-2xl text-lumiere-50 mb-3 md:mb-4">{service.title}</h3>
                    <p className="font-sans text-xs md:text-sm text-lumiere-200 leading-relaxed font-light mb-4 md:mb-8 select-none">
                      {service.description}
                    </p>
                    <div onClick={(e) => e.stopPropagation()}>
                      <Button variant="primary" onClick={openBooking} className="!bg-lumiere-50 !text-lumiere-900 !border-none hover:!bg-lumiere-200 shadow-none text-[0.6rem] md:text-[0.65rem] py-2 px-6">
                        Book Now
                      </Button>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;