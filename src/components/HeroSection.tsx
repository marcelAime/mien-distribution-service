import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-banner.jpg';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mien Distribution et Service - Solutions d'impression professionnelles" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-brand-orange/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-orange/20 rounded-full blur-xl float-element"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl float-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg float-element" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Logo cliquable avec nom */}
            <div className="hero-fade-in mb-6">
              <Link to="/" className="inline-flex items-center gap-4 group">
                <img 
                  src={logo} 
                  alt="Mien Distribution et Service" 
                  className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <span className="block text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    Mien Distribution
                  </span>
                  <span className="block text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    et Service
                  </span>
                </div>
              </Link>
            </div>

            <div className="hero-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Des consommables pour l'impression qui donnent
                <span className="block text-transparent bg-gradient-to-r from-accent to-accent-foreground bg-clip-text">
                  vie à vos idées
                </span>
              </h1>
            </div>

            <div className="hero-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Ventes d'équipements, de pièces détachées pour machine d'art graphique à Koumassi et partout en Côte d'Ivoire.
              </p>
            </div>

            <div className="hero-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg" 
                  className="btn-gradient text-lg px-8 py-4 group"
                  asChild
                >
                  <Link to="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-4 group"
                  onClick={() => window.open('https://wa.me/2250504908469?text=Bonjour, je souhaite en savoir plus sur vos services d\'impression.', '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="hero-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/80">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Réactivité</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Prix compétitifs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Service professionnel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="hero-zoom" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Pourquoi nous choisir ?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Excellente garantie</h4>
                    <p className="text-white/80">Service de qualité avec des produits certifiés</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Proximité & Réactivité</h4>
                    <p className="text-white/80">Intervention rapide dans toute la Côte d'Ivoire et la sous-région</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Prix transparents</h4>
                    <p className="text-white/80">Devis gratuits et tarifs compétitifs sans surprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;