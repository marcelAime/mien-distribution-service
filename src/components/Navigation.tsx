import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Mien Distribution et Service" 
              className="h-12 md:h-14 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                2521002120 / 2521002119
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                commercialgdt7@gmail.com
              </div>
            </div>
            <Button 
              variant="default" 
              className="btn-gradient"
              asChild
            >
              <Link to="/contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-accent bg-accent/10 rounded-lg'
                      : 'text-foreground hover:text-accent hover:bg-accent/5 rounded-lg'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="default" 
                  className="btn-gradient w-full"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Demander un devis gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;