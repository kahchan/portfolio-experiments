import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-serif font-semibold hover:opacity-80 transition-opacity">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/work" className="text-sm hover:underline hidden sm:block">
              Work
            </Link>
            <Link href="/about" className="text-sm hover:underline hidden sm:block">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline hidden sm:block">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}