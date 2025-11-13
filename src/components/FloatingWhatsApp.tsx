import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Bonjour Dr Kenza Tazi,

Je souhaite obtenir des informations concernant vos services d'ophtalmologie.

Pouvez-vous me recontacter ?

Merci.`;

    // WhatsApp phone number (Morocco country code + number)
    const whatsappNumber = "212664474135";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip/Message bubble */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-2 fade-in-0 border border-border">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold mb-1">Besoin d'aide ?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Contactez-nous directement sur WhatsApp pour toute question ou prise de rendez-vous
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Démarrer la conversation
            </Button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center animate-pulse-soft"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-medical-red rounded-full border-2 border-white animate-pulse" />
          
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
