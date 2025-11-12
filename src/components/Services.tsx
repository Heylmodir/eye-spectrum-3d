import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Scan, Glasses, Activity, Microscope, Shield } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Chirurgie de la cataracte",
    description: "Retrait du cristallin opaque et remplacement par une lentille intraoculaire artificielle. Technique de phacoémulsification pour restaurer une vision claire.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcNWWCYE5iip37MhxH1gE1Qfr7sNjtrms8izhw2cAI3J35KPupxhIZlhQLk5TjTjANuZ-LB818rBZ0MmgCi0S0gCe7FoTtBByOVeePMw9RM13y1h5dDmgq11iqFU62LypL-c1EW0H38Re5Bsq6PpCf4Yimq2sC6S3KJByHyLxrA-9FE6KrSyEHP16AAoBvfm7Ocex0SlsG7ZFRckMbCZpynPgieHDZBXUD46L8=w1280",
  },
  {
    icon: Scan,
    title: "Chirurgie réfractive au laser",
    description: "Correction de la myopie, hypermétropie et astigmatisme. Remodelage de la cornée au laser pour une vision nette sans lunettes.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcglgzQrfC26YTJoNVqr3HH53cRvwG29O4tiAgfwc9WrfNo1GlC2dOWYvQ0MgtyrRWHq_wG92pdC5l9CkCTR-ZgRgSwMg9MKn0flm0dOlnD0lHxR4Oj8TLi59Hd_QXkf4ZlhxEKcTzIybECx-0Y6kNK-0MBngE62i8NAMZYYAXRIEd8ofRpF6Fdo2NOxWU4TToxx-TmOEh_KdwVomleVbdaK5dph2qZnnq2LHc=w1280",
  },
  {
    icon: Microscope,
    title: "Maladies de la rétine",
    description: "Traitement de la rétinopathie diabétique et DMLA. Laser rétinien et injections intravitréennes pour préserver votre vision.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcMEB3pIxLSFmomBCGhgdGrxw_XQDhEe47bm0yrYnN27JyoyHri_Db5Sq2rmJcPgM1JKhH-cNRbIXMUCdio1_PgMBT4vQX8T_z9WUgp5ndzPg0QJ7mjiEls1615cEWCpN6jfdLbHJ9frbtKhexF-RNb7vLmh6UmtdeKnwFkj0ENis49dPp66Wn19mU2PIaGK0nJJ3f8QKxFOGqIKXVbwTrz-ADNIysWWUSlAcI=w1280",
  },
  {
    icon: Shield,
    title: "Glaucome",
    description: "Dépistage et prise en charge du glaucome. Diagnostic précoce pour ralentir l'évolution et préserver le nerf optique.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcIwC09faAEUa6_6WPWlY-7mJ1VTtXdR8oRmJAoWSQyO_q0WiQ-A_pNU2_UUAOufHq0WD0SmJRY8vJC98oeFQYGe7A8KmtuTutUxQ4lwNFtkdLhrom0R_e6pZbE0QYVGz94lg7NqHw0Q8pbXwZXJtwtIDW5cnHEZKbNwvorZU-YQJTgYpGeiXYlAGdKZqLeBPDIxvgH4GzTOlvJ22kmKGBwUnqb7zOD3EXJi6k=w1280",
  },
  {
    icon: Activity,
    title: "Ophtalmologie pédiatrique",
    description: "Soins spécialisés pour enfants. Prise en charge des troubles visuels, strabismes et amblyopies dans un environnement rassurant.",
    image: "https://lh3.googleusercontent.com/sitesv/AAzXCkeodhbWHtJQlrWmn2A64Xukeb0-jtw9scClqCyrZp6AbsbHLG6swr2SHTZ52eRnGTRPN525hzql-I1kn30A3BqO0bPrGOVoAliHbyBwzC_gR63rdkJby7kp-mOtIo8JaGzqXVIsSejl6wcawvSwee7nTE7oJFeQhyeRsAtymaUMiMu2YM7UmmuHHANj5lc7FDh7s78MpL32xGCtC263t55gad-Raw7WkKBHX1c=w1280",
  },
  {
    icon: Glasses,
    title: "Lentilles de contact",
    description: "Adaptation personnalisée en lentilles souples, rigides et d'orthokératologie. Solutions sur mesure pour chaque défaut visuel.",
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
