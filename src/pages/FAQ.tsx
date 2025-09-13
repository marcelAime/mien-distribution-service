import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
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
      question: "🔧 Quels services proposez-vous exactement ?",
      answer: `Nous proposons trois services principaux :
      
• **Maintenance d'imprimantes** : Réparation, entretien préventif, diagnostic complet pour tous types d'imprimantes (jet d'encre, laser, multifonctions)

• **Vente de consommables** : Cartouches d'encre, toners, papiers spécialisés pour toutes marques (HP, Canon, Epson, Brother, etc.)

• **Impression professionnelle** : Services d'impression couleur et noir & blanc, tous formats, avec finitions professionnelles

Nous intervenons aussi bien pour les particuliers que pour les entreprises, avec des solutions adaptées à chaque besoin.`
    },
    {
      id: "trust",
      question: "⭐ Pourquoi devrais-je vous faire confiance ?",
      answer: `Notre réputation repose sur :

• **Expérience prouvée** : Des années d'expertise dans le domaine de l'impression et de la maintenance

• **Techniciens qualifiés** : Équipe formée et certifiée sur les dernières technologies

• **Transparence totale** : Devis détaillés, pas de coûts cachés, explications claires

• **Garanties** : Toutes nos réparations sont garanties, satisfaction client assurée

• **Proximité** : Basés à Koumassi, nous connaissons les besoins locaux et offrons un service personnalisé

• **Témoignages clients** : De nombreux clients satisfaits nous font confiance et nous recommandent`
    },
    {
      id: "pricing",
      question: "💰 Combien ça coûte et comment obtenir un devis ?",
      answer: `Nos tarifs sont transparents et compétitifs :

• **Diagnostic** : GRATUIT - nous identifions le problème sans frais

• **Devis détaillé** : GRATUIT - estimation précise avant toute intervention

• **Tarifs préférentiels** : Remises pour clients réguliers et achats en volume

• **Paiement flexible** : Espèces, mobile money, virement bancaire

**Pour obtenir un devis :**
1. Contactez-nous par téléphone (+225 0504908469)
2. Envoyez-nous un message WhatsApp
3. Remplissez notre formulaire de contact en ligne
4. Visitez notre bureau à Koumassi

Réponse garantie sous 24h !`
    },
    {
      id: "contact",
      question: "📞 Comment puis-je vous contacter facilement ?",
      answer: `Plusieurs moyens simples pour nous joindre :

• **Téléphone** : +225 0504908469 (7j/7)
• **WhatsApp** : +225 0504908469 (réponse rapide)
• **Email** : commercialgdt7@gmail.com
• **Formulaire** : Via notre site web
• **En personne** : Koumassi Inshalla, en face de la pharmacie Prodomo

**Horaires d'ouverture :**
- Lundi à Vendredi : 8h00 - 18h00
- Samedi : 8h00 - 17h00
- Dimanche : Sur rendez-vous

**WhatsApp est notre canal le plus rapide** pour des réponses immédiates !`
    },
    {
      id: "location",
      question: "📍 Où êtes-vous situés et intervenez-vous rapidement ?",
      answer: `**Notre adresse :**
Koumassi Inshalla, en face de la pharmacie Prodomo
Abidjan, Côte d'Ivoire

**Zones d'intervention :**
• Koumassi et environs : Intervention sous 2h
• Grand Abidjan : Intervention le jour même
• Autres villes de Côte d'Ivoire : Sous 48-72h selon localisation

**Avantages de notre localisation :**
• Facilement accessible en transport
• Parking disponible
• Point de repère connu (pharmacie Prodomo)
• Au cœur d'un quartier d'affaires dynamique

**Intervention d'urgence** disponible pour les entreprises avec contrat de maintenance.`
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Entreprise A",
      role: "Société de Services",
      rating: 5,
      comment: "Service impeccable ! Intervention rapide et efficace. Nous sommes très satisfaits.",
      avatar: "👔"
    },
    {
      id: 2,
      name: "Client particulier",
      role: "Particulier",
      rating: 5,
      comment: "Des consommables toujours disponibles et à bon prix. Je recommande !",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Société B",
      role: "Entreprise Commerciale",
      rating: 5,
      comment: "Équipe professionnelle, réactive et fiable. Merci Mien Distribution et Service.",
      avatar: "🏢"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FAQ & Témoignages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Retrouvez toutes les réponses à vos questions et découvrez l'avis de nos clients
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Les 5 questions essentielles sur nos services
            </p>
          </div>

          <div className="fade-in-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id} 
                  className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Témoignages Clients
            </h2>
            <p className="text-xl text-muted-foreground">
              Ce que nos clients pensent de nos services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="card-hover bg-card p-8 rounded-xl shadow-lg fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-center text-muted-foreground italic">
                  "{testimonial.comment}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-blue to-brand-orange rounded-3xl p-12 text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Encore une question ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Notre équipe est là pour vous aider. Contactez-nous directement pour obtenir 
              des réponses personnalisées à vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-brand-blue hover:bg-white/90 group"
                onClick={() => window.open('https://wa.me/2250504908469?text=Bonjour, j\'ai une question sur vos services d\'impression.', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contactez-nous sur WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-blue group"
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
      </section>
    </div>
  );
};

export default FAQ;