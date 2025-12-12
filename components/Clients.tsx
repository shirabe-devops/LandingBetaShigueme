import React, { useState, useEffect, useCallback } from 'react';
import { IconChevronLeft, IconChevronRight } from './Icons';

// Logos de empresas reais para demonstração (imagens hospedadas no Wikimedia Commons)
const clients = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
];

export const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(2); // xs/sm
      } else if (width < 1024) {
        setItemsPerPage(3); // md
      } else if (width < 1280) {
        setItemsPerPage(4); // lg
      } else {
        setItemsPerPage(5); // xl
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max index to prevent empty white space at the end
  const maxIndex = Math.max(0, clients.length - itemsPerPage);

  // Ensure currentIndex is valid when itemsPerPage changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    // Ensure index is valid
    const validIndex = Math.min(index, maxIndex);
    setCurrentIndex(validIndex);
  };

  // Auto-play
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Empresas que confiam na nossa expertise
        </p>
        
        <div 
          className="relative group px-4 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-slate-400 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none hidden md:block border border-slate-100"
            aria-label="Anterior"
          >
            <IconChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-slate-400 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none hidden md:block border border-slate-100"
            aria-label="Próximo"
          >
            <IconChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Window */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] will-change-transform"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4 flex justify-center items-center"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="w-full flex justify-center group/logo cursor-pointer py-4">
                    <img 
                      src={client.logo} 
                      alt={`Logo ${client.name}`} 
                      className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale transition-all duration-500 ease-out transform group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110 group-hover/logo:drop-shadow-sm" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {/* Dots adjusted to maxIndex + 1 to account for sliding windows */}
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  currentIndex === idx 
                    ? 'w-6 bg-blue-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};