import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            View All Work
          </Link>
        </Button>
      </div>
    </div>
  );
}