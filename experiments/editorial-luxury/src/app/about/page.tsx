'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import AccentPicker from '@/components/AccentPicker';
import SideNav from '@/components/SideNav';

export default function AboutPage() {
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
        
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-editorial-h1 mb-8 text-base-content">
            About
          </h1>
          <p className="text-oral-history leading-relaxed mb-8" style={{ color: 'var(--base-content-80)' }}>
            I'm a product designer focused on AI and B2B enterprise software. I help teams build products that make complex systems feel human and accessible.
          </p>
        </section>

        {/* Background */}
        <section className="mb-16">
          <h2 className="text-editorial-h2 mb-6 text-base-content">Background</h2>
          <div className="space-y-6 text-oral-history leading-relaxed" style={{ color: 'var(--base-content-80)' }}>
            <p>
              My journey started in academia, spending five years as a Senior Lecturer at Victoria University of Wellington. That experience taught me how to break down complex concepts and communicate them clearly – skills that turned out to be invaluable in product design.
            </p>
            <p>
              From there, I moved into industry with Flick Electric, leading the design of New Zealand's first real-time electricity pricing platform. Working with energy data showed me how powerful design can be when you're translating complex technical systems into something people can understand and act on.
            </p>
            <p>
              At Sailthru, I led product design across multiple teams, working between New Zealand and New York. It was here I really learned about scaling design systems and working with distributed engineering teams. Now, as Director of Product Design at Re-Leased, I'm focused on integrating AI into property management workflows – making sophisticated technology feel natural and helpful.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-editorial-h2 mb-6 text-base-content">Approach</h2>
          <div className="space-y-6 text-oral-history leading-relaxed" style={{ color: 'var(--base-content-80)' }}>
            <p>
              I believe the best design happens when you're working closely with the people who understand the business, the technology, and the users. That means spending time with sales teams, sitting in on customer calls, and understanding what engineering is actually building.
            </p>
          </div>
        </section>


        </div>
      </main>
    </div>
  );
}