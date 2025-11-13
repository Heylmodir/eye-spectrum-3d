import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import ImageCarousel from "@/components/ImageCarousel";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import ClinicGallery from "@/components/ClinicGallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import HoursAndInfo from "@/components/HoursAndInfo";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section id="accueil">
        <Hero3D />
        <AnimatedSection animation="fade-up" delay={100}>
          <ImageCarousel />
        </AnimatedSection>
      </section>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="services">
          <Services />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Specialties />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="about">
          <About />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="cabinet">
          <ClinicGallery />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="contact">
          <Contact />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <HoursAndInfo />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <LocationMap />
      </AnimatedSection>
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
