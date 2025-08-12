import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <section className="container mx-auto px-6 py-12">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-4">Selected Work</h1>
          <p className="text-xl text-muted-foreground">
            PropTech design projects focused on commercial real estate and property management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.hero_image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="font-serif font-bold text-2xl mb-3">{project.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>
                  <p className="text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="mt-6 text-sm text-muted-foreground">
                    {project.year}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}