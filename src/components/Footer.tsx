import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-blue to-brand-blue-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src={logo} 
                  alt="Mien Distribution et Service" 
                  className="h-16 w-auto brightness-0 invert hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-white/90 mb-6 leading-relaxed">
                Votre partenaire de confiance pour tous vos besoins d'impression, maintenance et 
                vente de consommables. Nous offrons des solutions professionnelles adaptées à 
                vos exigences.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/2250504908469" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:bg-[#25D366]/80 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <a 
                      href="tel:+2252521002120" 
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      2521002120 / 2521002119
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <a 
                      href="mailto:commercialgdt7@gmail.com" 
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      commercialgdt7@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-accent mt-1" />
                  <div>
                    <address className="text-white/90 not-italic">
                      Koumassi Inshalla<br />
                      En face de la pharmacie Prodomo<br />
                      Abidjan, Côte d'Ivoire
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Mien Distribution et Service. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;