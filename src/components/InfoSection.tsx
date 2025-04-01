
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
  isPlainImage?: boolean;
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
  isPlainImage = false,
}: InfoSectionProps) => {
  const renderImage = () => {
    if (isPlainImage) {
      return (
        <div className="flex justify-center items-center">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full max-h-[500px] object-cover rounded-lg shadow-lg" 
          />
        </div>
      );
    }

    return (
      <div className="flex justify-center items-center">
        <div className="relative max-w-xs mx-auto">
          {/* iPhone Bezel */}
          <div className="relative bg-black rounded-[3rem] p-2 shadow-xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-7 bg-black rounded-b-3xl z-10"></div>
            
            {/* Screen */}
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ 
              aspectRatio: "9/19.5" 
            }}>
              {/* App image */}
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  };

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

          {/* Image */}
          <div className={imageOnRight ? "order-2" : "order-1 md:order-2"}>
            {renderImage()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
