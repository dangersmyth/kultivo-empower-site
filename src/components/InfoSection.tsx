
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface InfoSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  buttonLink?: string;
  imageOnRight?: boolean;
  className?: string;
  bgClassName?: string;
}

const InfoSection = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
  imageOnRight = false,
  className,
  bgClassName = "bg-white",
}: InfoSectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", bgClassName)}>
      <div className={cn("kultivo-container", className)}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className={imageOnRight ? "order-1" : "order-2 md:order-1"}>
            <h2 className="section-title">{title}</h2>
            <p className="section-description mb-8">{description}</p>
            {buttonText && buttonLink && (
              <Button asChild className="bg-kultivo-500 hover:bg-kultivo-600">
                <Link to={buttonLink}>{buttonText}</Link>
              </Button>
            )}
          </div>

          {/* Image with enhanced visual effects */}
          <div className={imageOnRight ? "order-2" : "order-1 md:order-2"}>
            <div className="transform perspective-1200 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(-5deg) rotateX(5deg)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                />
                {/* Subtle highlight effect */}
                <div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50"
                  style={{ mixBlendMode: "overlay" }}
                ></div>
                {/* Bottom shadow for depth */}
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 rounded-full blur-md"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
