'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
    
    // Trigger accent color update after theme is set
    setTimeout(() => {
      const savedAccent = localStorage.getItem('accent-color');
      if (savedAccent) {
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
        
        const accent = accentColors.find(color => color.value === savedAccent);
        if (accent) {
          // Re-apply accent color
          document.documentElement.style.setProperty('--accent', accent.value);
          
          const isDark = initialTheme === 'dark';
          if (isDark) {
            document.documentElement.style.setProperty('--accent-content', '#0f172a');
          } else {
            document.documentElement.style.setProperty('--accent-content', '#ffffff');
          }
        }
      }
    }, 100);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Trigger adaptive gray update
    const savedAccent = localStorage.getItem('accent-color');
    if (savedAccent) {
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
      
      const accent = accentColors.find(color => color.value === savedAccent);
      if (accent) {
        // Update adaptive grays for new theme
        setTimeout(() => {
          const isDark = newTheme === 'dark';
          
          // Update accent-content based on theme
          if (isDark) {
            document.documentElement.style.setProperty('--accent-content', '#0f172a');
          } else {
            document.documentElement.style.setProperty('--accent-content', '#ffffff');
          }
          
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
        }, 100);
      }
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}