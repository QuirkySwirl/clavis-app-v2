import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-border py-8 text-text-tertiary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-text-secondary mb-3 font-heading">Clavis</h3>
            <p className="text-sm">
              Diagnose real business pains, link them to foundational data issues,
              and generate a starter project charter to drive data-driven success.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-secondary mb-3 font-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/glossary" className="hover:text-primary transition-colors">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-secondary mb-3 font-heading">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/tos" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              {/* Add Contact link if/when a contact page is planned */}
              {/* <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li> */}
            </ul>
          </div>
        </div>
        <div className="text-center text-xs border-t border-border/50 pt-8">
          <p>&copy; {currentYear} Clavis. All rights reserved.</p>
          <p className="mt-1">
            Built with insights from 23+ years of data & digital transformation experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
