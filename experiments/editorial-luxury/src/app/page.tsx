'use client';

import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import AccentPicker from '@/components/AccentPicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Theme Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <AccentPicker />
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-luxury-lg">
          <h1 className="text-editorial-hero mb-8">
            Hello, I'm Kah
          </h1>
          
          <div className="h-px bg-gray-300 w-24 mx-auto mb-16"></div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-px h-12 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto -mt-1"></div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="min-h-screen">
        <Navigation />
      </section>
    </div>
  );
}
