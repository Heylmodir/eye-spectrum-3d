import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import ImageCarousel from "@/components/ImageCarousel";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section id="accueil">
        <Hero3D />
        <ImageCarousel />
      </section>
      <section id="services">
        <Services />
        <Specialties />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="horaires">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-medical-red to-medical-red-dark bg-clip-text text-transparent">
            Horaires d'ouverture
          </h2>
          <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8 shadow-lg">
            <p className="text-muted-foreground mb-4">Les horaires seront bientôt disponibles</p>
            <p className="text-sm text-muted-foreground">Contactez-nous pour plus d'informations</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Index;
