
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConscientiousnessQuiz from "@/components/ConscientiousnessQuiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ConscientiousnessQuizPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Fade in effect
    setIsVisible(true);
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow kultivo-container py-12">
        <div 
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 text-kultivo-600 hover:bg-kultivo-50"
              onClick={() => navigate("/blog/how-conscientious-are-you-and-why-it-matters-for-borrowing")}
            >
              <ArrowLeft size={16} />
              <span>Back to Quiz Info</span>
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Conscientiousness Quiz</h1>
            
            <p className="text-lg text-center mb-8">
              Please answer all questions honestly for the most accurate results.
              Each question helps assess your conscientiousness traits related to financial behavior.
            </p>
            
            <div className="mt-8">
              <ConscientiousnessQuiz />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConscientiousnessQuizPage;
