import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

const HoursAndInfo = () => {
  return (
    <section id="horaires" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Informations Pratiques</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cabinet <span className="text-primary">Dr Kenza Tazi</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ophtalmologue - Spécialiste en chirurgie oculaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Hours Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/50 bg-card overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">Horaires</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between items-center pb-2 border-b border-border/50">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span className="text-foreground font-semibold">9h - 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Samedi</span>
                  <span className="text-foreground font-semibold">9h - 13h</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border/50">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-primary font-semibold">Fermé</span>
                </div>
              </div>
            </CardContent>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>

          {/* Phone Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/50 bg-card overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">Téléphone</h3>
              <div className="space-y-3">
                <a 
                  href="tel:0664474135"
                  className="block text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  06 64 47 41 35
                </a>
                <a 
                  href="tel:0530346820"
                  className="block text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  05 30 34 68 20
                </a>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border/50">
                  Disponible pendant les heures d'ouverture
                </p>
              </div>
            </CardContent>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>

          {/* Email Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/50 bg-card overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">Email</h3>
              <a 
                href="mailto:dr.ktazi@gmail.com"
                className="block text-lg font-semibold text-foreground hover:text-primary transition-colors break-all"
              >
                dr.ktazi@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border/50">
                Réponse sous 24-48 heures
              </p>
            </CardContent>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>

          {/* Address Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/50 bg-card overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">Adresse</h3>
              <p className="text-foreground font-semibold mb-2">
                Cabinet Dr Kenza Tazi
              </p>
              <p className="text-muted-foreground">
                Casablanca<br />
                Maroc
              </p>
              <a
                href="https://maps.app.goo.gl/59rp7sLdMWzCott19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 pt-4 border-t border-border/50 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
              >
                Voir sur la carte
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </CardContent>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HoursAndInfo;
