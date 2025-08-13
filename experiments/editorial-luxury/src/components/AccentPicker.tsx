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
    if (savedAccent) {
      const accent = accentColors.find(color => color.value === savedAccent) || accentColors[0];
      setCurrentAccent(accent);
      updateAccentColor(accent);
    }
  }, []);

  const updateAccentColor = (accent: typeof accentColors[0]) => {
    document.documentElement.style.setProperty('--accent', accent.value);
    document.documentElement.setAttribute('data-accent', accent.type);
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
        className="w-10 h-10 rounded-full border border-base-300 flex items-center justify-center transition-all hover:scale-105"
        style={{ backgroundColor: currentAccent.value }}
        aria-label="Choose accent color"
      >
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-base-100 border border-base-300 rounded-lg p-3 shadow-lg z-50 animate-fade-in">
          <div className="grid grid-cols-5 gap-2 w-48">
            {accentColors.map((accent) => (
              <button
                key={accent.name}
                onClick={() => handleAccentChange(accent)}
                className="w-8 h-8 rounded-full border border-base-300 hover:scale-110 transition-transform relative"
                style={{ backgroundColor: accent.value }}
                aria-label={`Set accent to ${accent.name}`}
              >
                {currentAccent.value === accent.value && (
                  <div className="absolute inset-0 rounded-full border-2 border-white shadow-sm"></div>
                )}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-base-300">
            <p className="text-xs text-base-content/60 text-center">
              {currentAccent.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}