import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Bonjour ! Je suis l'assistant virtuel de Mien Distribution et Service. Je suis là pour répondre à toutes vos questions sur nos services d'impression, maintenance et consommables. Comment puis-je vous aider ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  // Invitation proactive après 10 secondes si pas d'interaction
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        setShowInvitation(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  // Auto-scroll vers le dernier message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Base de connaissances pour les réponses automatiques
  const getContextualResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    // Salutations
    if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello') || msg.includes('bonsoir')) {
      return "Bonjour ! Ravi de vous accueillir chez Mien Distribution et Service ! 😊 Je peux vous renseigner sur nos services d'impression, maintenance d'imprimantes et vente de consommables. Que souhaitez-vous savoir ?";
    }
    
    // Services
    if (msg.includes('service') || msg.includes('que faites-vous') || msg.includes('quoi comme service')) {
      return "🛠️ Nous proposons 3 services principaux :\n\n• **Maintenance d'imprimantes** - Réparation et entretien\n• **Vente de consommables** - Cartouches, toners, papiers\n• **Impression professionnelle** - Documents, flyers, supports marketing\n\nQuel service vous intéresse le plus ?";
    }
    
    // Maintenance
    if (msg.includes('maintenance') || msg.includes('réparation') || msg.includes('panne') || msg.includes('réparer')) {
      return "🔧 Notre service de maintenance couvre :\n\n• Réparation rapide de toutes marques d'imprimantes\n• Entretien préventif régulier\n• Intervention à domicile ou en entreprise\n• Diagnostic gratuit\n\nNous intervenons dans tout Abidjan ! Voulez-vous programmer une intervention ?";
    }
    
    // Consommables
    if (msg.includes('cartouche') || msg.includes('toner') || msg.includes('encre') || msg.includes('papier') || msg.includes('consommable')) {
      return "📦 Nous avons tous les consommables en stock :\n\n• Cartouches d'encre (toutes marques)\n• Toners laser\n• Papiers (A4, photo, spéciaux)\n• Accessoires d'impression\n\n✅ Produits de qualité à prix compétitifs\n✅ Livraison rapide possible\n\nQuelle marque d'imprimante avez-vous ?";
    }
    
    // Impression professionnelle
    if (msg.includes('impression') || msg.includes('imprimer') || msg.includes('flyer') || msg.includes('affiche') || msg.includes('document')) {
      return "🖨️ Notre service d'impression professionnelle :\n\n• Documents administratifs\n• Flyers et dépliants\n• Affiches grand format\n• Cartes de visite\n• Supports marketing\n\n📋 Finitions de qualité premium disponibles. Combien d'exemplaires souhaitez-vous ?";
    }
    
    // Prix et devis
    if (msg.includes('prix') || msg.includes('coût') || msg.includes('tarif') || msg.includes('devis') || msg.includes('combien')) {
      return "💰 Nos tarifs sont très compétitifs !\n\n• **Devis gratuit** et sans engagement\n• Prix transparents, pas de frais cachés\n• Tarifs dégressifs selon quantités\n\n📞 Pour un devis personnalisé :\n• Appelez-nous : 2521002120 / 2521002119\n• WhatsApp direct\n• Formulaire de contact\n\nQuel service vous intéresse pour le devis ?";
    }
    
    // Localisation et contact
    if (msg.includes('où') || msg.includes('adresse') || msg.includes('situé') || msg.includes('trouver') || msg.includes('localisation')) {
      return "📍 **Notre adresse :**\nKoumassi Inshalla, en face de la pharmacie Prodomo\nAbidjan, Côte d'Ivoire\n\n📱 **Contacts :**\n• Téléphone : 2521002120 / 2521002119\n• Email : commercialgdt7@gmail.com\n• WhatsApp disponible 7j/7\n\nNous nous déplaçons aussi chez vous dans tout Abidjan !";
    }
    
    // Rapidité d'intervention
    if (msg.includes('rapide') || msg.includes('urgent') || msg.includes('délai') || msg.includes('intervention') || msg.includes('quand')) {
      return "⚡ **Intervention rapide garantie !**\n\n• Déplacement le jour même si possible\n• Diagnostic en moins de 30 minutes\n• Réparations courantes : 1-2h\n• Livraison consommables : dans la journée\n\n🚀 Nous comprenons que votre productivité compte !\nVoulez-vous programmer une intervention d'urgence ?";
    }
    
    // Qualité et confiance
    if (msg.includes('qualité') || msg.includes('fiable') || msg.includes('confiance') || msg.includes('garantie') || msg.includes('sérieux')) {
      return "⭐ **Pourquoi nous faire confiance ?**\n\n✅ Techniciens expérimentés et certifiés\n✅ Produits de qualité garantis\n✅ Service après-vente assuré\n✅ Clients satisfaits depuis des années\n✅ Transparence totale sur nos tarifs\n\n💼 Nous travaillons avec des particuliers et entreprises dans tout Abidjan !";
    }
    
    // Horaires
    if (msg.includes('horaire') || msg.includes('ouvert') || msg.includes('heure') || msg.includes('fermé')) {
      return "🕐 **Nos horaires :**\nLundi - Vendredi : 8h00 - 18h00\nSamedi : 8h00 - 14h00\nDimanche : Sur rendez-vous\n\n📱 **WhatsApp disponible 7j/7** pour les urgences !\n\nBesoin d'une intervention hors horaires ?";
    }
    
    // Remerciements
    if (msg.includes('merci') || msg.includes('parfait') || msg.includes('super') || msg.includes('génial')) {
      return "😊 De rien, c'est un plaisir de vous aider !\n\n🤝 N'hésitez pas si vous avez d'autres questions. Notre équipe est toujours là pour vous accompagner.\n\n📞 Pour passer commande ou programmer une intervention : 2521002120 / 2521002119";
    }
    
    // Réponse par défaut avec suggestions
    return "🤔 Je n'ai pas bien compris votre question, mais je peux vous renseigner sur :\n\n• 🛠️ **Maintenance** d'imprimantes\n• 📦 **Consommables** (cartouches, toners)\n• 🖨️ **Impression** professionnelle\n• 💰 **Tarifs** et devis gratuits\n• 📍 **Localisation** et contact\n\n💬 Posez-moi une question plus précise ou contactez directement notre équipe au 2521002120 / 2521002119 !";
  };

  const quickSuggestions = [
    "Quels sont vos services ?",
    "Tarifs et devis",
    "Maintenance d'imprimante",
    "Où êtes-vous situés ?",
    "Contact WhatsApp"
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setHasInteracted(true);
    setShowInvitation(false);

    const newMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    const currentMessage = message;
    setMessage('');
    setIsTyping(true);

    // Simule la saisie du bot puis répond
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        text: getContextualResponse(currentMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 100);
  };

  const handleChatOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
    setShowInvitation(false);
  };

  return (
    <>
      {/* Invitation proactive */}
      {showInvitation && !isOpen && !hasInteracted && (
        <div className="fixed bottom-32 right-6 z-50 bg-gradient-to-r from-brand-blue to-brand-orange text-white p-4 rounded-2xl shadow-2xl max-w-sm animate-scale-in">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Bot className="w-5 h-5 mr-2 text-accent" />
                <span className="font-semibold text-sm">Assistant Mien Distribution</span>
              </div>
              <p className="text-sm leading-relaxed">
                👋 Besoin d'infos sur nos services d'impression ? Je peux vous aider !
              </p>
              <Button 
                onClick={handleChatOpen}
                size="sm" 
                className="mt-3 bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Discuter maintenant
              </Button>
            </div>
            <button
              onClick={() => setShowInvitation(false)}
              className="text-white/80 hover:text-white ml-2 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2">
            <div className="w-3 h-3 bg-gradient-to-r from-brand-blue to-brand-orange rotate-45"></div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleChatOpen}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-brand-blue to-brand-orange hover:scale-110 text-white p-4 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            💬 Chattez avec notre assistant IA !
            <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-80 h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-orange p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Assistant IA Mien Distribution</h3>
                <p className="text-white/80 text-xs flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  En ligne - Réponse immédiate
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className="flex items-start max-w-[85%]">
                  {msg.isBot && (
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      msg.isBot
                        ? 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm shadow-sm'
                        : 'bg-gradient-to-r from-brand-blue to-brand-orange text-white rounded-br-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    <p className={`text-xs mt-2 ${msg.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {msg.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                  {!msg.isBot && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start max-w-[85%]">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="p-3 border-t border-border bg-gray-50/30">
              <p className="text-xs text-gray-600 mb-2">💡 Suggestions rapides :</p>
              <div className="flex flex-wrap gap-1">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-white">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 text-sm border-gray-200 focus:border-brand-blue"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-gradient-to-r from-brand-blue to-brand-orange hover:opacity-90 px-4"
                disabled={isTyping || !message.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500">Réponses automatiques intelligentes</p>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs text-brand-blue hover:text-brand-orange"
                onClick={() => window.open('https://wa.me/2250504908469?text=Bonjour, je souhaite en savoir plus sur vos services d\'impression.', '_blank')}
              >
                📱 WhatsApp direct
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;