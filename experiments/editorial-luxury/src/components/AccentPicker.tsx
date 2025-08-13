'use client';

import { useState, useEffect } from 'react';

const accentColors = [
  { name: 'Blue', value: '#3b82f6', type: 'cool' },
  { name: 'Indigo', value: '#6366f1', type: 'cool' },
  { name: 'Purple', value: '#8b5cf6', type: 'cool' },
  { name: 'Pink', value: '#ec4899', type: 'warm' },
  { name: 'Rose', value: '#f43f5e', type: 'warm' },
  { name: 'Orange', value: '#f97316', type: 'warm' },
  { name: 'Amber', value: '#f59e0b', type: 'warm' },
  { name: 'Green', value: '#10b981', type: 'cool' },
  { name: 'Emerald', value: '#059669', type: 'cool' },
  { name: 'Teal', value: '#14b8a6', type: 'cool' },
];

export default function AccentPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState(accentColors[0]);

  useEffect(() => {
    const savedAccent = localStorage.getItem('accent-color');
    const accent = savedAccent 
      ? accentColors.find(color => color.value === savedAccent) || accentColors[0]
      : accentColors[0];
    
    setCurrentAccent(accent);
    updateAccentColor(accent);
  }, []);

  const updateAccentColor = (accent: typeof accentColors[0]) => {
    document.documentElement.style.setProperty('--accent', accent.value);
    document.documentElement.setAttribute('data-accent', accent.type);
    
    // Check current theme
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    // Update accent-content based on theme
    if (isDark) {
      document.documentElement.style.setProperty('--accent-content', '#0f172a');
    } else {
      document.documentElement.style.setProperty('--accent-content', '#ffffff');
    }
    
    // Update adaptive grays based on accent type and theme
    if (accent.type === 'warm') {
      // Warm accents get cooler grays
      if (isDark) {
        document.documentElement.style.setProperty('--base-content-50', '#1c1917');
        document.documentElement.style.setProperty('--base-content-60', '#94a3b8');
        document.documentElement.style.setProperty('--base-content-70', '#cbd5e1');
        document.documentElement.style.setProperty('--base-content-80', '#e2e8f0');
      } else {
        document.documentElement.style.setProperty('--base-content-50', '#f8fafc');
        document.documentElement.style.setProperty('--base-content-60', '#94a3b8');
        document.documentElement.style.setProperty('--base-content-70', '#64748b');
        document.documentElement.style.setProperty('--base-content-80', '#475569');
      }
    } else {
      // Cool accents get warmer grays  
      if (isDark) {
        document.documentElement.style.setProperty('--base-content-50', '#1c1917');
        document.documentElement.style.setProperty('--base-content-60', '#94a3b8');
        document.documentElement.style.setProperty('--base-content-70', '#cbd5e1');
        document.documentElement.style.setProperty('--base-content-80', '#e2e8f0');
      } else {
        document.documentElement.style.setProperty('--base-content-50', '#fafaf9');
        document.documentElement.style.setProperty('--base-content-60', '#a8a29e');
        document.documentElement.style.setProperty('--base-content-70', '#78716c');
        document.documentElement.style.setProperty('--base-content-80', '#57534e');
      }
    }
    
    localStorage.setItem('accent-color', accent.value);
  };

  const handleAccentChange = (accent: typeof accentColors[0]) => {
    setCurrentAccent(accent);
    updateAccentColor(accent);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
        style={{ backgroundColor: currentAccent.value }}
        aria-label="Choose accent color"
      >
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </button>

      {isOpen && (
        <>
          {/* Invisible backdrop for click-outside */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal with blurred background */}
          <div className="absolute top-12 right-0 bg-base-100/80 backdrop-blur-md rounded-lg p-4 shadow-lg z-50 animate-fade-in">
            <div className="grid grid-cols-5 gap-2 w-48">
              {accentColors.map((accent) => (
                <button
                  key={accent.name}
                  onClick={() => handleAccentChange(accent)}
                  className="w-8 h-8 rounded-full hover:scale-110 transition-transform relative"
                  style={{ backgroundColor: accent.value }}
                  aria-label={`Set accent to ${accent.name}`}
                >
                  {currentAccent.value === accent.value && (
                    <div className="absolute inset-0 rounded-full border-2 border-white shadow-sm"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-base-content/10">
              <p className="text-xs text-base-content/60 text-center">
                {currentAccent.name}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}