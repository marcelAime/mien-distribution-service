import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Package, Printer, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import maintenanceImage from '@/assets/maintenance-service.jpg';
import suppliesImage from '@/assets/supplies-service.jpg';
import printingImage from '@/assets/printing-service.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Maintenance d'imprimantes",
      icon: Wrench,
      image: maintenanceImage,
      description: "Service complet de maintenance préventive et curative pour tous types d'imprimantes",
      features: [
        "Diagnostic complet gratuit",
        "Réparation sur site ou en atelier",
        "Maintenance préventive programmée",
        "Support technique professionnel",
        "Pièces détachées d'origine",
        "Garantie sur les réparations"
      ],
      benefits: "Réduisez vos coûts et maximisez la durée de vie de vos équipements"
    },
    {
      id: 2,
      title: "Vente de consommables",
      icon: Package,
      image: suppliesImage,
      description: "Large gamme de cartouches, toners et papiers pour toutes marques d'imprimantes",
      features: [
        "Cartouches d'encre originales et compatibles",
        "Toners laser haute qualité",
        "Papiers spécialisés (photo, présentation)",
        "Livraison rapide",
        "Prix compétitifs",
        "Conseil personnalisé"
      ],
      benefits: "Stock permanent et prix avantageux pour vos consommables"
    },
    {
      id: 3,
      title: "Impression professionnelle",
      icon: Printer,
      image: printingImage,
      description: "Services d'impression haute qualité pour tous vos documents professionnels",
      features: [
        "Impression couleur et noir & blanc",
        "Formats standards et grands formats",
        "Finitions professionnelles",
        "Délais respectés",
        "Qualité garantie",
        "Tarifs préférentiels en volume"
      ],
      benefits: "Impression de qualité professionnelle pour vos projets importants"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Services d'Impression
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins d'impression et de maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`fade-in-${index % 2 === 0 ? 'left' : 'right'} ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`fade-in-${index % 2 === 0 ? 'right' : 'left'} ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="bg-accent/10 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-primary mb-2">Avantage clé :</h4>
                    <p className="text-muted-foreground">{service.benefits}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="btn-gradient group" 
                      asChild
                    >
                      <Link to="/contact">
                        Obtenir plus d'infos
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => window.open('https://wa.me/2250504908469?text=Bonjour, je souhaite en savoir plus sur votre service: ' + service.title, '_blank')}
                    >
                      Contacter sur WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques. 
              Nous vous proposons des solutions sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient" asChild>
                <Link to="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/faq">Consulter la FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;