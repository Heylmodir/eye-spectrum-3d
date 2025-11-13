import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import aestheticSurgery from "@/assets/aesthetic-eye-surgery.jpg";

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Chirurgie Esthétique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chirurgie Esthétique du <span className="text-primary">Regard</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Correction des défauts du tiers supérieur du visage avec expertise et précision
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-2xl border-border/50 overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <OptimizedImage 
                src={aestheticSurgery} 
                alt="Chirurgie esthétique du regard - Instruments chirurgicaux"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            </div>
            <CardContent className="p-8 md:p-12 -mt-20 relative z-10">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">
                  Chirurgie Plastique et Reconstructrice
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-base leading-relaxed">
                La chirurgie plastique reconstructrice et esthétique de l'orbite et des paupières permet de corriger les défauts visibles du tiers supérieur du visage, qui peuvent résulter du vieillissement, d'une malformation congénitale, d'un traumatisme facial ou encore d'un épisode carcinologique. Les options thérapeutiques sont nombreuses et variables, allant des injections de la face à la blépharoplastie chirurgicale. Une consultation spécialisée, avec un interrogatoire minutieux et un examen complet, permet de proposer la solution la plus adaptée à chaque patient.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
