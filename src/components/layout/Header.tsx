import Link from 'next/link';
import { Clapperboard } from 'lucide-react'; // Example icon, replace with actual logo/icon

const Header = () => {
  return (
    <header className="bg-background/70 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
          {/* <Clapperboard className="h-7 w-7 text-accent-1" /> */}
          {/* Replace with actual Clavis logo or icon, e.g., <i className="bi bi-key-fill text-accent-1"></i> */}
          <span className="font-heading bg-clip-text text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3">
            Clavis
          </span>
           {/* Placeholder for key icon, assuming you'll add Bootstrap or FontAwesome later */}
          <span className="text-accent-1 ml-1">🔑</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#how-it-works" className="text-text-secondary hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="/journey" className="text-text-secondary hover:text-primary transition-colors">
            Start Diagnosis
          </Link>
          <Link href="/explore" className="text-text-secondary hover:text-primary transition-colors">
            Explore DQ
          </Link>
          <Link href="/blog" className="text-text-secondary hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/glossary" className="text-text-secondary hover:text-primary transition-colors">
            Glossary
          </Link>
        </nav>
        {/* Mobile menu button can be added here */}
      </div>
    </header>
  );
};

export default Header;
