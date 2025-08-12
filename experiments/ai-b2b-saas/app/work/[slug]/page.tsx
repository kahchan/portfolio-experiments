import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectById } from '@/lib/projects';
import { PullQuote } from '@/components/pull-quote';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {project.tags[0] || 'Case Study'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {project.subtitle}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground/90">
              {project.description}
            </p>
          </div>
          
          <div className="col-span-12 lg:col-span-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={project.hero_image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Artifacts Showcase */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif font-bold mb-8">Key Artifacts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.artifacts.map((artifact) => (
              <div key={artifact.id} className="group overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={artifact.image}
                    alt={artifact.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-white/80 uppercase tracking-wider">
                      {artifact.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-lg mb-3">{artifact.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {artifact.description}
                  </p>
                  {artifact.context && (
                    <div className="p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground">
                      <strong className="text-foreground">Context:</strong> {artifact.context}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decision Journal */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif font-bold mb-8">Key Decisions</h2>
          <div className="space-y-12">
            {project.decisions.map((decision, index) => (
              <div key={decision.id} className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8">
                  <div className="h-full bg-card rounded-2xl shadow-sm p-6">
                    <div className="flex items-start justify-between mb-5">
                      <h3 className="font-serif font-semibold text-xl pr-4">
                        {decision.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-muted/60 rounded-md text-muted-foreground shrink-0">
                        #{index + 1}
                      </span>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          Context
                        </h4>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed">{decision.context}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          The Debate
                        </h4>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed">{decision.debate}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          Our Decision
                        </h4>
                        <p className="text-sm font-medium leading-relaxed">{decision.decision}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          Outcome
                        </h4>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed">{decision.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {decision.quote && (
                  <div className="col-span-12 lg:col-span-4 flex items-center">
                    <PullQuote attribution="Project Stakeholder">
                      {decision.quote}
                    </PullQuote>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GTM Collaboration */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Cross-Functional Impact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {project.collaboration.map((collab) => (
              <div key={collab.id} className="bg-card rounded-2xl shadow-sm p-6">
                <div className="mb-5">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {collab.department.replace('_', ' ')}
                  </span>
                  <h3 className="font-serif font-semibold text-lg mt-2">
                    {collab.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground/90">{collab.description}</p>
                  
                  <div className="p-4 bg-green-50/50 dark:bg-green-900/10 rounded-xl text-sm">
                    <strong className="text-green-800 dark:text-green-200">Impact:</strong>
                    <span className="text-green-700 dark:text-green-300 ml-2">
                      {collab.impact}
                    </span>
                  </div>
                  
                  {collab.quote && (
                    <div className="bg-muted/20 rounded-xl p-4 text-center">
                      <blockquote className="text-sm italic font-serif">
                        "{collab.quote}"
                      </blockquote>
                      {collab.person && (
                        <footer className="text-xs not-italic mt-3 text-muted-foreground font-sans">
                          — {collab.person}
                        </footer>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to other projects */}
        <section className="pt-12">
          <div className="text-center">
            <div className="w-24 h-px bg-border/30 mx-auto mb-6"></div>
            <div className="flex justify-between items-center max-w-sm mx-auto">
              <Link href="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                ← View all work
              </Link>
              <div className="text-sm text-muted-foreground">
                {project.year}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}