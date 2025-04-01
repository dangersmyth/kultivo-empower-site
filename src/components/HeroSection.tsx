
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Group of happy diverse friends smiling",
    heading: "Empower your financial future",
    caption: "more financial freedom, more good times"
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Woman smiling while using laptop",
    heading: "Stress less about finances",
    caption: "Money mastery made simple"
  },
  {
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "People laughing together",
    heading: "Achieve your money goals",
    caption: "good times are better when money isn't a worry"
  }
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto rotate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: index === currentImageIndex ? 10 : 0,
          }}
        >
          {/* Darker gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
                    
          {/* Caption and heading positioned absolutely in the center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6 md:px-12">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {image.heading}
            </h1>
          
            {image.caption && (
              <p className="text-white text-xl md:text-2xl font-medium mt-2 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] border-l-4 border-kultivo-500 pl-4">
                {image.caption}
              </p>
            )}
          
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-kultivo-500 hover:bg-kultivo-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/80"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
