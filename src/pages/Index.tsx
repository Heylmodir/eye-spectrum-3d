import Hero3D from "@/components/Hero3D";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero3D />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
