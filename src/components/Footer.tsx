
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 lg:mb-0">
            <ShieldCheck className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-semibold">Silverstone UTC | Link Safety</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <h3 className="font-medium text-gray-300 mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><a href="#best-practices" className="text-gray-400 hover:text-white transition-colors">Best Practices</a></li>
                <li><a href="#examples" className="text-gray-400 hover:text-white transition-colors">Link Examples</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-300 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">NCSC Guidance</a></li>
                <li><a href="https://www.getsafeonline.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Get Safe Online</a></li>
                <li><a href="https://utc-silverstone.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Silverstone UTC</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Silverstone UTC. Educational materials for cybersecurity awareness.</p>
          <p className="mt-2">This website is designed to help students identify and avoid malicious links.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
