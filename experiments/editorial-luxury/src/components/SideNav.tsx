'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Mail } from 'lucide-react';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile/Desktop Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 w-8 h-8 bg-base-200/80 hover:bg-base-300/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors lg:hidden"
        aria-label="Toggle navigation"
      >
        <div className="w-3 h-2.5 flex flex-col justify-between">
          <div className={`h-0.5 bg-base-content transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
          <div className={`h-0.5 bg-base-content transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 bg-base-content transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Navigation */}
      <nav className={`fixed top-0 left-0 h-full bg-base-100/60 backdrop-blur-md border-r border-base-content/10 z-40 transform transition-all duration-300 ${
        isOpen ? 'translate-x-0 w-48' : '-translate-x-full lg:translate-x-0 lg:w-16'
      } lg:hover:w-48 group`}>
        
        <div className="pt-20 pb-6">
          
          {/* Logo/Name - Only shows on hover or mobile open */}
          <div className="px-4 mb-8 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <Link 
              href="/"
              className="text-sm font-medium text-base-content hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kah Chan
            </Link>
            <p className="text-xs mt-1" style={{ color: 'var(--base-content-60)' }}>
              Product Designer
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-2">
            <li className="relative group/item">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 transition-colors ${
                  pathname === '/' 
                    ? 'bg-accent/5' 
                    : 'text-base-content hover:bg-accent/5'
                }`}
                style={{
                  color: pathname === '/' ? 'var(--accent)' : undefined,
                }}
                onMouseEnter={(e) => {
                  if (pathname !== '/') {
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/') {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }
                }}
              >
                <Home size={18} className="min-w-[18px] flex-shrink-0" />
                <span className="ml-3 text-sm lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  Home
                </span>
              </Link>
              
              {/* Tooltip for desktop */}
              <div className="hidden lg:group-hover/item:opacity-0 lg:group/item-hover:opacity-100 lg:opacity-100 lg:group-hover:opacity-0 absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-base-200 text-base-content text-xs rounded whitespace-nowrap z-50 transition-opacity duration-200 pointer-events-none">
                Home
              </div>
            </li>
            
            <li className="relative group/item">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 transition-colors ${
                  pathname === '/about' 
                    ? 'bg-accent/5' 
                    : 'text-base-content hover:bg-accent/5'
                }`}
                style={{
                  color: pathname === '/about' ? 'var(--accent)' : undefined,
                }}
                onMouseEnter={(e) => {
                  if (pathname !== '/about') {
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/about') {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }
                }}
              >
                <User size={18} className="min-w-[18px] flex-shrink-0" />
                <span className="ml-3 text-sm lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  About
                </span>
              </Link>
              
              {/* Tooltip for desktop */}
              <div className="hidden lg:group-hover/item:opacity-0 lg:group/item-hover:opacity-100 lg:opacity-100 lg:group-hover:opacity-0 absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-base-200 text-base-content text-xs rounded whitespace-nowrap z-50 transition-opacity duration-200 pointer-events-none">
                About
              </div>
            </li>
            
            <li className="relative group/item">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 transition-colors ${
                  pathname === '/contact' 
                    ? 'bg-accent/5' 
                    : 'text-base-content hover:bg-accent/5'
                }`}
                style={{
                  color: pathname === '/contact' ? 'var(--accent)' : undefined,
                }}
                onMouseEnter={(e) => {
                  if (pathname !== '/contact') {
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/contact') {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }
                }}
              >
                <Mail size={18} className="min-w-[18px] flex-shrink-0" />
                <span className="ml-3 text-sm lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  Contact
                </span>
              </Link>
              
              {/* Tooltip for desktop */}
              <div className="hidden lg:group-hover/item:opacity-0 lg:group/item-hover:opacity-100 lg:opacity-100 lg:group-hover:opacity-0 absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-base-200 text-base-content text-xs rounded whitespace-nowrap z-50 transition-opacity duration-200 pointer-events-none">
                Contact
              </div>
            </li>
          </ul>

          {/* Footer */}
          <div className="absolute bottom-4 left-4 right-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs" style={{ color: 'var(--base-content-60)' }}>
              © 2025
            </p>
          </div>

        </div>
      </nav>

      {/* Page Content Spacer for Desktop */}
      <div className="hidden lg:block lg:w-16 flex-shrink-0"></div>
    </>
  );
}