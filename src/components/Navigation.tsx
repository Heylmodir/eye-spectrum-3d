import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Accueil", id: "accueil" },
    { label: "Services", id: "services" },
    { label: "Prendre Rendez-vous", id: "contact" },
    { label: "Horaires", id: "horaires" },
    { label: "À Propos", id: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("accueil")}
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medical-red to-medical-red-dark flex items-center justify-center shadow-lg group-hover:shadow-medical-red/50 transition-all">
              <span className="text-white font-bold text-xl">KT</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">Dr Kenza Tazi</h1>
              <p className="text-xs text-muted-foreground">Ophtalmologue</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-medical-red hover:bg-medical-red/10 transition-colors"
              >
                {item.label}
              </Button>
            ))}
            <a
              href="https://www.instagram.com/dr.ktazi"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-medical-red text-medical-red hover:bg-medical-red hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-lg shadow-xl">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-foreground hover:text-medical-red hover:bg-medical-red/10 transition-colors"
                >
                  {item.label}
                </Button>
              ))}
              <a
                href="https://www.instagram.com/dr.ktazi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2"
              >
                <Button
                  variant="outline"
                  className="w-full border-medical-red text-medical-red hover:bg-medical-red hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
