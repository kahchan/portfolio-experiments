interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  size?: 'default' | 'large';
}

export function PullQuote({ children, attribution, size = 'default' }: PullQuoteProps) {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
      <div className="relative max-w-4xl mx-auto text-center">
        <svg 
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-muted-foreground/20" 
          width="48" 
          height="36" 
          viewBox="0 0 48 36" 
          fill="currentColor"
        >
          <path d="M12 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12s-12-5.373-12-12C0 5.373 5.373 0 12 0zm24 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12z"/>
        </svg>
        <blockquote 
          className={`font-serif italic leading-relaxed ${
            size === 'large' 
              ? 'text-3xl md:text-5xl' 
              : 'text-2xl md:text-3xl'
          }`}
        >
          {children}
        </blockquote>
        {attribution && (
          <footer className="mt-8 text-lg text-muted-foreground font-sans not-italic">
            — {attribution}
          </footer>
        )}
      </div>
    </div>
  );
}