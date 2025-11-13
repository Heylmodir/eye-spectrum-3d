import { Star, Quote, Eye, Sparkles, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useEffect, useState } from "react";
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

const reviewImages = [
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review10
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

        {/* Auto-scrolling carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[500px] overflow-hidden rounded-2xl border-2 border-medical-red/40 shadow-2xl shadow-medical-red/20">
            {reviewImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <OptimizedImage
                  src={image}
                  alt={`Avis Google ${index + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviewImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-medical-red w-8"
                    : "bg-medical-red/30 hover:bg-medical-red/60"
                }`}
                aria-label={`Voir l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
