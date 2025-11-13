import { Star, Quote, Eye, Sparkles, Scan, Focus, Camera, Glasses, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { OptimizedImage } from "@/components/ui/optimized-image";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import review5 from "@/assets/review-5.jpg";
import review6 from "@/assets/review-6.jpg";
import review7 from "@/assets/review-7.jpg";
import review8 from "@/assets/review-8.jpg";
import review9 from "@/assets/review-9.jpg";
import review10 from "@/assets/review-10.jpg";

const eyeIcons = [Eye, Sparkles, Scan, Focus, Camera, Glasses];

const testimonials = [
  {
    name: "Youssef ID",
    badge: "Local Guide · 17 avis",
    rating: 5,
    initials: "YI",
    review: "Super consultation avec Dr Kenza TAZI ! Très ponctuelle, à l'écoute et vraiment compétente. Le cabinet est propre et bien organisé. Je recommande sans hésitation !",
    date: "Il y a 3 mois",
    image: review1
  },
  {
    name: "Hajar Mestari",
    badge: "5 avis",
    rating: 5,
    initials: "HM",
    review: "Docteur tazi est à l'écoute, patiente et très professionnelle. Son cabinet est neuf et très bien équipé. J'ai beaucoup apprécié sa disponibilité et son expertise.",
    date: "Il y a 7 mois",
    image: review2
  },
  {
    name: "Mohamed Ghali Tazi",
    badge: "6 avis",
    rating: 5,
    initials: "MG",
    review: "J'ai effectué une consultation chez le docteur Tazi et je ne peux que la recommander. Elle a été minutieuse, professionnelle et très compétente.",
    date: "Il y a 5 mois",
    image: review3
  },
  {
    name: "Said Ziad",
    badge: "2 avis",
    rating: 5,
    initials: "SZ",
    review: "Vraiment c'est très réussi, docteur tazi été vraiment professionnelle, compétente et prend tout son temps pour diagnostiquer le cas avec précision.",
    date: "Il y a 5 mois",
    image: review4
  },
  {
    name: "Mehdi Berrada",
    badge: "7 avis",
    rating: 5,
    initials: "MB",
    review: "Super ophtalmo sur Rabat, vraiment rien à redire. Tout s'est bien passé du début à la fin : prise en charge rapide, médecin à l'écoute, très professionnelle.",
    date: "Il y a 3 mois",
    image: review5
  },
  {
    name: "Jean-Baptiste PERE",
    badge: "5 avis",
    rating: 5,
    initials: "JP",
    review: "Superbe cabinet propre et accueillant. Je recommande vivement. L'équipement est moderne et l'atmosphère est très professionnelle.",
    date: "Il y a 7 mois",
    image: review6
  },
  {
    name: "Meriem Daoudi",
    badge: "5 avis",
    rating: 5,
    initials: "MD",
    review: "Excellent accueil, Dr Tazi a fait preuve de beaucoup de professionnalisme et de patience lors de ma consultation. Une vraie experte dans son domaine.",
    date: "Il y a 8 mois",
    image: review7
  },
  {
    name: "Ghada Loukili Aouali",
    badge: "2 avis",
    rating: 5,
    initials: "GL",
    review: "L'accueil est chaleureux et l'atmosphère du cabinet est particulièrement apaisante. Dr Tazi est très compétente et professionnelle, je la recommande.",
    date: "Il y a 10 mois",
    image: review8
  },
  {
    name: "Taha Mhader",
    badge: "2 avis",
    rating: 5,
    initials: "TM",
    review: "Je recommande le docteur Tazi de vive voix. Elle a été très consciencieuse et appliquée, a pris son temps. Le cabinet est très agréable.",
    date: "Il y a 5 mois",
    image: review9
  },
  {
    name: "Zineb TAZI",
    badge: "3 avis",
    rating: 5,
    initials: "ZT",
    review: "Excellent cabinet d'ophtalmologie, accueil sympathique et médecin très professionnelle. Les locaux sont neufs et très bien équipés. La qualité des soins est remarquable.",
    date: "Il y a 9 mois",
    image: review10
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-medical-red/5 to-background">
      {/* Animated eye pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-float">
          <Eye className="w-24 h-24 text-medical-red" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-20 h-20 text-medical-red" />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-float" style={{ animationDelay: "2s" }}>
          <Eye className="w-28 h-28 text-medical-red" />
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-medical-red/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medical-red to-medical-red-dark flex items-center justify-center shadow-lg shadow-medical-red/30">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Témoignages de nos{" "}
              <span className="bg-gradient-to-r from-medical-red to-primary bg-clip-text text-transparent">
                Patients
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Découvrez les expériences de nos patients et leurs parcours de guérison
          </p>
        </AnimatedSection>

        {/* Testimonials Grid with creative cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <Card className="relative h-full overflow-hidden hover:shadow-2xl hover:shadow-medical-red/30 transition-all duration-500 hover:-translate-y-3 group border-2 border-medical-red/40 hover:border-medical-red">
                {/* Google review screenshot */}
                <div className="relative w-full h-64 overflow-hidden">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={`Avis Google de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-medical-red/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-medical-red/20 to-transparent rounded-tr-full" />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-medical-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating glow effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-medical-red/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  {/* Eye icon avatar */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      {(() => {
                        const EyeIcon = eyeIcons[index % eyeIcons.length];
                        return (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-red to-medical-red-dark flex items-center justify-center text-white border-2 border-medical-red/20 group-hover:border-medical-red/50 transition-all group-hover:scale-110 group-hover:rotate-12 duration-500 shadow-lg shadow-medical-red/30">
                            <EyeIcon className="w-8 h-8" />
                          </div>
                        );
                      })()}
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-medical-red rounded-full flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                        <Quote className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-medical-red transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.badge}
                      </p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-medical-red text-medical-red animate-pulse-soft"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>


                  {/* Review text with quote marks */}
                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-medical-red/20" />
                    <p className="text-muted-foreground text-sm leading-relaxed pl-6 italic">
                      {testimonial.review}
                    </p>
                    <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-medical-red/20 rotate-180" />
                  </div>

                  {/* Date with decorative line */}
                  <div className="flex items-center gap-3 pt-4 border-t border-medical-red/10">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-medical-red/30 to-transparent" />
                    <p className="text-xs text-muted-foreground font-medium">
                      {testimonial.date}
                    </p>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-medical-red/30 to-transparent" />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats section with creative design */}
        <AnimatedSection animation="fade-up" delay={200} className="mt-20">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-medical-red/5 via-medical-red/10 to-medical-red/5 rounded-3xl blur-2xl" />
            
            <div className="relative grid grid-cols-2 gap-8 max-w-3xl mx-auto p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-medical-red/20">
              {[
                { value: "100%", label: "Taux de satisfaction", icon: Heart },
                { value: "5/5", label: "Note moyenne", icon: Star },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-default">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-medical-red to-medical-red-dark flex items-center justify-center shadow-lg shadow-medical-red/30 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-medical-red to-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
