import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-in": "opacity-0",
    "slide-left": "opacity-0 -translate-x-10",
    "slide-right": "opacity-0 translate-x-10",
    "scale": "opacity-0 scale-95",
  };

  const visibleClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
    "scale": "opacity-100 scale-100",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
