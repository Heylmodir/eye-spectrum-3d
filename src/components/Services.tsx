import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Scan, Glasses, Activity, Microscope, Shield } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Chirurgie de la cataracte",
    description: "La chirurgie de la cataracte consiste à retirer le cristallin devenu opaque, causant une vision floue, et à le remplacer par une lentille intraoculaire artificielle. Une petite incision est pratiquée sur la cornée afin d'accéder au cristallin qui est ensuite fragmenté par des ultrasons au moyen d'une technique appelée phacoémulsification. Un cristallin artificiel est alors implanté dans l'oeil pour restaurer la clarté de la vision.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcNWWCYE5iip37MhxH1gE1Qfr7sNjtrms8izhw2cAI3J35KPupxhIZlhQLk5TjTjANuZ-LB818rBZ0MmgCi0S0gCe7FoTtBByOVeePMw9RM13y1h5dDmgq11iqFU62LypL-c1EW0H38Re5Bsq6PpCf4Yimq2sC6S3KJByHyLxrA-9FE6KrSyEHP16AAoBvfm7Ocex0SlsG7ZFRckMbCZpynPgieHDZBXUD46L8=w1280",
  },
  {
    icon: Scan,
    title: "Chirurgie réfractive au laser",
    description: "La chirurgie réfractive au laser vise à corriger les troubles de la vision comme la myopie, l'hypermétropie et l'astigmatisme. Elle consiste à remodeler la cornée à l'aide d'un laser pour améliorer la focalisation de la lumière sur la rétine. L'intervention se fait généralement sous anésthésie locale et dure peu de temps. Plusieurs techniques sont disponibles et le médecin établi un bilan préopératoire complet afin d'opter pour la technique la plus adaptée à chaque patient. Les résultats sont souvent durables et permettent de réduire ou de supprimer la dépendance aux lunettes.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcglgzQrfC26YTJoNVqr3HH53cRvwG29O4tiAgfwc9WrfNo1GlC2dOWYvQ0MgtyrRWHq_wG92pdC5l9CkCTR-ZgRgSwMg9MKn0flm0dOlnD0lHxR4Oj8TLi59Hd_QXkf4ZlhxEKcTzIybECx-0Y6kNK-0MBngE62i8NAMZYYAXRIEd8ofRpF6Fdo2NOxWU4TToxx-TmOEh_KdwVomleVbdaK5dph2qZnnq2LHc=w1280",
  },
  {
    icon: Microscope,
    title: "Maladies de la rétine",
    description: "De nombreuses pathologies telles que la rétinopathie diabétique ou encore la dégénérescence maculaire liée à l'age (DMLA) peuvent affecter la rétine et entrainer une perte progressive de la vision centrale ou périphérique. Il est essentiel de réaliser un examen régulier du fond de l'oeil chez votre ophtalmologue, afin de dépister et traiter précocément d'éventuelles maladies rétiniennes. Plusieurs options thérapeutiques existent, incluant le laser rétinien et les injections intravitréennes (IVT).",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcMEB3pIxLSFmomBCGhgdGrxw_XQDhEe47bm0yrYnN27JyoyHri_Db5Sq2rmJcPgM1JKhH-cNRbIXMUCdio1_PgMBT4vQX8T_z9WUgp5ndzPg0QJ7mjiEls1615cEWCpN6jfdLbHJ9frbtKhexF-RNb7vLmh6UmtdeKnwFkj0ENis49dPp66Wn19mU2PIaGK0nJJ3f8QKxFOGqIKXVbwTrz-ADNIysWWUSlAcI=w1280",
  },
  {
    icon: Shield,
    title: "Glaucome",
    description: "Le glaucome est une maladie chronique évolutive et fréquente affectant le nerf optique et entrainant une détérioration progressive et irréversible de la vision, pouvant aller jusqu'à la cécité. Son principal facteur de risque est l'augmentation de la pression intra-oculaire. Les symptômes n'apparaissent qu'à un stade tardif de la maladie, d'où l'interêt d'un examen de depistage régulier chez votre ophtalmologue à partir de 40 ans, surtout en cas d'antécédent familial de glaucome. Un diagnostic précoce et une prise en charge adaptée ralentissent l'évolution de la maladie et améliorent considérablement son pronostic.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcIwC09faAEUa6_6WPWlY-7mJ1VTtXdR8oRmJAoWSQyO_q0WiQ-A_pNU2_UUAOufHq0WD0SmJRY8vJC98oeFQYGe7A8KmtuTutUxQ4lwNFtkdLhrom0R_e6pZbE0QYVGz94lg7NqHw0Q8pbXwZXJtwtIDW5cnHEZKbNwvorZU-YQJTgYpGeiXYlAGdKZqLeBPDIxvgH4GzTOlvJ22kmKGBwUnqb7zOD3EXJi6k=w1280",
  },
  {
    icon: Activity,
    title: "Ophtalmologie pédiatrique",
    description: "Notre cabinet propose des soins spécialisés en ophtalmologie pédiatrique aux enfants de tous âges. Nous prenons en charge les troubles de la vision, les strabismes, les amblyopies, ainsi que les affections oculaires aigues. Nous réalisons des examens et des traitements adaptés à chaque enfant, avec un suivi régulier et personnalisé. Nous mettons en oeuvre tous les moyens nécessaires pour créer un environnement rassurant pour nos jeunes patients. Notre objectif est de préserver et d'améliorer la santé oculaire des enfants à chaque étape de leur développement.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkeodhbWHtJQlrWmn2A64Xukeb0-jtw9scClqCyrZp6AbsbHLG6swr2SHTZ52eRnGTRPN525hzql-I1kn30A3BqO0bPrGOVoAliHbyBwzC_gR63rdkJby7kp-mOtIo8JaGzqXVIsSejl6wcawvSwee7nTE7oJFeQhyeRsAtymaUMiMu2YM7UmmuHHANj5lc7FDh7s78MpL32xGCtC263t55gad-Raw7WkKBHX1c=w1280",
  },
  {
    icon: Glasses,
    title: "Lentilles de contact",
    description: "Nous pratiquons au sein du cabinet l'adaptation des patients en lentilles de contact souples, rigides cornéennes et sclérales, ainsi qu'en lentilles d'orthokératologie. Nous proposons à chaque patient une solution sur mesure et adaptée en fonction de son défaut de vision. Nous expliquons ensuite au patient comment manipuler et entretenir ses lentilles afin d'assurer un port confortable et sécurisé.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkezk7LBGByQ53356NZY_a7EkHHVcxbsn7_sIi3w-s_T__bADVegLr32fgolWXdEzSvxyKqo_Biazk_9nfosWv28ZpKiSLK1OG5ynNi4A4mcJdyafb8uPGqxzyU9czBaHHO6wBkYO4xsrTFf63fbtACxSJRhY6cztpWtYPWngL75SgQLF25wcl83sGtirXhY41vmjykYh736l8S-DT2sfCh1674A1jCrgp9yhDE=w1280",
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
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border/50 hover:border-primary/50 bg-card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
