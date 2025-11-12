import { Button } from "@/components/ui/button";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

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

          {/* Right content - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-card shadow-2xl flex items-center justify-center border border-border/50">
                <div className="text-center space-y-6 p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Notre Mission</h3>
                  <p className="text-muted-foreground">
                    Préserver et améliorer la vision de nos patients grâce à 
                    des soins innovants et personnalisés
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Eye = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default About;
