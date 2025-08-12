import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Let's Work Together</h1>
            <p className="text-xl text-muted-foreground">
              Interested in discussing PropTech design opportunities or collaboration?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision for the future of commercial real estate technology.
              </p>

              <div className="space-y-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Mail className="h-5 w-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Best for project inquiries and detailed discussions
                    </p>
                    <Button variant="outline" className="w-full">
                      hello@proptech-designer.com
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Let's connect professionally and stay in touch
                    </p>
                    <Button variant="outline" className="w-full">
                      Connect on LinkedIn
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Calendar className="h-5 w-5" />
                      Schedule a Call
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Book a 30-minute discovery call to discuss your project
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule Discovery Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">What I Can Help With</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">PropTech Product Design</h3>
                    <p className="text-sm text-muted-foreground">
                      End-to-end design for property management platforms, tenant experience apps, and portfolio analytics tools.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">AI Integration Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Design strategy for integrating AI capabilities into existing real estate workflows without disrupting operations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Design System Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Scalable design systems tailored for complex B2B real estate applications and multi-product platforms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">UX Consulting</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic guidance on user experience optimization, workflow analysis, and digital transformation initiatives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Currently accepting new projects for Q2 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}