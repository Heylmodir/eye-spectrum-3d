import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, MessageCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add SEO meta tags
    document.title = "Merci - Dr Kenza Tazi";
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "212661736966";
    const message = "Bonjour Dr Kenza Tazi, j'ai soumis une demande de rendez-vous et je souhaiterais obtenir plus d'informations.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <Card className="max-w-2xl w-full shadow-2xl border-border/50 relative z-10 animate-fade-in">
        <CardContent className="p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <CheckCircle className="w-20 h-20 text-primary relative z-10 animate-scale-in" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Merci pour votre demande !
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Votre demande de rendez-vous a été reçue avec succès. Notre équipe vous contactera dans les plus brefs délais pour confirmer votre rendez-vous.
          </p>

          {/* Information Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Prochaines étapes
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Vous recevrez une confirmation par téléphone ou WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Nous vous proposerons un créneau disponible selon vos préférences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>N'hésitez pas à nous contacter si vous avez des questions</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contacter sur WhatsApp
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-muted-foreground mt-8">
            Temps de réponse moyen : <span className="font-semibold text-primary">24 heures</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
