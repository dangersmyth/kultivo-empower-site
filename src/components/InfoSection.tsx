
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
                <a href={buttonLink}>{buttonText}</a>
              </Button>
            )}
          </div>

          {/* Image */}
          <div className={imageOnRight ? "order-2" : "order-1 md:order-2"}>
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
