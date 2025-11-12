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
      <Hero3D />
      <ImageCarousel />
      <Services />
      <Specialties />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
