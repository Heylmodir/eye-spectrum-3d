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

    // Draw 3D eye-like sphere with enhanced depth
    const drawEye = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.28;

      // Apply rotation and mouse interaction
      rotation += 0.005;
      const tiltX = mouseY * 0.3;
      const tiltY = mouseX * 0.3;

      // Shadow behind the eye for depth
      ctx.save();
      ctx.filter = "blur(20px)";
      ctx.beginPath();
      ctx.arc(centerX + 8, centerY + 12, radius * 1.05, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fill();
      ctx.restore();

      // Outer sphere (sclera - white of the eye) with 3D shading
      const scleraGradient = ctx.createRadialGradient(
        centerX - radius * 0.3 + tiltY * 15,
        centerY - radius * 0.3 + tiltX * 15,
        radius * 0.2,
        centerX + tiltY * 20,
        centerY + tiltX * 20,
        radius * 1.2
      );
      scleraGradient.addColorStop(0, "#ffffff");
      scleraGradient.addColorStop(0.5, "#f8f8f8");
      scleraGradient.addColorStop(0.85, "#e8e8e8");
      scleraGradient.addColorStop(1, "#d0d0d0");

      ctx.beginPath();
      ctx.arc(centerX + tiltY * 20, centerY + tiltX * 20, radius, 0, Math.PI * 2);
      ctx.fillStyle = scleraGradient;
      ctx.fill();
      
      // Subtle blood vessels
      ctx.save();
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + rotation * 0.2;
        const startX = centerX + Math.cos(angle) * radius * 0.3;
        const startY = centerY + Math.sin(angle) * radius * 0.3;
        const endX = centerX + Math.cos(angle) * radius * 0.9;
        const endY = centerY + Math.sin(angle) * radius * 0.9;
        
        ctx.strokeStyle = "#dc2626";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(
          centerX + Math.cos(angle + 0.5) * radius * 0.6,
          centerY + Math.sin(angle + 0.5) * radius * 0.6,
          endX,
          endY
        );
        ctx.stroke();
      }
      ctx.restore();

      // Limbus (border around iris) for depth
      const limbusGradient = ctx.createRadialGradient(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        radius * 0.42,
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        radius * 0.52
      );
      limbusGradient.addColorStop(0, "rgba(80, 80, 80, 0)");
      limbusGradient.addColorStop(0.5, "rgba(60, 60, 60, 0.3)");
      limbusGradient.addColorStop(1, "rgba(40, 40, 40, 0.1)");

      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        radius * 0.52,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = limbusGradient;
      ctx.fill();

      // Iris with enhanced detail and texture
      const irisRadius = radius * 0.42;
      const irisGradient = ctx.createRadialGradient(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        0,
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        irisRadius
      );
      irisGradient.addColorStop(0, "#ff6b6b");
      irisGradient.addColorStop(0.2, "#ef4444");
      irisGradient.addColorStop(0.4, "#dc2626");
      irisGradient.addColorStop(0.7, "#b91c1c");
      irisGradient.addColorStop(1, "#7f1d1d");

      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        irisRadius,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = irisGradient;
      ctx.fill();

      // Iris texture pattern (radial lines)
      ctx.save();
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < 36; i++) {
        const angle = (Math.PI * 2 * i) / 36;
        ctx.strokeStyle = i % 2 === 0 ? "#7f1d1d" : "#991b1b";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(
          centerX + tiltY * 30 + Math.cos(angle) * irisRadius * 0.2,
          centerY + tiltX * 30 + Math.sin(angle) * irisRadius * 0.2
        );
        ctx.lineTo(
          centerX + tiltY * 30 + Math.cos(angle) * irisRadius * 0.95,
          centerY + tiltX * 30 + Math.sin(angle) * irisRadius * 0.95
        );
        ctx.stroke();
      }
      ctx.restore();

      // Inner iris ring for depth
      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        irisRadius * 0.3,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = "rgba(127, 29, 29, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Pupil with depth
      const pupilRadius = irisRadius * 0.45;
      const pupilGradient = ctx.createRadialGradient(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        0,
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        pupilRadius
      );
      pupilGradient.addColorStop(0, "#000000");
      pupilGradient.addColorStop(0.7, "#0a0a0a");
      pupilGradient.addColorStop(1, "#1a1a1a");

      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30,
        centerY + tiltX * 30,
        pupilRadius,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = pupilGradient;
      ctx.fill();

      // Main light reflection (catch light)
      const reflectionGradient = ctx.createRadialGradient(
        centerX + tiltY * 30 - pupilRadius * 0.4,
        centerY + tiltX * 30 - pupilRadius * 0.4,
        0,
        centerX + tiltY * 30 - pupilRadius * 0.4,
        centerY + tiltX * 30 - pupilRadius * 0.4,
        pupilRadius * 0.45
      );
      reflectionGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      reflectionGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.4)");
      reflectionGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30 - pupilRadius * 0.4,
        centerY + tiltX * 30 - pupilRadius * 0.4,
        pupilRadius * 0.45,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = reflectionGradient;
      ctx.fill();

      // Secondary smaller reflection
      ctx.beginPath();
      ctx.arc(
        centerX + tiltY * 30 + pupilRadius * 0.3,
        centerY + tiltX * 30 + pupilRadius * 0.2,
        pupilRadius * 0.15,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fill();

      // Orbiting particles with depth
      for (let i = 0; i < 12; i++) {
        const angle = (rotation + (i * Math.PI * 2) / 12) * 1.5;
        const orbitRadius = radius * 1.4;
        const x = centerX + Math.cos(angle) * orbitRadius + tiltY * 10;
        const y = centerY + Math.sin(angle) * orbitRadius + tiltX * 10;
        const size = 2 + Math.sin(rotation * 2 + i) * 1.5;
        
        // Particle shadow
        ctx.beginPath();
        ctx.arc(x + 2, y + 2, size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fill();
        
        // Particle
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        particleGradient.addColorStop(0, `rgba(239, 68, 68, ${0.8 + Math.sin(rotation * 3 + i) * 0.2})`);
        particleGradient.addColorStop(1, `rgba(220, 38, 38, ${0.3 + Math.sin(rotation * 3 + i) * 0.2})`);
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = particleGradient;
        ctx.fill();
      }

      // Outer glow effect
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      const glowGradient = ctx.createRadialGradient(
        centerX + tiltY * 20,
        centerY + tiltX * 20,
        radius * 0.8,
        centerX + tiltY * 20,
        centerY + tiltX * 20,
        radius * 1.2
      );
      glowGradient.addColorStop(0, "rgba(220, 38, 38, 0)");
      glowGradient.addColorStop(0.8, "rgba(220, 38, 38, 0.05)");
      glowGradient.addColorStop(1, "rgba(220, 38, 38, 0.15)");
      
      ctx.beginPath();
      ctx.arc(centerX + tiltY * 20, centerY + tiltX * 20, radius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      ctx.restore();
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
