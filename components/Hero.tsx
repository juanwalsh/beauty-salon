import React, { useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for text reveal animation
  const renderRevealText = (text: string, delayBase: number = 0) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="inline-block overflow-hidden align-bottom mr-3 md:mr-5">
        <span 
          className="inline-block opacity-0 translate-y-full animate-[revealText_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: `${delayBase + (i * 100)}ms` }}
        >
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lumiere-100">
      
      {/* Parallax Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lumiere-100 via-lumiere-100/50 to-transparent z-10 w-full md:w-2/3" />
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
          alt="Luxury Beauty Editorial"
          className="w-full h-[120%] object-cover object-center opacity-90 transition-transform duration-75 ease-out will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }} 
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center md:items-end h-full pb-20 pt-32">
        <div className="md:w-1/2 space-y-8">
            <FadeIn delay={100}>
              <span className="inline-block py-1 px-3 border border-lumiere-900/30 rounded-full text-[0.65rem] uppercase tracking-[0.25em] text-lumiere-900 mb-4 bg-white/30 backdrop-blur-sm">
                Est. 2024
              </span>
            </FadeIn>
            
            <div className="font-serif text-5xl md:text-7xl lg:text-8xl text-lumiere-900 leading-[0.9] tracking-tight">
               <div className="block">
                 {renderRevealText("Modern", 300)}
               </div>
               <div className="block mt-2">
                 <span className="italic font-light ml-2">
                   {renderRevealText("Elegance", 500)}
                 </span>
               </div>
            </div>

            <FadeIn delay={800}>
              <p className="font-sans text-lumiere-800 text-sm md:text-base leading-relaxed max-w-md mt-6 tracking-wide border-l border-lumiere-900 pl-6">
                Redefining luxury through simplicity. A personalized beauty experience where technique meets art.
              </p>
            </FadeIn>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:block absolute bottom-12 right-12 mix-blend-difference text-white/80">
           <div className="w-32 h-32 border border-current rounded-full flex items-center justify-center transform transition-transform hover:scale-110 duration-500">
             <span className="text-[0.5rem] tracking-[0.4em] uppercase">Scroll Down</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;