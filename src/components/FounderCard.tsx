
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface FounderCardProps {
  name: string;
  bio: string;
  imageSrc: string;
}

const FounderCard = ({ name, bio, imageSrc }: FounderCardProps) => {
  // Get the first letter of the name for the fallback avatar
  const firstLetter = name.charAt(0);

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col items-center">
        <Avatar className="h-32 w-32 mb-6 border-4 border-kultivo-200">
          <AvatarImage src={imageSrc} alt={`Photo of ${name}`} className="object-cover" />
          <AvatarFallback className="text-2xl bg-kultivo-500 text-white">
            {firstLetter}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-muted-foreground text-center">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default FounderCard;
