import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "2250504908469";
  const message = encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos services d'impression.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute -top-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactez-nous sur WhatsApp
        <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;