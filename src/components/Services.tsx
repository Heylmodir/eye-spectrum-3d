import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Scan, Glasses, Activity, Microscope, Shield, Sparkles } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import serviceCataract from "@/assets/service-cataract-real.jpg";
import serviceLaser from "@/assets/service-laser-real.jpg";
import serviceRetina from "@/assets/service-retina-real.jpg";
import serviceGlaucoma from "@/assets/service-glaucoma-real.jpg";
import servicePediatric from "@/assets/service-pediatric-real.jpg";
import serviceLenses from "@/assets/service-lenses-real.jpg";

const services = [
  {
    icon: Eye,
    title: "Chirurgie de la cataracte",
    description: "La chirurgie de la cataracte consiste à retirer le cristallin devenu opaque, causant une vision floue, et à le remplacer par une lentille intraoculaire artificielle. Une petite incision est pratiquée sur la cornée afin d'accéder au cristallin qui est ensuite fragmenté par des ultrasons au moyen d'une technique appelée phacoémulsification. Un cristallin artificiel est alors implanté dans l'oeil pour restaurer la clarté de la vision.",
    image: serviceCataract,
  },
  {
    icon: Scan,
    title: "Chirurgie réfractive au laser",
    description: "La chirurgie réfractive au laser vise à corriger les troubles de la vision comme la myopie, l'hypermétropie et l'astigmatisme. Elle consiste à remodeler la cornée à l'aide d'un laser pour améliorer la focalisation de la lumière sur la rétine. L'intervention se fait généralement sous anésthésie locale et dure peu de temps. Plusieurs techniques sont disponibles et le médecin établi un bilan préopératoire complet afin d'opter pour la technique la plus adaptée à chaque patient. Les résultats sont souvent durables et permettent de réduire ou de supprimer la dépendance aux lunettes.",
    image: serviceLaser,
  },
  {
    icon: Microscope,
    title: "Maladies de la rétine",
    description: "De nombreuses pathologies telles que la rétinopathie diabétique ou encore la dégénérescence maculaire liée à l'age (DMLA) peuvent affecter la rétine et entrainer une perte progressive de la vision centrale ou périphérique. Il est essentiel de réaliser un examen régulier du fond de l'oeil chez votre ophtalmologue, afin de dépister et traiter précocément d'éventuelles maladies rétiniennes. Plusieurs options thérapeutiques existent, incluant le laser rétinien et les injections intravitréennes (IVT).",
    image: serviceRetina,
  },
  {
    icon: Shield,
    title: "Glaucome",
    description: "Le glaucome est une maladie chronique évolutive et fréquente affectant le nerf optique et entrainant une détérioration progressive et irréversible de la vision, pouvant aller jusqu'à la cécité. Son principal facteur de risque est l'augmentation de la pression intra-oculaire. Les symptômes n'apparaissent qu'à un stade tardif de la maladie, d'où l'interêt d'un examen de depistage régulier chez votre ophtalmologue à partir de 40 ans, surtout en cas d'antécédent familial de glaucome. Un diagnostic précoce et une prise en charge adaptée ralentissent l'évolution de la maladie et améliorent considérablement son pronostic.",
    image: serviceGlaucoma,
  },
  {
    icon: Activity,
    title: "Ophtalmologie pédiatrique",
    description: "Notre cabinet propose des soins spécialisés en ophtalmologie pédiatrique aux enfants de tous âges. Nous prenons en charge les troubles de la vision, les strabismes, les amblyopies, ainsi que les affections oculaires aigues. Nous réalisons des examens et des traitements adaptés à chaque enfant, avec un suivi régulier et personnalisé. Nous mettons en oeuvre tous les moyens nécessaires pour créer un environnement rassurant pour nos jeunes patients. Notre objectif est de préserver et d'améliorer la santé oculaire des enfants à chaque étape de leur développement.",
    image: servicePediatric,
  },
  {
    icon: Glasses,
    title: "Lentilles de contact",
    description: "Nous pratiquons au sein du cabinet l'adaptation des patients en lentilles de contact souples, rigides cornéennes et sclérales, ainsi qu'en lentilles d'orthokératologie. Nous proposons à chaque patient une solution sur mesure et adaptée en fonction de son défaut de vision. Nous expliquons ensuite au patient comment manipuler et entretenir ses lentilles afin d'assurer un port confortable et sécurisé.",
    image: serviceLenses,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 animate-float">
          <Sparkles className="w-32 h-32 text-medical-red" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "1.5s" }}>
          <Eye className="w-24 h-24 text-medical-red" />
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-red/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medical-red to-medical-red-dark flex items-center justify-center shadow-lg shadow-medical-red/30">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Nos <span className="bg-gradient-to-r from-medical-red to-primary bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Des soins complets et personnalisés pour préserver votre vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/é/g, 'e')}
              className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-medical-red/30 bg-card overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-medical-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Floating glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-medical-red/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-56 overflow-hidden">
                <OptimizedImage 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Creative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-95 group-hover:opacity-80 transition-opacity" />
                
                {/* Icon with enhanced styling */}
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-medical-red to-medical-red-dark backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-medical-red/40">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-medical-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="relative z-20">
                <CardTitle className="text-xl group-hover:text-medical-red transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-20">
                <CardDescription className="text-base leading-relaxed">
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
