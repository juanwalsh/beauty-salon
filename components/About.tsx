import React, { useState, useEffect, useRef } from 'react';
import FadeIn from './ui/FadeIn';

// Helper hook for counting up numbers
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const About: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Custom counters
  const yearsCount = useCounter(12, 2000, isInView);
  const productsCount = useCounter(100, 2500, isInView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-lumiere-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
             <FadeIn>
               <div className="relative p-4 border border-lumiere-200">
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-lumiere-100 -z-10 rounded-full blur-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop" 
                    alt="Salon Interior" 
                    className="w-full h-auto grayscale-[20%] shadow-xl"
                  />
               </div>
             </FadeIn>
          </div>
          <div className="md:w-1/2 space-y-6">
            <FadeIn delay={200}>
              <h2 className="font-serif text-4xl md:text-5xl text-lumiere-900 leading-tight">
                A sanctuary of <br />
                <span className="text-lumiere-400 italic">wellness</span> and style.
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="font-sans text-lumiere-600 text-sm leading-7">
                Founded with the vision of creating a space where contemporary luxury meets absolute comfort. At Lumière, we believe self-care is a sacred ritual. Our space was designed to be a refuge from the urban bustle, featuring minimalist design, subtle aromatherapy, and a team of experts passionate about the art of beauty.
              </p>
            </FadeIn>
            
            <FadeIn delay={600} className="grid grid-cols-2 gap-8 pt-8 border-t border-lumiere-200 mt-6">
              <div className="text-center md:text-left">
                <span className="block font-serif text-5xl text-lumiere-900 tabular-nums">
                  {yearsCount}+
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-lumiere-500">Years of Excellence</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block font-serif text-5xl text-lumiere-900 tabular-nums">
                  {productsCount}%
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-lumiere-500">Vegan & Cruelty-Free</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;