import { Building2 } from "lucide-react";
import clinicExamRoom from "@/assets/clinic-exam-room.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";
import clinicOffice from "@/assets/clinic-office.jpg";
import clinicTreatmentRoom from "@/assets/clinic-treatment-room.jpg";
import clinicWaitingRoom from "@/assets/clinic-waiting-room.jpg";

const ClinicGallery = () => {
  const galleryImages = [
    {
      src: clinicReception,
      alt: "Réception Cabinet Dr Kenza Tazi - Accueil chaleureux",
      title: "Réception"
    },
    {
      src: clinicWaitingRoom,
      alt: "Salle d'attente confortable avec design moderne",
      title: "Salle d'Attente"
    },
    {
      src: clinicExamRoom,
      alt: "Salle d'examen ophtalmologique équipée",
      title: "Salle d'Examen"
    },
    {
      src: clinicOffice,
      alt: "Cabinet de consultation Dr Kenza Tazi",
      title: "Cabinet de Consultation"
    },
    {
      src: clinicTreatmentRoom,
      alt: "Salle de traitement et soins ophtalmologiques",
      title: "Salle de Soins"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Découvrez Notre Espace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="text-primary">Cabinet</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Un environnement moderne et accueillant pour vos soins ophtalmologiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Image container with red frame */}
              <div className="relative overflow-hidden rounded-xl border-4 border-medical-red shadow-2xl aspect-[4/3]">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-medical-red-light z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-medical-red-light z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-medical-red-light z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-medical-red-light z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-medical-red/60 via-medical-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Floating glow effect */}
              <div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-medical-red/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                style={{ animationDelay: `${index * 50}ms` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-medical-red/10 rounded-full blur-3xl -z-10 animate-pulse-soft" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default ClinicGallery;
