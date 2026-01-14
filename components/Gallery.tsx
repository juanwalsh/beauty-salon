import React, { useState, MouseEvent } from 'react';
import FadeIn from './ui/FadeIn';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery images with elegant titles
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/img1.png",
    alt: "Modern Men's Cut",
    category: "Men", 
    title: "Modern Gentleman", 
    span: "col-span-1 row-span-1"
  },
  {
    id: 2,
    src: "/img2.png",
    alt: "Wavy Hairstyle",
    category: "Styling",
    title: "Classic Radiance",
    span: "col-span-1 md:row-span-2" 
  },
  {
    id: 3,
    src: "/img3.jpg",
    alt: "Men's Cut",
    category: "Signature Cut",
    title: "Urban Minimalist", 
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    src: "/img4.jpg",
    alt: "Artistic Makeup",
    category: "Editorial",
    title: "Avant-Garde",
    span: "col-span-1 md:col-span-1 md:row-span-1" 
  },
  {
    id: 5,
    src: "/img5.jpg",
    alt: "Hair Treatment",
    category: "Treatment",
    title: "Pure Essence",
    span: "col-span-1 row-span-1"
  }
];

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Lightbox navigation
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  // 3D tilt effect logic
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xRot = ((y / rect.height) - 0.5) * -10; 
    const yRot = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section id="gallery" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-lumiere-400 mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-lumiere-900">Visual Curation</h2>
          </FadeIn>
        </div>

        {/* Adjusted grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] grid-flow-dense">
          {GALLERY_IMAGES.map((item, index) => (
            <FadeIn 
              key={item.id} 
              delay={index * 100} 
              className={`relative group overflow-hidden ${item.span} cursor-pointer rounded-sm`}
            >
              <div 
                className="w-full h-full transition-transform duration-500 ease-out will-change-transform"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover effect with text */}
                <div className="absolute inset-0 bg-lumiere-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
                  <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 px-4">
                    {/* Small category on top */}
                    <p className="text-[10px] md:text-xs text-lumiere-200 uppercase tracking-[0.25em] mb-2 border-b border-lumiere-200/30 pb-2 inline-block">
                      {item.category}
                    </p>
                    {/* Elegant title */}
                    <h3 className="font-serif text-2xl md:text-3xl text-white italic">
                      {item.title}
                    </h3>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
          
          {/* Static call-to-action card */}
          <FadeIn delay={600} className="col-span-1 row-span-1 bg-lumiere-100 flex items-center justify-center p-8 text-center flex-col transition-transform duration-300 md:hover:scale-[1.02]">
             <h3 className="font-serif text-2xl text-lumiere-900 mb-4">Join our Newsletter</h3>
             <a href="#" className="font-sans text-xs uppercase tracking-widest text-lumiere-600 border-b border-lumiere-600 pb-1 hover:text-lumiere-900 hover:border-lumiere-900 transition-all">Subscribe Now</a>
          </FadeIn>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-lumiere-900/95 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={40} />
          </button>

          {/* Left button */}
          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} 
          >
             <img 
               src={GALLERY_IMAGES[selectedImageIndex].src} 
               alt={GALLERY_IMAGES[selectedImageIndex].alt} 
               className="w-full h-full max-h-[70vh] object-contain shadow-2xl"
             />
             <div className="mt-6 text-center text-white">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-lumiere-300 mb-2">
                  {GALLERY_IMAGES[selectedImageIndex].category}
                </p>
                <p className="font-serif text-3xl italic">
                  {GALLERY_IMAGES[selectedImageIndex].title}
                </p>
             </div>
          </div>

          {/* Right button */}
          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;