import React from 'react';
import { CheckCircle, Target, Heart, Shield } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À propos de Mien Distribution & Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous vos besoins d'impression et de maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <img 
                src={aboutImage} 
                alt="Équipe Mien Distribution et Service" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Notre Mission
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Chez Mien Distribution et Service, nous croyons que chaque entreprise mérite des solutions 
                  d'impression fiables, rapides et économiques. Notre mission est simple : accompagner nos 
                  clients avec professionnalisme et proximité, en leur offrant des services adaptés à leurs 
                  besoins quotidiens.
                </p>
                <p>
                  Nos valeurs reposent sur la fiabilité, la réactivité et la proximité. Nous mettons un point 
                  d'honneur à bâtir une relation de confiance durable avec chacun de nos clients, qu'ils 
                  soient particuliers ou entreprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center card-hover bg-card p-8 rounded-xl shadow-lg fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Fiabilité</h3>
              <p className="text-muted-foreground">
                Des services de qualité constante avec des équipements et techniciens certifiés
              </p>
            </div>

            <div className="text-center card-hover bg-card p-8 rounded-xl shadow-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Réactivité</h3>
              <p className="text-muted-foreground">
                Intervention rapide et solutions immédiates pour minimiser vos temps d'arrêt
              </p>
            </div>

            <div className="text-center card-hover bg-card p-8 rounded-xl shadow-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Proximité</h3>
              <p className="text-muted-foreground">
                Une relation humaine et personnalisée avec chacun de nos clients
              </p>
            </div>

            <div className="text-center card-hover bg-card p-8 rounded-xl shadow-lg fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Excellence</h3>
              <p className="text-muted-foreground">
                Un engagement constant vers l'amélioration et l'innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-blue to-brand-orange rounded-3xl p-12 text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Notre Engagement
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
              Nous nous engageons à vous fournir des solutions d'impression innovantes, 
              un service client exceptionnel et un support technique de premier plan. 
              Votre satisfaction est notre priorité absolue.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-accent" />
                <span className="text-lg">Garantie satisfaction</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-accent" />
                <span className="text-lg">Support 7j/7</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-accent" />
                <span className="text-lg">Devis gratuits</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;