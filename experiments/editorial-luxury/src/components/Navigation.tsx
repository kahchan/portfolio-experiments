'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    slug: 'ai-agents-platform',
    title: 'AI Agents Platform',
    company: 'Re-Leased',
    year: '2025',
    summary: 'So what happened was, the property management industry was drowning in repetitive tasks that were eating up our users\' time. We knew AI could help, but the challenge was creating something that felt natural, not intimidating.',
    metrics: ['40% reduction in manual tasks', '95% user adoption', '2.3x faster workflows']
  },
  {
    slug: 'in-platform-ai-agent',
    title: 'In-Platform AI Agent',
    company: 'Re-Leased',
    year: '2024',
    summary: 'The breakthrough came when we realized users didn\'t want another chatbot—they wanted intelligence woven into their existing workflows. This project changed how we think about AI integration.',
    metrics: ['60% increase in task completion', '85% user satisfaction', '30% reduction in support tickets']
  },
  {
    slug: 'analytics-product',
    title: 'Analytics Product',
    company: 'Re-Leased',
    year: '2023',
    summary: 'Looking back, this was where we learned that property managers don\'t just want data—they want insights that help them make better decisions for their portfolios. The challenge was making complex analytics feel approachable.',
    metrics: ['150% increase in data engagement', '45% improvement in decision-making speed', '78% of users upgraded to premium']
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
  const [isWorkExpanded, setIsWorkExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Navigation Column */}
          <div className="space-y-8">
            {/* Work Section */}
            <div>
              <button
                onClick={() => {
                  setIsWorkExpanded(!isWorkExpanded);
                  setSelectedProject(null);
                }}
                className="group flex items-center gap-3 text-small-caps text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span>WORK</span>
                <span className={`transform transition-transform duration-300 ${isWorkExpanded ? 'rotate-90' : ''}`}>
                  →
                </span>
              </button>
              
              <div className="h-px bg-gray-300 mt-2 mb-6"></div>
              
              {isWorkExpanded && (
                <div className="space-y-4 stagger-children">
                  {projects.map((project, index) => (
                    <button
                      key={project.slug}
                      onClick={() => setSelectedProject(project)}
                      className="group block text-left w-full p-4 -mx-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {project.company}, {project.year}
                          </p>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
                          →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About Section */}
            <div>
              <Link 
                href="/about"
                className="text-small-caps text-gray-600 hover:text-gray-900 transition-colors"
              >
                ABOUT
              </Link>
              <div className="h-px bg-gray-300 mt-2"></div>
            </div>

            {/* Contact Section */}
            <div>
              <Link 
                href="/contact"
                className="text-small-caps text-gray-600 hover:text-gray-900 transition-colors"
              >
                CONTACT
              </Link>
              <div className="h-px bg-gray-300 mt-2"></div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {selectedProject && (
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm animate-fade-in">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-editorial-h2 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      {selectedProject.company}, {selectedProject.year}
                    </p>
                  </div>

                  <p className="text-oral-history text-gray-700">
                    {selectedProject.summary}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-small-caps text-gray-600">KEY IMPACT</h4>
                    <ul className="space-y-2">
                      {selectedProject.metrics.map((metric, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/work/${selectedProject.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-content hover:bg-accent px-4 py-2 rounded-lg transition-all"
                  >
                    View full work
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}