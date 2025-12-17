import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      id: "services",
      question: "🔧 Quels produits et équipements proposez-vous ?",
      answer: `Nous proposons une gamme complète pour les professionnels de l'art graphique :

• **Imprimerie** : Plaques d'impression (CTP, CTCP, PF), encres conventionnelles Pantone, produits chimiques (eau de mouillage, cleaner, wash), auxiliaires (vernis UV, poudre anti-maculante, manchon mouilleur, éponges)

• **Flexographie** : Encres à eau et à solvant, plaques photo-polymère, solvants de gravage

• **Numérique** : Vinyles, bâches, encres éco-solvant

• **Sérigraphie** : Mesh 100% polyester, émulsion diazo, encre plastisol, polymère, encres à eau et à solvant

• **Équipements** : Machines CTP, machines d'impression et de finition (neuves et d'occasion)

• **Pièces détachées** : Pour toutes machines d'art graphique`
    },
    {
      id: "trust",
      question: "⭐ Pourquoi choisir Mien Distribution et Service ?",
      answer: `Notre réputation repose sur :

• **Excellente garantie** : Service de qualité avec des produits certifiés

• **Expertise reconnue** : Des années d'expérience dans le secteur de l'art graphique en Côte d'Ivoire

• **Partenaire de confiance** : Nous accompagnons les imprimeries et entreprises du secteur graphique

• **Produits certifiés** : Équipements et consommables de qualité supérieure

• **Réseau étendu** : Présents à Koumassi et dans toute la Côte d'Ivoire et la sous-région

• **Support technique** : Conseils d'experts pour vos besoins spécifiques`
    },
    {
      id: "pricing",
      question: "💰 Comment obtenir un devis pour mes besoins ?",
      answer: `Nos services sont adaptés aux professionnels :

• **Devis personnalisé** : GRATUIT - selon vos besoins spécifiques

• **Tarifs compétitifs** : Prix attractifs pour équipements neufs et d'occasion

• **Tarifs préférentiels** : Remises pour commandes en volume et clients réguliers

• **Paiement flexible** : Plusieurs options de paiement disponibles

**Pour obtenir un devis :**
1. Appelez-nous : 2521002120 / 2521002119
2. Envoyez un message WhatsApp : +225 0504908469
3. Email : commercialgdt7@gmail.com
4. Visitez notre showroom à Koumassi

Réponse rapide garantie !`
    },
    {
      id: "contact",
      question: "📞 Comment nous contacter ?",
      answer: `Plusieurs moyens pour nous joindre :

• **Téléphone** : 2521002120 / 2521002119
• **WhatsApp** : +225 0504908469 (réponse rapide)
• **Email** : commercialgdt7@gmail.com
• **Adresse** : Koumassi Inshalla, en face de la pharmacie Prodomo, Abidjan

**Horaires d'ouverture :**
- Lundi à Vendredi : 8h00 - 18h00
- Samedi : 8h00 - 17h00

**WhatsApp est notre canal le plus rapide** pour des réponses immédiates !`
    },
    {
      id: "location",
      question: "📍 Quelle est votre zone d'intervention ?",
      answer: `**Notre adresse :**
Koumassi Inshalla, en face de la pharmacie Prodomo
Abidjan, Côte d'Ivoire

**Zones d'intervention :**
• **Koumassi** : Service de proximité immédiat
• **Grand Abidjan** : Livraison et service rapide
• **Toute la Côte d'Ivoire** : Expédition dans tout le pays
• **Sous-région** : Service étendu aux pays voisins

**Avantages :**
• Showroom accessible avec parking
• Stock disponible sur place
• Conseils d'experts sur place
• Livraison possible selon vos besoins`
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Imprimerie ABC",
      role: "Imprimerie Offset",
      rating: 5,
      comment: "Fournisseur fiable pour nos plaques CTP et encres. Qualité constante et prix compétitifs !",
      avatar: "🏭"
    },
    {
      id: 2,
      name: "GraphiPro SARL",
      role: "Atelier de Sérigraphie",
      rating: 5,
      comment: "Excellent partenaire pour nos consommables de sérigraphie. Réactivité exemplaire !",
      avatar: "🎨"
    },
    {
      id: 3,
      name: "Digital Print CI",
      role: "Impression Numérique",
      rating: 5,
      comment: "Équipe professionnelle et produits de qualité. Notre partenaire de confiance depuis des années.",
      avatar: "🖨️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-white/90 text-sm font-medium">Votre partenaire en art graphique</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              FAQ & Témoignages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Retrouvez toutes les réponses à vos questions et découvrez l'avis de nos clients professionnels
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir sur nos produits et services
            </p>
          </div>

          <div className="fade-in-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id} 
                  className="border-2 border-border/50 rounded-2xl px-6 bg-card shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-accent transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    <div className="whitespace-pre-line">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-secondary/60 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Témoignages Clients
            </h2>
            <p className="text-xl text-muted-foreground">
              La confiance des professionnels de l'art graphique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="group bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 fade-in-up border border-transparent hover:border-accent/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{testimonial.avatar}</div>
                  <h4 className="font-bold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-center text-muted-foreground italic leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-orange rounded-3xl p-12 md:p-16 text-center fade-in-up relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Encore une question ?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Notre équipe d'experts est là pour vous conseiller sur vos besoins 
                en équipements et consommables d'art graphique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-blue hover:bg-white/90 group shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                  onClick={() => window.open('https://wa.me/2250504908469?text=Bonjour, je souhaite des informations sur vos équipements et consommables d\'art graphique.', '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contactez-nous sur WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-brand-blue group transition-all duration-300 text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">
                    Formulaire de contact
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
