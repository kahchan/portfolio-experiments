import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { PullQuote } from "@/components/pull-quote";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            PropTech Design for Commercial Real Estate
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming complex property management workflows into intuitive experiences that maximize tenant satisfaction and portfolio performance
          </p>
        </div>
      </section>

      {/* Hero Project */}
      <section className="container mx-auto px-4 mb-24">
        {featuredProjects.length > 0 && (
          <Link href={`/work/${featuredProjects[0].id}`} className="group block">
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-500">
                  <Image
                    src={featuredProjects[0].hero_image}
                    alt={featuredProjects[0].title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-muted-foreground transition-colors">
                  {featuredProjects[0].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredProjects[0].description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Read case study</span>
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Pull Quote */}
      <section className="container mx-auto px-4">
        <PullQuote size="large" attribution="Senior Property Manager">
          "It actually knows our building - tenants love it"
        </PullQuote>
      </section>

      {/* Other Projects Grid */}
      <section className="container mx-auto px-4 mb-24">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">More Work</h2>
          <div className="w-24 h-px bg-border mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredProjects.slice(1).map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="group">
              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm group-hover:shadow-md transition-all duration-500">
                  <Image
                    src={project.hero_image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                      {project.tags[0] || 'Case Study'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
