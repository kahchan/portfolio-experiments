'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  // Hidden AI Agents project - keeping for reference
  // {
  //   slug: 'ai-agents-platform',
  //   title: 'AI Agents Platform',
  //   company: 'Re-Leased',
  //   year: '2025',
  //   summary: 'So what happened was, the property management industry was drowning in repetitive tasks that were eating up our users\' time. We knew AI could help, but the challenge was creating something that felt natural, not intimidating.',
  //   metrics: ['40% reduction in manual tasks', '95% user adoption', '2.3x faster workflows']
  // },
  {
    slug: 'in-platform-ai-agent', 
    title: 'In-Platform AI Agent',
    company: 'Re-Leased',
    year: '2024',
    summary: 'The breakthrough came when we realized users didn\'t want another chatbot – they wanted intelligence woven into their existing workflows. This project changed how we think about AI integration.',
    metrics: ['60% increase in task completion', '85% user satisfaction', '30% reduction in support tickets']
  },
  {
    slug: 'analytics-product',
    title: 'Analytics Product', 
    company: 'Re-Leased',
    year: '2023',
    summary: 'Looking back, this was where we learned that property managers don\'t just want data – they want insights that help them make better decisions for their portfolios. The challenge was making complex analytics feel approachable.',
    metrics: ['150% increase in data engagement', '45% improvement in decision-making speed', '78% of users upgraded to premium']
  },
  {
    slug: 'sms-composer',
    title: 'SMS Composer',
    company: 'Sailthru',
    year: '2021',
    summary: 'SMS was the next frontier for our marketing platform, but it came with unique constraints and opportunities. We needed to build something that respected the intimacy of text messaging while maximizing engagement.',
    metrics: ['400% increase in SMS campaign creation', '85% improvement in delivery rates', '65% higher click-through rates']
  },
  {
    slug: 'push-notification-composer',
    title: 'Push Notification Composer',
    company: 'Sailthru', 
    year: '2020',
    summary: 'The marketers we worked with were brilliant at crafting messages, but the tools were holding them back. We set out to build something that matched their creative process rather than forcing them into rigid templates.',
    metrics: ['300% increase in campaign creation speed', '90% reduction in developer handoffs', '95% user satisfaction']
  },
  {
    slug: 'domestic-electricity-app',
    title: 'Domestic Electricity App',
    company: 'Flick Electric',
    year: '2018',
    summary: 'This was about making electricity pricing transparent for the first time in New Zealand. The technical challenge was huge, but the real challenge was helping people understand and act on pricing data.',
    metrics: ['25% average savings on electricity bills', '80% user retention', '50k+ active users']
  }
];

export default function Navigation() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isWorkExpanded, setIsWorkExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Click outside to close preview */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setSelectedProject(null)}
        />
      )}
      
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24 relative z-40">
        <div className={`grid gap-8 sm:gap-16 transition-all duration-300 ${selectedProject ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          
          {/* Work Section */}
          <section className="mb-16">
            <div 
              onClick={() => {
                setIsWorkExpanded(!isWorkExpanded);
                setSelectedProject(null);
              }}
              className="group cursor-pointer transition-colors touch-manipulation py-2 -mx-2 px-2 rounded"
              style={{ 
                color: 'var(--foreground)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--foreground)';
              }}
            >
              <div className="flex items-center gap-3 text-lg font-sans py-6 text-base-content">
                <span>work</span>
                <span className={`transform transition-transform duration-300 ${isWorkExpanded ? 'rotate-90' : ''}`}>
                  →
                </span>
              </div>
              <div className="h-px w-full" style={{ backgroundColor: 'var(--base-content-60)', opacity: '0.3' }}></div>
            </div>
            
            {isWorkExpanded && (
              <div className="space-y-3 stagger-children">
                {projects.map((project) => (
                <div key={project.slug}>
                  <button
                    onClick={(e) => {
                      // On mobile, navigate directly
                      if (window.innerWidth < 1024) {
                        window.location.href = `/work/${project.slug}`;
                        return;
                      }
                      // On desktop, toggle preview
                      setSelectedProject(selectedProject?.slug === project.slug ? null : project);
                    }}
                    className="flex items-start gap-4 sm:gap-6 group w-full text-left py-3 -mx-2 px-2 rounded touch-manipulation"
                    onMouseEnter={(e) => {
                      const titleElement = e.currentTarget.querySelector('.project-title');
                      if (titleElement) {
                        (titleElement as HTMLElement).style.color = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const titleElement = e.currentTarget.querySelector('.project-title');
                      if (titleElement) {
                        (titleElement as HTMLElement).style.color = 'var(--foreground)';
                      }
                    }}
                  >
                    <div className="text-sm font-mono min-w-[80px] pt-0.5" style={{ color: 'var(--base-content-60)' }}>
                      {project.year}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="project-title text-base-content font-medium transition-colors"
                        style={{ color: 'var(--foreground)' }}
                      >{project.title}</div>
                      <div className="text-sm" style={{ color: 'var(--base-content-70)' }}>{project.company}</div>
                    </div>
                  </button>
                  
                  {/* Subtle divider */}
                  <div className="h-px my-3 w-full" style={{ backgroundColor: 'var(--base-content-60)', opacity: '0.3' }}></div>
                </div>
                ))}
              </div>
            )}

            {/* About & Contact */}
            <div className="space-y-0">
              <Link 
                href="/about"
                className="block cursor-pointer transition-colors touch-manipulation py-2 -mx-2 px-2 rounded"
                style={{ color: 'var(--foreground)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--foreground)';
                }}
              >
                <div className="text-lg font-sans text-base-content py-6">
                  about
                </div>
                <div className="h-px w-full" style={{ backgroundColor: 'var(--base-content-60)', opacity: '0.3' }}></div>
              </Link>
              <Link 
                href="/contact" 
                className="block cursor-pointer transition-colors touch-manipulation py-2 -mx-2 px-2 rounded"
                style={{ color: 'var(--foreground)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--foreground)';
                }}
              >
                <div className="text-lg font-sans text-base-content py-6">
                  contact
                </div>
                <div className="h-px w-full" style={{ backgroundColor: 'var(--base-content-60)', opacity: '0.3' }}></div>
              </Link>
            </div>
          </section>

          {/* Preview Panel */}
          {selectedProject && (
            <section className="mt-6 lg:mt-0 lg:sticky lg:top-24 lg:h-fit">
              <div className="bg-base-200 border border-base-300 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm animate-fade-in">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-editorial-h2 mb-2 text-base-content">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm mb-4" style={{ color: 'var(--base-content-60)' }}>
                      {selectedProject.company}, {selectedProject.year}
                    </p>
                  </div>

                  <p className="text-oral-history" style={{ color: 'var(--base-content-80)' }}>
                    {selectedProject.summary}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-small-caps" style={{ color: 'var(--base-content-60)' }}>KEY IMPACT</h4>
                    <ul className="space-y-2">
                      {selectedProject.metrics.map((metric, index) => (
                        <li key={index} className="text-sm flex items-center gap-2" style={{ color: 'var(--base-content-70)' }}>
                          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/work/${selectedProject.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                    style={{ 
                      color: 'var(--accent)',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-content)';
                      e.currentTarget.style.backgroundColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    View full work
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}