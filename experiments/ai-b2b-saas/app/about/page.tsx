import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-8">About</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-6">
                  I specialize in designing AI-powered experiences for commercial real estate and property management platforms.
                </p>
                
                <p className="mb-6">
                  Over the past 5 years, I've worked with PropTech companies to transform complex property management workflows into intuitive digital experiences. My focus is on creating systems that enhance tenant satisfaction while optimizing operational efficiency for property managers and portfolio owners.
                </p>

                <p className="mb-6">
                  I believe the best PropTech design happens at the intersection of real estate domain expertise and emerging AI capabilities. My approach combines strategic thinking with hands-on design execution, always keeping the end-user experience at the center.
                </p>

                <h2 className="text-2xl font-serif font-bold mt-12 mb-6">Expertise</h2>
                <ul className="space-y-2 mb-8">
                  <li>• AI-powered tenant experience design</li>
                  <li>• Lease management system optimization</li>
                  <li>• Portfolio analytics and business intelligence</li>
                  <li>• Property management workflow automation</li>
                  <li>• Cross-functional collaboration (Sales, Product, Engineering)</li>
                </ul>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-4">Key Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Design</h4>
                      <p className="text-sm text-muted-foreground">UX Strategy, Information Architecture, Interaction Design, Design Systems</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Domain</h4>
                      <p className="text-sm text-muted-foreground">Commercial Real Estate, Property Management, AI/ML Integration</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Collaboration</h4>
                      <p className="text-sm text-muted-foreground">Cross-functional Leadership, Stakeholder Management, Design Facilitation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-4">Recognition</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">PropTech Design Awards</p>
                      <p className="text-muted-foreground">Best Tenant Experience Platform 2024</p>
                    </div>
                    <div>
                      <p className="font-semibold">Industry Speaking</p>
                      <p className="text-muted-foreground">ULI Spring Meeting, PropTech NYC</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}