import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Specialties = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
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
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkcH3dM1gQLbBYdFndk4wO4D9Drcy7pW5kF--BRyhOEwiZooMiPfiuVoOLE9Ea6cATJNxt1uwO8ugzwxzx_skBXWNSIw7450nEsDcN1738bWfZxG4W0tM_3T2IncIzbEil02n74PL1vQCKQ03vg6xUOXxmLIN-Q_h4C2jzgj08q-LZFgsSAB9CeEN5TfcA6rPVq24zK8AZdVtc-9Bco2zYa32e21NGP0yyY=w1280" 
                alt="Chirurgie esthétique"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            </div>
            <CardContent className="p-8 md:p-12 -mt-20 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Excellence en Chirurgie Plastique et Reconstructrice
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  La chirurgie plastique reconstructrice et esthétique de l'orbite et des paupières permet de corriger les défauts visibles du tiers supérieur du visage, qui peuvent résulter du vieillissement, d'une malformation congénitale, d'un traumatisme facial ou encore d'un épisode carcinologique. Les options thérapeutiques sont nombreuses et variables, allant des injections de la face à la blépharoplastie chirurgicale. Une consultation spécialisée, avec un interrogatoire minutieux et un examen complet, permet de proposer la solution la plus adaptée à chaque patient.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
