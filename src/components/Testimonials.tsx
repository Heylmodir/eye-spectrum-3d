import { Star, Quote, Eye, Sparkles, Scan, Focus, Camera, Glasses } from "lucide-react";
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
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Témoignages de nos <span className="text-medical-red">Patients</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les expériences de nos patients et leurs parcours de guérison
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border hover:border-medical-red/30 group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header with avatar and info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      {(() => {
                        const EyeIcon = eyeIcons[index % eyeIcons.length];
                        return (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-red to-medical-red-dark flex items-center justify-center text-white border-2 border-medical-red/20 group-hover:border-medical-red/50 transition-all group-hover:scale-110 duration-300">
                            <EyeIcon className="w-8 h-8" />
                          </div>
                        );
                      })()}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-medical-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Quote className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.age} ans {testimonial.parent && "(Parent)"}
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-medical-red text-medical-red"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Treatment badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-medical-red/10 text-medical-red rounded-full text-xs font-medium">
                      {testimonial.treatment}
                    </span>
                  </div>

                  {/* Review text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    "{testimonial.review}"
                  </p>

                  {/* Date */}
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats section */}
        <AnimatedSection animation="fade-up" delay={200} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-red mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-red mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Patients traités</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-red mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Années d&apos;expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-red mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
