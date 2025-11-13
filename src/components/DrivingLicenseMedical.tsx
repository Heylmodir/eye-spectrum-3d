import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileCheck, Car } from "lucide-react";

const DrivingLicenseMedical = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-primary/10 p-6 rounded-full border-2 border-primary/30">
                    <Car className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-4">
                  <FileCheck className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Médecin Agréé</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Visite Médicale du Permis de Conduire
                </h3>
                
                <p className="text-lg text-muted-foreground mb-4">
                  Dr Kenza Tazi est médecin agréé par la préfecture pour effectuer les visites médicales du permis de conduire.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Examen ophtalmologique complet</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Délivrance immédiate du certificat</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DrivingLicenseMedical;
