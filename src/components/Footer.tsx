import { Facebook, Twitter, Instagram, Linkedin, Eye, Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-background via-medical-red/5 to-background border-t border-medical-red/20 overflow-hidden">
      {/* Animated Eye Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-float">
          <Eye className="w-32 h-32 text-medical-red" style={{ animationDelay: "0s" }} />
        </div>
        <div className="absolute top-40 right-20 animate-float">
          <Eye className="w-24 h-24 text-medical-red" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <Eye className="w-28 h-28 text-medical-red" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float">
          <Sparkles className="w-20 h-20 text-medical-red" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-red/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src={logo} 
                alt="Cabinet d'Ophtalmologie Logo" 
                className="w-20 h-20 object-contain transition-transform hover:scale-110"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cabinet d'ophtalmologie spécialisé en chirurgie et soins oculaires.
              Excellence et technologie de pointe à votre service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-medical-red/10 hover:bg-medical-red flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group border border-medical-red/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-medical-red group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-medical-red/10 hover:bg-medical-red flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group border border-medical-red/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-medical-red group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/dr.ktazi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-medical-red/10 hover:bg-medical-red flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group border border-medical-red/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-medical-red group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-medical-red/10 hover:bg-medical-red flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group border border-medical-red/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-medical-red group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-medical-red rounded-full" />
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {["Accueil", "Services", "À Propos", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-medical-red transition-all duration-200 hover:translate-x-2 inline-block group">
                    <span className="relative">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-red group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-medical-red rounded-full" />
              Nos Spécialités
            </h4>
            <ul className="space-y-3">
              {["Cataracte", "Laser Réfractif", "Rétine", "Glaucome", "Pédiatrie", "Esthétique"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-medical-red transition-all duration-200 hover:translate-x-2 inline-block group">
                    <span className="relative">
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-red group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-medical-red rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground hover:text-medical-red transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-medical-red/10 flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                  <Phone className="w-4 h-4 text-medical-red" />
                </div>
                <div>
                  <a href="tel:0664474135" className="block hover:translate-x-1 transition-transform">06 64 47 41 35</a>
                  <a href="tel:0530346820" className="block hover:translate-x-1 transition-transform">05 30 34 68 20</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-medical-red transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-medical-red/10 flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                  <Mail className="w-4 h-4 text-medical-red" />
                </div>
                <a href="mailto:dr.ktazi@gmail.com" className="hover:translate-x-1 transition-transform inline-block">
                  dr.ktazi@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-medical-red transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-medical-red/10 flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                  <MapPin className="w-4 h-4 text-medical-red" />
                </div>
                <span>Rabat Temara, Maroc</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-medical-red transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-medical-red/10 flex items-center justify-center group-hover:bg-medical-red/20 transition-colors">
                  <Clock className="w-4 h-4 text-medical-red" />
                </div>
                <div>
                  <div>Lun - Ven: 9h - 18h</div>
                  <div>Sam: 9h - 13h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Logo Divider */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-medical-red/30 to-medical-red/30" />
          <img 
            src={logo} 
            alt="Logo" 
            className="w-10 h-10 object-contain"
          />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-medical-red/30 to-medical-red/30" />
        </div>

        {/* Bottom bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © 2024 Cabinet d'Ophtalmologie. Tous droits réservés.
              <Sparkles className="w-4 h-4 text-medical-red animate-pulse-soft" />
            </p>
            <div className="flex gap-6 text-sm">
              {["Mentions Légales", "Confidentialité", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-muted-foreground hover:text-medical-red transition-colors relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-red group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
