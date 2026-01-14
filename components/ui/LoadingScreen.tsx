import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(onComplete, 800); // Wait for fade out
          return 100;
        }
        return prev + 2; // Speed of loading
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-lumiere-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center mb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-lumiere-900 tracking-widest mb-2 animate-pulse">LUMIÈRE</h1>
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-lumiere-400">Salon & Spa</p>
      </div>
      
      <div className="w-64 h-[1px] bg-lumiere-200 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-lumiere-900 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-4 font-sans text-[10px] text-lumiere-400 tracking-widest">{progress}%</span>
    </div>
  );
};

export default LoadingScreen;