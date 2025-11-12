import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Scan, Glasses, Activity, Microscope, Shield } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Consultation Générale",
    description: "Examens complets de la vue avec technologie de pointe pour détecter toute anomalie oculaire.",
  },
  {
    icon: Scan,
    title: "Imagerie 3D",
    description: "Technologie d'imagerie avancée pour une visualisation précise de la structure oculaire.",
  },
  {
    icon: Glasses,
    title: "Correction Visuelle",
    description: "Prescription de lunettes et lentilles de contact adaptées à vos besoins spécifiques.",
  },
  {
    icon: Activity,
    title: "Chirurgie Réfractive",
    description: "Interventions au laser pour corriger la myopie, l'hypermétropie et l'astigmatisme.",
  },
  {
    icon: Microscope,
    title: "Diagnostic Avancé",
    description: "Détection précoce des maladies oculaires grâce à nos équipements de dernière génération.",
  },
  {
    icon: Shield,
    title: "Soins Préventifs",
    description: "Programmes de prévention personnalisés pour maintenir une santé oculaire optimale.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Des soins complets et personnalisés pour préserver votre vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
