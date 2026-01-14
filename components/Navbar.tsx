import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';
import { useBooking } from '../context/BookingContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { openBooking } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Improved Scroll Spy logic
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      let maxVisibility = 0;
      let current = '';
      const viewHeight = window.innerHeight;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is visible in viewport
          if (rect.bottom > 0 && rect.top < viewHeight) {
             const visibleTop = Math.max(0, rect.top);
             const visibleBottom = Math.min(viewHeight, rect.bottom);
             const visibleHeight = visibleBottom - visibleTop;

             if (visibleHeight > maxVisibility) {
               maxVisibility = visibleHeight;
               current = section;
             }
          }
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Allow time for navigation and mounting
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActiveSection(targetId);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
       navigate('/');
       window.scrollTo(0, 0);
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-lumiere-50/95 backdrop-blur-md py-4 border-lumiere-200 shadow-sm'
            : 'bg-transparent py-4 md:py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="z-50 group cursor-pointer relative"
          >
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-lumiere-900 group-hover:opacity-80 transition-opacity">
              LUMIÈRE
            </h1>
            <span className="block text-[0.5rem] md:text-[0.6rem] tracking-[0.4em] text-lumiere-800 text-center uppercase font-sans mt-1">
              Salon & Spa
            </span>
          </a>

          {/* Desktop Menu (Visible on Large Screens > 1024px) */}
          <div className="hidden lg:flex items-center space-x-12">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-lumiere-900 font-sans text-xs tracking-[0.15em] hover:text-lumiere-400 transition-colors uppercase cursor-pointer py-2`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-lumiere-900 transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </a>
              );
            })}
            <Button variant="primary" onClick={openBooking}>BOOK</Button>
          </div>

          {/* Mobile/Tablet Toggle */}
          <button
            className="lg:hidden text-lumiere-900 z-50 p-2 focus:outline-none hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Compact Side Drawer Menu (Mobile & Tablet) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-visibility duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible delay-500'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed right-0 top-0 h-[100dvh] w-[300px] md:w-[400px] bg-lumiere-50 shadow-2xl flex flex-col pt-24 px-8 md:px-10 transition-transform duration-500 ease-out transform border-l border-lumiere-200 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-5 md:space-y-6 items-start pb-6">
             {/* Drawer Header */}
             <div className="w-full border-b border-lumiere-200 pb-4 mb-2">
                <span className="font-serif text-2xl tracking-widest text-lumiere-900">Menu
                </span>
             </div>

            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-serif text-xl md:text-2xl transition-all cursor-pointer ${isActive ? 'text-lumiere-400 pl-4 border-l-2 border-lumiere-400' : 'text-lumiere-900 hover:text-lumiere-400 hover:pl-2'}`}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="pt-6 w-full">
              <Button variant="primary" onClick={() => { setIsMobileMenuOpen(false); openBooking(); }} className="w-full justify-center flex">
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;