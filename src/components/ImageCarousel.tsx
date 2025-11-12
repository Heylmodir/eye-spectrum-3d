import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  "https://lh3.googleusercontent.com/sitesv/AAzXCkdC2cCVCm1_IxSStzulIPa1ljhRIGYqY-clSR3Cmv5UEh1MNk3CmZ0-gEwbIFhAbXRDDWxMIPgH32z0_SCLhtwXL-crCF5KXHB4FMMjrCgWumaXEShUy9bmzNhopvtFNMHl0Ir7od1JbqGXbKTi_9sAneFHXdSv2F2XpXLL-wLcprysgkszFLBDB-U=w16383",
  "https://lh3.googleusercontent.com/sitesv/AAzXCkcuetfY5Kal9h_XHsei6HYH87p1-F-yypa8mzzTtAiZ8lzbXDKtADq5oCmeet5tRm3U7NTTuJPTMLCBIkFclj3bNhW_x1ckRA77sLd-sHHj4yQI1tHyiJyErA_SMsGKPOg2_4oQxnh9QO07R3nSU4bFSw8OH9wsofxKS98ZYgyhS4EuW-IQXm6use0=w16383",
  "https://lh3.googleusercontent.com/sitesv/AAzXCkfNepaj5lPzZHwYTXytb7hWiTbvR4bNwXIZCvMwVmwIrvC1bSD818aQyX4T8MzYijbO_wygXKl8LG5lkHnSJa7EleTeCpvN4RKZBIiU7cW1k7m6nVEzbljMYWfVHVt5T74z8oO9Bbf_Ppbv8GhB_fkLxFJVhc-qLivGJ0ernjiz2JUL-e1K40K8VSg=w16383",
  "https://lh3.googleusercontent.com/sitesv/AAzXCkdZC_PcS-yrWnt6J1VUpmw1MVOm_BU0uncKbRSK61UwtI1yEieC7nd7bkSqrbnwz96YsNuOk6xCzkT0g9ZFiBFRhLIh5-9fsyAgkfd6EhGsjWnEus6SOoYMSJcI8vpGfEx2b6uj6UkCFT7tKbOG4jH6baA2wuGXPW56f4GrDI9kf9u1hG01YmI5QJY=w16383",
  "https://lh3.googleusercontent.com/sitesv/AAzXCkfeLXmDyAMZt31o-NmV5ywA7KDmezxo-icFZSM6oj1GsIQ82nuM-JA7oQIPMHG2bN0KqeA6uIft8QaN9q1XFAuQzSZDy_U9WfBMCT6nkr3kKpjUnsRIaid_vgayTmoZMpwhEZfH4wiTdErEoDroKz4_nz3t_xcHUJixTPKoo1dQFzPPnxJvGJudU9c=w16383",
  "https://lh3.googleusercontent.com/sitesv/AAzXCkewtpNbtQLp7IPLOIOPVpm5bxW7HtB6_qyr8A7DrNvcw_dZDvJlFQEL3eIdvqHost6wyMOqzPIU195_XyhLF0FUzUcyVAp_YjElFrr5fTwk3hiHOOcCaEXR2WMZu6UKeiSrz3KVb2BMDpRGfCNzK84jwaVL_OXNbGvLfS2OLNNgZ3gUFWjCjQ_MC_Q=w16383",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="text-primary">Cabinet</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez nos installations modernes et notre équipe dédiée
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={image}
                  alt={`Cabinet slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white border-white/50 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white border-white/50 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
