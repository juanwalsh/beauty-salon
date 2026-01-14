import React, { useState, useRef, useEffect } from 'react';
import FadeIn from './ui/FadeIn';
import { ArrowLeftRight } from 'lucide-react';

const Transformation: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  const afterImage = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop";
  const beforeImage = "/malunha1.webp";

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="block font-sans text-xs uppercase tracking-[0.3em] text-lumiere-400 mb-4">
              Real Results
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-lumiere-900">
              The Power of <span className="italic text-lumiere-400">Transformation</span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div 
            ref={containerRef}
            className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] overflow-hidden cursor-ew-resize select-none shadow-2xl border border-lumiere-200"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
          >
            {/* After Image (Background) */}
            <img 
              src={afterImage} 
              alt="After Transformation" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-sans tracking-widest text-lumiere-900 z-10">
              LUMIÈRE
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={beforeImage} 
                alt="Before Transformation" 
                className="absolute inset-0 w-full h-full object-cover" 
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-lumiere-900/90 backdrop-blur px-3 py-1 text-xs font-sans tracking-widest text-white z-10">
                BEFORE
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-lumiere-900">
                <ArrowLeftRight size={16} />
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={400} className="text-center mt-12">
           <p className="font-sans text-lumiere-600 text-sm italic">
             Drag to see the difference in technique and treatment.
           </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Transformation;