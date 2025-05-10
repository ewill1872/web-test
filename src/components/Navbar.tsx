
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <Link to="/" className="text-lg font-semibold">
            Silverstone UTC | Link Safety
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <a href="#best-practices" className="text-sm font-medium hover:text-primary transition-colors">
            Best Practices
          </a>
          <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
            Examples
          </a>
          <Button variant="outline" size="sm" asChild>
            <Link to="/resources">
              Resources
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
