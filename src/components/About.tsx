import { Button } from "@/components/ui/button";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import drSurgery1 from "@/assets/dr-kenza-surgery-1.png";
import drSurgery2 from "@/assets/dr-kenza-surgery-2.png";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Text */}
          <div className="space-y-6 order-last lg:order-first">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                À Propos de Nous
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Excellence en{" "}
              <span className="text-primary">Ophtalmologie</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Avec plus de 15 ans d'expérience, notre cabinet combine expertise 
              médicale et technologies de pointe pour offrir des soins oculaires 
              d'exception. Notre équipe de spécialistes est dédiée à préserver 
              et améliorer votre vision.
            </p>

            <p className="text-lg text-muted-foreground">
              Nous utilisons les équipements les plus avancés, incluant l'imagerie 
              3D et les systèmes de diagnostic assistés par ordinateur, pour garantir 
              des résultats précis et fiables.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Certifications</h3>
                <p className="text-sm text-muted-foreground">
                  Équipe certifiée et accréditée
                </p>
              </div>
              <div className="space-y-2">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Expérience</h3>
                <p className="text-sm text-muted-foreground">
                  Plus de 5000 patients
                </p>
              </div>
              <div className="space-y-2">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Soins Personnalisés</h3>
                <p className="text-sm text-muted-foreground">
                  Approche centrée patient
                </p>
              </div>
              <div className="space-y-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Technologie de pointe
                </p>
              </div>
            </div>
          </div>

          {/* Right content - Professional Images - Shows first on mobile */}
          <div className="relative order-first lg:order-last">
            <div className="grid gap-6">
              {/* Main image with red frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-medical-red">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={drSurgery1} 
                  alt="Dr Kenza Tazi en chirurgie" 
                  className="w-full h-[450px] object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-red/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Dr Kenza Tazi</h3>
                  <p className="text-sm drop-shadow-md">Spécialiste en chirurgie oculaire et soins avancés</p>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-medical-red-light" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-medical-red-light" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-medical-red-light" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-medical-red-light" />
              </div>
              
              {/* Secondary image with red frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-medical-red">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={drSurgery2} 
                  alt="Équipement médical moderne" 
                  className="w-full h-[350px] object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-red/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                  <p className="text-sm font-medium drop-shadow-md">Technologie de pointe au service de votre vision</p>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-medical-red-light" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-medical-red-light" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-medical-red-light" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-medical-red-light" />
              </div>
            </div>
            
            {/* Enhanced decorative elements with red glow */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-medical-red/20 rounded-full blur-3xl -z-10 animate-pulse-soft" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-medical-red/15 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 -right-4 w-32 h-32 bg-medical-red-dark/10 rounded-full blur-2xl -z-10 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
