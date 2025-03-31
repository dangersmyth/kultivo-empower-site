
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up with:", email);
    toast({
      title: "Thank you for signing up!",
      description: "We'll notify you when we launch.",
    });
    setEmail("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Excited crowd waiting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-md mx-auto px-4 py-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-kultivo-600">
              Kultivo is coming soon!
            </h1>
            <p className="text-gray-700 mb-8">
              We're working on something great. Sign up to be the first to know when we launch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-kultivo-500 hover:bg-kultivo-600"
              >
                Notify Me
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
