import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Package, Printer, ArrowRight, CheckCircle, Cog, Settings, Layers, CircuitBoard } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Product images
import chemicalsBarrels from '@/assets/products/chemicals-barrels.jpg';
import chemicalsWarehouse from '@/assets/products/chemicals-warehouse.jpg';
import inkSpatulas from '@/assets/products/ink-spatulas.jpg';
import magnifyingLoupe from '@/assets/products/magnifying-loupe.jpg';
import circuitBoards from '@/assets/products/circuit-boards.jpg';
import laminatingMachine from '@/assets/products/laminating-machine.jpg';
import printingPlate from '@/assets/products/printing-plate.jpg';
import spareParts from '@/assets/products/spare-parts.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Imprimerie",
      icon: Printer,
      image: printingPlate,
      description: "Solutions complètes pour l'imprimerie offset traditionnelle",
      features: [
        "Plaques d'impression : CTP, CTCP et PF",
        "Encres conventionnelles Pantone",
        "Produits chimiques : Eau de mouillage, cleaner, wash etc",
        "Auxiliaires : Vernis UV, poudre anti-maculante, manchon mouilleur, éponge, etc",
        "Conseil technique spécialisé",
        "Livraison rapide"
      ],
      benefits: "Tous les consommables pour une impression offset de qualité professionnelle"
    },
    {
      id: 2,
      title: "Flexographie",
      icon: Layers,
      image: chemicalsWarehouse,
      description: "Équipements et consommables pour l'impression flexographique",
      features: [
        "Encres à eau pour tous supports",
        "Encres à solvant haute résolution",
        "Plaques photo-polymère précises",
        "Solvants de gravage spécialisés",
        "Support technique expert",
        "Produits certifiés qualité"
      ],
      benefits: "Solutions complètes pour la flexographie industrielle et artisanale"
    },
    {
      id: 3,
      title: "Numérique",
      icon: Package,
      image: chemicalsBarrels,
      description: "Solutions d'impression numérique grand format",
      features: [
        "Vinyles : adhésifs, décoratifs, transparents",
        "Bâches : frontlit, backlit, mesh, canvas", 
        "Encres éco-solvant longue durée",
        "Formats standards et sur mesure",
        "Finitions professionnelles",
        "Conseils d'utilisation"
      ],
      benefits: "Tout pour vos impressions numériques extérieur et intérieur"
    },
    {
      id: 4,
      title: "Sérigraphie",
      icon: Wrench,
      image: inkSpatulas,
      description: "Matériels et consommables pour la sérigraphie professionnelle",
      features: [
        "Mesh 100% polyester différents grammages",
        "Émulsion diazo photosensible",
        "Encres plastisol : opaques, transparentes, pailletées",
        "Polymères de différentes duretés",
        "Encres à eau écologiques",
        "Encres à solvant pour plastiques et métaux"
      ],
      benefits: "Gamme complète pour tous vos projets sérigraphiques"
    },
    {
      id: 5,
      title: "Pièces détachées",
      icon: CircuitBoard,
      image: spareParts,
      description: "Large gamme de pièces détachées pour tous types d'équipements",
      features: [
        "Pièces mécaniques : rouleaux, cylindres, engrenages",
        "Pièces électroniques : cartes, capteurs, moteurs",
        "Courroies et transmissions",
        "Alimentations et composants",
        "Diagnostic et expertise",
        "Installation et maintenance"
      ],
      benefits: "Maintenez vos équipements en parfait état de fonctionnement"
    },
    {
      id: 6,
      title: "Équipements",
      icon: Settings,
      image: laminatingMachine,
      description: "Machines neuves et d'occasion pour tous vos besoins d'impression",
      features: [
        "Machines CTP neuves et occasions révisées",
        "Machines d'impression : offset, numérique, flexo, sérigraphie",
        "Machines de finition : découpe, pelliculage, reliure, pliage",
        "Formation incluse",
        "Garantie constructeur",
        "Service après-vente"
      ],
      benefits: "Équipez-vous avec les meilleures machines du marché"
    },
    {
      id: 7,
      title: "Accessoires",
      icon: Cog,
      image: magnifyingLoupe,
      description: "Tous les accessoires nécessaires à vos opérations d'impression",
      features: [
        "Outils de mesure de précision",
        "Produits d'entretien spécialisés",
        "Consommables divers",
        "Accessoires de sécurité",
        "Solutions de stockage",
        "Conseil personnalisé"
      ],
      benefits: "Complétez votre équipement avec nos accessoires professionnels"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Produits d'Impression
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins d'impression, de machines et de pièces détachées
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
              Besoin d'un produit spécifique ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques. 
              Nous vous proposons des solutions sur mesure avec les meilleurs produits du marché.
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