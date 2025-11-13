import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicExamRoom from "@/assets/clinic-exam-room.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";
import clinicOffice from "@/assets/clinic-office.jpg";
import clinicTreatmentRoom from "@/assets/clinic-treatment-room.jpg";
import clinicWaitingRoom from "@/assets/clinic-waiting-room.jpg";

const carouselImages = [
  {
    src: clinicReception,
    alt: "Réception Cabinet Dr Kenza Tazi - Accueil chaleureux et moderne",
    title: "Réception"
  },
  {
    src: clinicWaitingRoom,
    alt: "Salle d'attente confortable avec design élégant",
    title: "Salle d'Attente"
  },
  {
    src: clinicExamRoom,
    alt: "Salle d'examen ophtalmologique équipée de technologies avancées",
    title: "Salle d'Examen"
  },
  {
    src: clinicOffice,
    alt: "Cabinet de consultation Dr Kenza Tazi avec équipement moderne",
    title: "Cabinet de Consultation"
  },
  {
    src: clinicTreatmentRoom,
    alt: "Salle de traitement et soins ophtalmologiques spécialisés",
    title: "Salle de Soins"
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-medical-red/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="text-primary">Cabinet</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez nos installations modernes et notre équipe dédiée
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Decorative glow behind carousel */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-medical-red/20 to-primary/20 rounded-3xl blur-2xl -z-10 animate-pulse-soft" />
          
          {/* Main carousel container with red frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-medical-red group">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-medical-red-light z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-medical-red-light z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-medical-red-light z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-medical-red-light z-10 pointer-events-none" />
            
            {/* Carousel images */}
            <div className="relative h-[500px] md:h-[600px]">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-red/40 via-transparent to-transparent" />
                  
                  {/* Image title overlay */}
                  <div className="absolute bottom-8 left-8 z-10">
                    <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm hover:bg-background border-medical-red/50 shadow-xl z-20 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm hover:bg-background border-medical-red/50 shadow-xl z-20 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </Button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-medical-red w-8 shadow-lg shadow-medical-red/50"
                      : "bg-white/60 hover:bg-white/80 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-medical-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Floating red glow effects */}
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-medical-red/20 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/15 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
