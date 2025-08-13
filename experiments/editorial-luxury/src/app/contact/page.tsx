'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import AccentPicker from '@/components/AccentPicker';
import SideNav from '@/components/SideNav';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <SideNav />
      <main className="lg:ml-16">
        {/* Theme Controls */}
        <div className="fixed top-4 right-4 z-50 flex gap-2 sm:top-6 sm:right-6 sm:gap-3 lg:right-12">
          <AccentPicker />
          <ThemeToggle />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Hero */}
          <section className="mb-16">
            <h1 className="text-editorial-h1 mb-8 text-base-content">
              Contact
            </h1>
            <p className="text-oral-history leading-relaxed" style={{ color: 'var(--base-content-80)' }}>
              Always happy to chat about design, AI, or interesting product problems.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="mb-16">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-small-caps mb-4" style={{ color: 'var(--base-content-60)' }}>EMAIL</h2>
                <a 
                  href="mailto:hello@kahchan.com"
                  className="text-editorial-h2 text-base-content hover:text-accent transition-colors"
                >
                  hello@kahchan.com
                </a>
              </div>

              <div className="h-px bg-base-content/10 w-24 mx-auto"></div>

              <div>
                <h2 className="text-small-caps mb-4" style={{ color: 'var(--base-content-60)' }}>LINKEDIN</h2>
                <a 
                  href="https://www.linkedin.com/in/kahchan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-editorial-h2 text-base-content hover:text-accent transition-colors"
                >
                  linkedin.com/in/kahchan
                </a>
              </div>

            </div>
          </section>

        </div>

        </div>
      </main>
    </div>
  );
}