'use client';

import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import AccentPicker from '@/components/AccentPicker';

export default function Home() {
  const scrollToWork = () => {
    document.getElementById('work-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Theme Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 sm:top-6 sm:right-6 sm:gap-3">
        <AccentPicker />
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-luxury-lg">
          <h1 className="text-editorial-hero mb-6 sm:mb-8">
            Hello, I'm Kah
          </h1>
          
          <div className="h-px bg-base-content/20 w-16 sm:w-24 mx-auto mb-12 sm:mb-16"></div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToWork}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hover:opacity-60 transition-opacity touch-manipulation"
            aria-label="Scroll to work section"
          >
            <div className="flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
              <div className="text-base-content/60 text-sm font-mono">↓</div>
              <div className="text-base-content/60 text-xs">scroll</div>
            </div>
          </button>
        </div>
      </section>

      {/* Navigation Section */}
      <section id="work-section" className="min-h-screen">
        <Navigation />
      </section>
    </div>
  );
}
