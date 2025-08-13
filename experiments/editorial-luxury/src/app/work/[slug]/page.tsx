import Link from 'next/link';
import { notFound } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import AccentPicker from '@/components/AccentPicker';
import SideNav from '@/components/SideNav';

const projects = [
  // Hidden AI Agents project - keeping for reference
  // {
  //   slug: 'ai-agents-platform',
  //   title: 'AI Agents Platform',
  //   company: 'Re-Leased',
  //   year: '2025',
  //   summary: 'So what happened was, the property management industry was drowning in repetitive tasks that were eating up our users\' time. We knew AI could help, but the challenge was creating something that felt natural, not intimidating.',
  //   challenge: 'Property managers were spending 60% of their time on manual, repetitive tasks – tenant communications, maintenance scheduling, lease renewals. The existing tools were disconnected, forcing them to context-switch constantly between different platforms just to complete basic workflows.',
  //   approach: 'Rather than building another standalone AI tool, we embedded intelligent agents directly into existing workflows. We conducted 40+ user interviews to understand the specific pain points and designed agents that could handle routine tasks while keeping humans in control of critical decisions.',
  //   solution: 'We created specialized AI agents for different property management functions: a Communication Agent that drafts tenant emails, a Scheduling Agent that coordinates maintenance, and a Compliance Agent that tracks lease requirements. Each agent learns from user preferences and improves over time.',
  //   impact: ['40% reduction in manual tasks', '95% user adoption rate', '2.3x faster workflow completion', '$2M ARR within 6 months'],
  //   nextProject: 'in-platform-ai-agent'
  // },
  {
    slug: 'in-platform-ai-agent', 
    title: 'In-Platform AI Agent',
    company: 'Re-Leased',
    year: '2024',
    summary: 'The breakthrough came when we realized users didn\'t want another chatbot – they wanted intelligence woven into their existing workflows. This project changed how we think about AI integration.',
    challenge: 'Users were overwhelmed by the complexity of property management software. They needed help navigating features, understanding data, and making decisions, but existing help systems were static and unhelpful.',
    approach: 'We embedded an AI assistant directly into the platform interface, using contextual awareness to provide relevant help exactly when needed. The agent could understand what the user was looking at and offer specific, actionable guidance.',
    solution: 'The AI agent appears as a subtle interface element that activates based on user behavior – struggling with a feature, viewing complex data, or encountering errors. It provides contextual explanations, suggests next steps, and can even perform actions on behalf of the user.',
    impact: ['60% increase in feature adoption', '85% user satisfaction score', '30% reduction in support tickets', '45% faster onboarding time'],
    nextProject: 'analytics-product'
  },
  {
    slug: 'analytics-product',
    title: 'Analytics Product', 
    company: 'Re-Leased',
    year: '2023',
    summary: 'Looking back, this was where we learned that property managers don\'t just want data – they want insights that help them make better decisions for their portfolios.',
    challenge: 'Property managers had access to tons of data but struggled to extract actionable insights. Reports were static, hard to interpret, and didn\'t connect to business outcomes. Most users avoided the analytics section entirely.',
    approach: 'We shifted from showing raw data to surfacing insights that directly impact business decisions. We identified the key questions property managers ask and designed visualizations that answer those questions clearly.',
    solution: 'We built an insights-first analytics platform that highlights trends, anomalies, and opportunities automatically. Instead of charts and tables, users see "Your vacancy rate is 15% higher than similar properties" with recommended actions.',
    impact: ['150% increase in analytics engagement', '45% improvement in decision-making speed', '78% of users upgraded to premium tier', '25% increase in portfolio performance'],
    nextProject: 'sms-composer'
  },
  {
    slug: 'sms-composer',
    title: 'SMS Composer',
    company: 'Sailthru',
    year: '2021',
    summary: 'SMS was the next frontier for our marketing platform, but it came with unique constraints and opportunities. We needed to build something that respected the intimacy of text messaging while maximizing engagement.',
    challenge: 'SMS marketing had strict character limits, different delivery patterns, and higher user expectations for relevance. Marketers needed tools that could handle SMS-specific requirements like carrier compliance, opt-in management, and message timing.',
    approach: 'We researched SMS best practices, studied successful SMS campaigns, and interviewed marketers about their SMS workflow needs. The key insight was that SMS required a completely different mindset from email – more personal, more timely, more direct.',
    solution: 'Built a dedicated SMS composer with real-time character counting, carrier-specific preview modes, and intelligent scheduling based on user time zones. Included compliance checks, A/B testing for short-form content, and integration with customer journey mapping.',
    impact: ['400% increase in SMS campaign creation', '85% improvement in delivery rates', '65% higher click-through rates', '92% marketer satisfaction score'],
    nextProject: 'push-notification-composer'
  },
  {
    slug: 'push-notification-composer',
    title: 'Push Notification Composer',
    company: 'Sailthru', 
    year: '2020',
    summary: 'The marketers we worked with were brilliant at crafting messages, but the tools were holding them back. We set out to build something that matched their creative process.',
    challenge: 'Email marketers needed to create push notifications but were forced to use developer-centric tools with rigid templates. The process was slow, required technical handoffs, and stifled creativity.',
    approach: 'We studied how marketers actually work – their creative process, collaboration patterns, and quality standards. We designed a visual composer that felt familiar to email designers but was purpose-built for push notifications.',
    solution: 'A drag-and-drop composer with live preview, dynamic content blocks, and A/B testing capabilities. Marketers could create rich, personalized push campaigns without developer involvement while maintaining brand consistency.',
    impact: ['300% increase in campaign creation speed', '90% reduction in developer handoffs', '95% user satisfaction score', '150% increase in push engagement rates'],
    nextProject: 'domestic-electricity-app'
  },
  {
    slug: 'domestic-electricity-app',
    title: 'Domestic Electricity App',
    company: 'Flick Electric',
    year: '2018',
    summary: 'This was about making electricity pricing transparent for the first time in New Zealand. The technical challenge was huge, but the real challenge was helping people understand and act on pricing data.',
    challenge: 'New Zealand consumers had no visibility into real-time electricity pricing. They paid fixed rates regardless of actual market conditions, missing opportunities to save money by shifting usage to cheaper times.',
    approach: 'We needed to make complex wholesale electricity data accessible to everyday consumers. This meant not just showing prices, but helping people understand what the data meant for their daily routines.',
    solution: 'A mobile app that shows real-time electricity prices with clear visual indicators and smart notifications. Users can see when power is cheap, expensive, or about to change, with specific recommendations for their household.',
    impact: ['25% average savings on electricity bills', '80% user retention after 6 months', '50,000+ active users', 'Sparked industry-wide adoption of dynamic pricing'],
    nextProject: null
  }
];

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const nextProject = project.nextProject ? projects.find(p => p.slug === project.nextProject) : null;
  const previousProject = projects.find(p => p.nextProject === project.slug);

  return (
    <div className="min-h-screen bg-base-100">
      <SideNav />
      <main className="lg:ml-16">
        {/* Theme Controls */}
        <div className="fixed top-4 right-4 z-50 flex gap-2 sm:top-6 sm:right-6 sm:gap-3 lg:right-12">
          <AccentPicker />
          <ThemeToggle />
        </div>

        {/* Header */}
        <header className="border-b border-base-content/10 pt-16 sm:pt-4">
          <div className="max-w-4xl mx-auto pl-16 pr-20 py-4 sm:px-6 sm:py-6 flex items-center justify-between lg:px-12 lg:pr-12">
            <div className="flex justify-start min-w-0">
              {previousProject ? (
                <Link 
                  href={`/work/${previousProject.slug}`}
                  className="text-base-content/60 hover:text-base-content transition-colors touch-manipulation py-2 px-2 rounded text-sm sm:text-base"
                >
                  ← Back
                </Link>
              ) : (
                <Link 
                  href="/"
                  className="text-base-content/60 hover:text-base-content transition-colors touch-manipulation py-2 px-2 rounded text-sm sm:text-base"
                >
                  ← All Work
                </Link>
              )}
            </div>
            <div className="text-center flex-1 mx-4">
              <h1 className="text-base-content font-medium text-sm sm:text-base">{project.title}</h1>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--base-content-60)' }}>
                {project.company}, {project.year}
              </p>
            </div>
            <div className="flex justify-end min-w-0">
              {nextProject ? (
                <Link 
                  href={`/work/${nextProject.slug}`}
                  className="text-base-content/60 hover:text-base-content transition-colors touch-manipulation py-2 px-2 rounded text-sm sm:text-base"
                >
                  Next →
                </Link>
              ) : (
                <div className="py-2 px-2 text-sm sm:text-base opacity-0">
                  Next →
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
          
          {/* Hero */}
          <section className="mb-16">
            <h1 className="text-editorial-h1 mb-4 text-base-content">
              {project.title}
            </h1>
            <p className="text-oral-history mb-8" style={{ color: 'var(--base-content-80)' }}>
              {project.summary}
            </p>
            
            {/* Impact metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {project.impact.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-base-200 rounded-lg">
                  <div className="text-sm font-mono" style={{ color: 'var(--base-content-70)' }}>
                    {metric}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenge */}
          <section className="mb-16">
            <h2 className="text-editorial-h2 mb-6 text-base-content">Challenge</h2>
            <p className="text-oral-history leading-relaxed" style={{ color: 'var(--base-content-80)' }}>
              {project.challenge}
            </p>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="text-editorial-h2 mb-6 text-base-content">Approach</h2>
            <p className="text-oral-history leading-relaxed" style={{ color: 'var(--base-content-80)' }}>
              {project.approach}
            </p>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-editorial-h2 mb-6 text-base-content">Solution</h2>
            <p className="text-oral-history leading-relaxed" style={{ color: 'var(--base-content-80)' }}>
              {project.solution}
            </p>
          </section>

          {/* Navigation */}
          <nav className="border-t border-base-content/10 pt-8 flex justify-between items-center">
            <Link 
              href="/"
              className="text-base-content hover:text-accent transition-colors"
            >
              ← All Work
            </Link>
            {nextProject && (
              <Link 
                href={`/work/${nextProject.slug}`}
                className="text-base-content hover:text-accent transition-colors text-right"
              >
                {nextProject.title} →
              </Link>
            )}
          </nav>

        </div>
      </main>
    </div>
  );
}