import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import ImageCarousel from "@/components/ImageCarousel";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import DrivingLicenseMedical from "@/components/DrivingLicenseMedical";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
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
      </section>
      
      {/* About - establish credibility */}
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="about">
          <About />
        </section>
      </AnimatedSection>
      
      {/* Cabinet photos - visual showcase after about */}
      <AnimatedSection animation="fade-up" delay={0}>
        <ImageCarousel />
      </AnimatedSection>
      
      {/* Services - show what you offer */}
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="services">
          <Services />
        </section>
      </AnimatedSection>
      
      {/* Specialties - detailed expertise */}
      <AnimatedSection animation="fade-up" delay={100}>
        <Specialties />
      </AnimatedSection>
      
      {/* Driving License Medical - certified service */}
      <AnimatedSection animation="fade-up" delay={0}>
        <DrivingLicenseMedical />
      </AnimatedSection>
      
      {/* Testimonials - social proof */}
      <AnimatedSection animation="fade-up" delay={0}>
        <Testimonials />
      </AnimatedSection>
      
      {/* Contact form - primary conversion point */}
      <AnimatedSection animation="fade-up" delay={0}>
        <section id="contact">
          <Contact />
        </section>
      </AnimatedSection>
      
      {/* Location - practical information */}
      <AnimatedSection animation="fade-up" delay={0}>
        <LocationMap />
      </AnimatedSection>
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
