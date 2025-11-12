import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Animation variables
    let rotation = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Draw 3D eye-like sphere
    const drawEye = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;

      // Apply rotation and mouse interaction
      rotation += 0.005;
      const tiltX = mouseY * 0.2;
      const tiltY = mouseX * 0.2;

      // Outer sphere (white of the eye)
      const gradient1 = ctx.createRadialGradient(
        centerX - 30,
        centerY - 30,
        0,
        centerX,
        centerY,
        radius
      );
      gradient1.addColorStop(0, "#ffffff");
      gradient1.addColorStop(0.7, "#f5f5f5");
      gradient1.addColorStop(1, "#e5e5e5");

      ctx.beginPath();
      ctx.arc(centerX + tiltY * 20, centerY + tiltX * 20, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient1;
      ctx.fill();
      ctx.strokeStyle = "rgba(220, 38, 38, 0.1)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Iris (red medical theme)
      const irisRadius = radius * 0.4;
      const gradient2 = ctx.createRadialGradient(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        0,
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        irisRadius
      );
      gradient2.addColorStop(0, "#dc2626");
      gradient2.addColorStop(0.5, "#ef4444");
      gradient2.addColorStop(1, "#b91c1c");

      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        irisRadius,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = gradient2;
      ctx.fill();

      // Pupil (dark center)
      const pupilRadius = irisRadius * 0.4;
      const gradient3 = ctx.createRadialGradient(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        0,
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        pupilRadius
      );
      gradient3.addColorStop(0, "#1a1a1a");
      gradient3.addColorStop(1, "#000000");

      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        pupilRadius,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = gradient3;
      ctx.fill();

      // Light reflection
      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30 - pupilRadius * 0.3,
        centerY + tiltX * 30 - pupilRadius * 0.3,
        pupilRadius * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.fill();

      // Orbiting particles
      for (let i = 0; i < 8; i++) {
        const angle = (rotation + (i * Math.PI * 2) / 8) * 2;
        const orbitRadius = radius * 1.3;
        const x = centerX + Math.cos(angle) * orbitRadius + tiltY * 10;
        const y = centerY + Math.sin(angle) * orbitRadius + tiltX * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${0.3 + Math.sin(rotation * 3 + i) * 0.2})`;
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      drawEye();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-medical-red-light">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Excellence en Ophtalmologie
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dr <span className="text-primary">Kenza</span> Tazi
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Spécialiste en chirurgie oculaire et soins avancés de la vision.
              Technologie de pointe pour votre santé visuelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                Prendre Rendez-vous
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5">
                Nos Services
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Patients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Équipement Moderne</div>
              </div>
            </div>
          </div>

          {/* Right content - 3D Canvas */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="w-full h-[600px] rounded-2xl shadow-2xl"
              style={{ background: "transparent" }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-soft animation-delay-500" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
