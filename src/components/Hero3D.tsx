import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import AppointmentDialog from "@/components/AppointmentDialog";

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false);

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

    // Draw 3D eye with ophthalmology-themed effects
    const drawEye = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ophthalmology grid/measurement lines in background
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = "#9B2F2F";
      ctx.lineWidth = 1;
      
      // Concentric circles (like eye chart measurements)
      for (let i = 1; i <= 8; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, i * 60, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Cross-hair for medical precision
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 200, canvas.height / 2);
      ctx.lineTo(canvas.width / 2 + 200, canvas.height / 2);
      ctx.moveTo(canvas.width / 2, canvas.height / 2 - 200);
      ctx.lineTo(canvas.width / 2, canvas.height / 2 + 200);
      ctx.stroke();
      
      // Angle measurement marks
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12;
        const r1 = 220;
        const r2 = 240;
        ctx.beginPath();
        ctx.moveTo(
          canvas.width / 2 + Math.cos(angle) * r1,
          canvas.height / 2 + Math.sin(angle) * r1
        );
        ctx.lineTo(
          canvas.width / 2 + Math.cos(angle) * r2,
          canvas.height / 2 + Math.sin(angle) * r2
        );
        ctx.stroke();
      }
      ctx.restore();

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
        
        ctx.strokeStyle = "#9B2F2F";
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
      irisGradient.addColorStop(0, "#C9554C");
      irisGradient.addColorStop(0.2, "#B84639");
      irisGradient.addColorStop(0.4, "#A52A2A");
      irisGradient.addColorStop(0.7, "#8B2222");
      irisGradient.addColorStop(1, "#6B1A1A");

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
        ctx.strokeStyle = i % 2 === 0 ? "#6B1A1A" : "#7B1F1F";
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
      ctx.strokeStyle = "rgba(107, 26, 26, 0.5)";
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
        particleGradient.addColorStop(0, `rgba(165, 42, 42, ${0.8 + Math.sin(rotation * 3 + i) * 0.2})`);
        particleGradient.addColorStop(1, `rgba(139, 34, 34, ${0.3 + Math.sin(rotation * 3 + i) * 0.2})`);
        
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
      glowGradient.addColorStop(0, "rgba(165, 42, 42, 0)");
      glowGradient.addColorStop(0.8, "rgba(165, 42, 42, 0.05)");
      glowGradient.addColorStop(1, "rgba(165, 42, 42, 0.15)");
      
      ctx.beginPath();
      ctx.arc(centerX + tiltY * 20, centerY + tiltX * 20, radius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      ctx.restore();

      // Visual acuity chart elements (like Snellen chart)
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = "#9B2F2F";
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      const letters = ["E", "F", "P", "T", "O", "Z"];
      const positions = [
        [-180, -150], [180, -150],
        [-220, 0], [220, 0],
        [-180, 150], [180, 150]
      ];
      
      letters.forEach((letter, i) => {
        if (positions[i]) {
          ctx.fillText(letter, centerX + positions[i][0], centerY + positions[i][1]);
        }
      });
      ctx.restore();

      // Lens refraction effect (corner arcs)
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = "#9B2F2F";
      ctx.lineWidth = 3;
      [
        [50, 50, 0, Math.PI / 2],
        [canvas.width - 50, 50, Math.PI / 2, Math.PI],
        [50, canvas.height - 50, -Math.PI / 2, 0],
        [canvas.width - 50, canvas.height - 50, Math.PI, 3 * Math.PI / 2]
      ].forEach(([x, y, start, end]) => {
        ctx.beginPath();
        ctx.arc(x, y, 40, start, end);
        ctx.stroke();
      });
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-medical-red/5">
      {/* Ophthalmology-themed background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(220, 38, 38, 0.1) 50px, rgba(220, 38, 38, 0.1) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(220, 38, 38, 0.1) 50px, rgba(220, 38, 38, 0.1) 51px)`
        }} />
      </div>

      {/* Animated lens flare effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-red/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-red/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-medical-red-light/20 rounded-full blur-2xl animate-float" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dr <span className="text-primary">Kenza</span> Tazi
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Spécialiste en maladies et chirurgie des yeux pour adultes et enfants. <br />
              À vos côtés pour prendre soin de votre santé visuelle avec attention et expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppointmentDialog 
                open={isAppointmentDialogOpen}
                onOpenChange={setIsAppointmentDialogOpen}
                trigger={
                  <Button 
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  >
                    Prendre Rendez-vous
                  </Button>
                }
              />
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5"
              >
                Nos Services
              </Button>
            </div>

          </div>

          {/* Right content - 3D Canvas with optical frame */}
          <div className="relative">
            {/* Medical equipment frame effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-medical-red/20 pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-medical-red rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-medical-red rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-medical-red rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-medical-red rounded-br-2xl" />
            </div>
            
            <canvas
              ref={canvasRef}
              className="w-full h-[600px] rounded-2xl shadow-2xl bg-gradient-to-br from-background to-muted/30"
            />
            
            {/* Optical lens flare effects */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-red/20 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-red-light/30 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-medical-red/15 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: "0.3s" }} />
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
