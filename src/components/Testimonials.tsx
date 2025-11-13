import { Star, Quote, Eye, Sparkles, Scan, Focus, Camera, Glasses, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const eyeIcons = [Eye, Sparkles, Scan, Focus, Camera, Glasses];

const testimonials = [
  {
    name: "Fatima Benali",
    age: 45,
    treatment: "Chirurgie de la cataracte",
    rating: 5,
    initials: "FB",
    review: "Après ma chirurgie de la cataracte, je vois à nouveau clairement ! Dr Tazi a été exceptionnelle, très professionnelle et rassurante. L'équipe est merveilleuse et les installations sont ultra-modernes. Je recommande vivement !",
    date: "Il y a 2 mois"
  },
  {
    name: "Ahmed Idrissi",
    age: 32,
    treatment: "Chirurgie réfractive au laser",
    rating: 5,
    initials: "AI",
    review: "Plus besoin de lunettes ! La chirurgie réfractive a changé ma vie. Dr Tazi m'a expliqué chaque étape avec patience. Le résultat est parfait, ma vision est impeccable. Merci infiniment !",
    date: "Il y a 3 mois"
  },
  {
    name: "Samira El Amrani",
    age: 58,
    treatment: "Traitement du glaucome",
    rating: 5,
    initials: "SE",
    review: "Grâce au suivi régulier et au traitement du Dr Tazi, mon glaucome est bien contrôlé. Elle est très attentive et prend le temps d'écouter ses patients. Je me sens en confiance.",
    date: "Il y a 1 mois"
  },
  {
    name: "Youssef Tahiri",
    age: 8,
    treatment: "Ophtalmologie pédiatrique",
    rating: 5,
    initials: "YT",
    review: "Mon fils avait peur des médecins, mais Dr Tazi a su le mettre à l'aise immédiatement. Elle est patiente, douce et très compétente avec les enfants. Son strabisme est maintenant corrigé !",
    date: "Il y a 4 mois",
    parent: true
  },
  {
    name: "Leila Benjelloun",
    age: 52,
    treatment: "Chirurgie esthétique du regard",
    rating: 5,
    initials: "LB",
    review: "Résultat naturel et élégant ! Dr Tazi a un véritable sens esthétique. La blépharoplastie a rajeuni mon regard sans excès. Je suis ravie du résultat et de l'accompagnement post-opératoire.",
    date: "Il y a 5 mois"
  },
  {
    name: "Karim Aziz",
    age: 28,
    treatment: "Adaptation lentilles de contact",
    rating: 5,
    initials: "KA",
    review: "L'adaptation de mes lentilles sclérales s'est parfaitement déroulée. Dr Tazi m'a appris toutes les bonnes pratiques d'entretien. Le confort est exceptionnel !",
    date: "Il y a 6 semaines"
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
              <Card className="relative h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border-2 border-transparent hover:border-medical-red/30">
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
                        {testimonial.age} ans {testimonial.parent && "(Parent)"}
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

                  {/* Treatment badge */}
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-medical-red/10 to-medical-red/20 text-medical-red rounded-full text-xs font-semibold border border-medical-red/20 group-hover:border-medical-red/40 transition-colors">
                      {testimonial.treatment}
                    </span>
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
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-medical-red/20">
              {[
                { value: "98%", label: "Taux de satisfaction", icon: Heart },
                { value: "5000+", label: "Patients traités", icon: Users },
                { value: "15+", label: "Années d'expérience", icon: Award },
                { value: "4.9/5", label: "Note moyenne", icon: Star },
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
