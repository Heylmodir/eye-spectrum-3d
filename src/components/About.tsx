import { Button } from "@/components/ui/button";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import drSurgery1 from "@/assets/dr-kenza-surgery-1.png";
import drSurgery2 from "@/assets/dr-kenza-surgery-2.png";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6">
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

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Découvrir Notre Équipe
            </Button>
          </div>

          {/* Right content - Professional Images */}
          <div className="relative">
            <div className="grid gap-4">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={drSurgery1} 
                  alt="Dr Kenza Tazi en chirurgie" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Dr Kenza Tazi</h3>
                  <p className="text-sm opacity-90">Spécialiste en chirurgie oculaire et soins avancés</p>
                </div>
              </div>
              
              {/* Secondary image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={drSurgery2} 
                  alt="Équipement médical moderne" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Technologie de pointe au service de votre vision</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-medical-red/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-medical-beige/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
