import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="h-6 w-24 bg-muted rounded animate-pulse" />
        </div>
      </nav>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-16 bg-muted rounded animate-pulse" />
              <div className="h-6 w-20 bg-muted rounded animate-pulse" />
              <div className="h-6 w-18 bg-muted rounded animate-pulse" />
            </div>
            <div className="h-12 w-3/4 bg-muted rounded animate-pulse mb-4" />
            <div className="h-6 w-full bg-muted rounded animate-pulse mb-6" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-muted rounded animate-pulse" />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4">
            <div className="aspect-[4/3] bg-muted rounded-lg animate-pulse" />
          </div>
        </div>

        <section className="mb-20">
          <div className="h-8 w-48 bg-muted rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <div className="aspect-[4/3] bg-muted rounded-t-lg animate-pulse" />
                <CardHeader>
                  <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-4/6 bg-muted rounded animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}