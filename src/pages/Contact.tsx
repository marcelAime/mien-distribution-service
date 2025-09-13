import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in-left">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Nos Coordonnées
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Téléphone</h3>
                    <p className="text-muted-foreground mb-2">Appelez-nous directement</p>
                    <a 
                      href="tel:+2250504908469" 
                      className="text-lg font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      +225 0504908469
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
                    <p className="text-muted-foreground mb-2">Envoyez-nous un message</p>
                    <a 
                      href="mailto:commercialgdt7@gmail.com" 
                      className="text-lg font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      commercialgdt7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Adresse</h3>
                    <p className="text-muted-foreground mb-2">Venez nous rendre visite</p>
                    <address className="text-lg text-foreground not-italic">
                      Koumassi Inshalla<br />
                      En face de la pharmacie Prodomo<br />
                      Abidjan, Côte d'Ivoire
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Horaires</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi : 8h00 - 18h00</p>
                      <p>Samedi : 8h00 - 17h00</p>
                      <p>Dimanche : Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-[#25D366]/10 rounded-xl border border-[#25D366]/20">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-[#25D366]" />
                  Contact Rapide
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pour une réponse immédiate, contactez-nous via WhatsApp
                </p>
                <Button 
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white w-full"
                  onClick={() => window.open('https://wa.me/2250504908469?text=Bonjour, je souhaite en savoir plus sur vos services d\'impression.', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ouvrir WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-right">
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-primary">
                  Demander un Devis Gratuit
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom et prénom"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Adresse email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez vos besoins : type d'imprimante, problème rencontré, services souhaités..."
                      rows={6}
                      required
                      className="mt-2 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-gradient w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Réponse garantie sous 24h • Devis gratuit et sans engagement
                  </p>
                </form>
              </div>

              {/* Quick Services */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🔧</div>
                  <p className="text-sm font-medium text-foreground">Maintenance</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">📦</div>
                  <p className="text-sm font-medium text-foreground">Consommables</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🖨️</div>
                  <p className="text-sm font-medium text-foreground">Impression</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Comment nous trouver ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Nous sommes situés à Koumassi, facilement accessible
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg fade-in-up">
            <div className="aspect-video bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-primary">Koumassi Inshalla</h3>
                <p className="text-lg text-muted-foreground">En face de la pharmacie Prodomo</p>
                <p className="text-muted-foreground mt-2">Point de repère facilement identifiable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;