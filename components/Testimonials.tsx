import React, { useState, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import FadeIn from './ui/FadeIn';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const AUTOPLAY_DURATION = 10000; // 10 seconds

  // Navigation Logic
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }

    if (isSwipeRight) {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      className="py-24 bg-lumiere-100 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Keyframes for the progress bar */}
      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <Quote size={40} className="mx-auto text-lumiere-300 mb-6 opacity-50" />
          <h2 className="font-serif text-3xl md:text-4xl text-lumiere-900">Words from those who lived the experience</h2>
        </FadeIn>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={t.id}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center text-center justify-center transition-opacity duration-1000 ease-in-out ${
                i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <p className="font-serif text-xl md:text-2xl text-lumiere-900 font-light italic mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto px-4">
                "{t.text}"
              </p>
              <div className="w-8 h-[1px] bg-lumiere-400 mb-4"></div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-lumiere-900">{t.author}</h4>
              <span className="font-sans text-[10px] uppercase tracking-wider text-lumiere-500 mt-1">{t.role}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar & Navigation */}
        <div className="flex flex-col items-center mt-8 space-y-6">
          
          {/* Visual Timer Bar */}
          <div className="w-48 h-[2px] bg-lumiere-200 rounded-full overflow-hidden relative">
            <div
              key={currentIndex} // Reset animation on slide change
              className="absolute top-0 left-0 h-full bg-lumiere-900"
              style={{
                animation: `slideProgress ${AUTOPLAY_DURATION}ms linear forwards`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
              onAnimationEnd={handleNext} // Trigger next slide when animation finishes
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? 'bg-lumiere-900 w-2 h-2 scale-110' 
                    : 'bg-lumiere-300 w-2 h-2 hover:bg-lumiere-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;