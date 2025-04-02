
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Define types
type Question = {
  id: number;
  text: string;
};

type Option = {
  value: number;
  label: string;
};

// Quiz data
const QUESTIONS: Question[] = [
  { id: 1, text: "I am always prepared." },
  { id: 2, text: "I pay attention to details." },
  { id: 3, text: "I get chores done right away." },
  { id: 4, text: "I like order." },
  { id: 5, text: "I follow a schedule." },
  { id: 6, text: "I make plans and stick to them." },
  { id: 7, text: "I waste my time." },
  { id: 8, text: "I find it difficult to get down to work." },
  { id: 9, text: "I do things in a half-way manner." },
  { id: 10, text: "I shirk my duties." }
];

const OPTIONS: Option[] = [
  { value: 1, label: "Very Inaccurate" },
  { value: 2, label: "Moderately Inaccurate" },
  { value: 3, label: "Neither Accurate nor Inaccurate" },
  { value: 4, label: "Moderately Accurate" },
  { value: 5, label: "Very Accurate" }
];

const SCORING = {
  positive: [1, 2, 3, 4, 5, 6],
  reverse: [7, 8, 9, 10]
};

const getScoreCategory = (score: number): 'high' | 'medium' | 'low' => {
  if (score >= 40) return 'high';
  if (score >= 30) return 'medium';
  return 'low';
};

const FEEDBACK = {
  high: {
    title: "High Conscientiousness",
    description: "Your high level of conscientiousness indicates strong self-discipline and careful planning. This trait generally helps protect against impulsive spending and debt accumulation.",
    tips: [
      "Maintain your excellent budgeting habits",
      "Continue setting clear financial goals",
      "Share your organizational skills with others",
      "Consider long-term investment strategies"
    ]
  },
  medium: {
    title: "Moderate Conscientiousness",
    description: "Your moderate conscientiousness suggests a balanced approach to responsibilities. While you have good organizational skills, there's room for improvement in financial discipline.",
    tips: [
      "Develop more structured budgeting habits",
      "Set specific financial goals with deadlines",
      "Track expenses more consistently",
      "Create automated savings plans"
    ]
  },
  low: {
    title: "Lower Conscientiousness",
    description: "Your lower conscientiousness score suggests you might benefit from developing stronger organizational habits, particularly regarding financial management.",
    tips: [
      "Start with small, manageable financial goals",
      "Use budgeting apps to track spending",
      "Set up automatic bill payments",
      "Create reminders for financial tasks",
      "Consider working with a financial advisor"
    ]
  }
};

const ConscientiousnessQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState<'high' | 'medium' | 'low'>('medium');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (value: string) => {
    const numValue = parseInt(value);
    const newAnswers = { ...answers, [QUESTIONS[currentQuestion].id]: numValue };
    setAnswers(newAnswers);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToNextQuestion = () => {
    if (!answers[QUESTIONS[currentQuestion].id]) {
      toast({
        title: "Please select an option",
        description: "You need to select an answer before proceeding.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestion < QUESTIONS.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    
    QUESTIONS.forEach(question => {
      const answer = answers[question.id] || 0;
      
      if (SCORING.positive.includes(question.id)) {
        // For positive questions, the score is the same as the answer value
        totalScore += answer;
      } else if (SCORING.reverse.includes(question.id)) {
        // For reverse-scored questions, the score is 6 minus the answer value
        totalScore += (6 - answer);
      }
    });
    
    setScore(totalScore);
    setCategory(getScoreCategory(totalScore));
    setShowResults(true);
  };

  useEffect(() => {
    // Scroll to top when changing question or showing results
    window.scrollTo(0, 0);
  }, [currentQuestion, showResults]);

  if (showResults) {
    return (
      <Card className="w-full max-w-3xl mx-auto shadow-lg animate-fade-in">
        <CardHeader className="bg-blue-50 border-b flex flex-col items-center gap-2 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Your Conscientiousness Score</h2>
          <div className="text-5xl font-bold text-blue-600">{score}/50</div>
          <p className="text-xl font-semibold text-center mt-4">{FEEDBACK[category].title}</p>
        </CardHeader>
        
        <CardContent className="py-8">
          <div className="space-y-6">
            <p className="text-lg">{FEEDBACK[category].description}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Tips for Your Financial Health:</h3>
              <ul className="space-y-3">
                {FEEDBACK[category].tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-500 rounded-md p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-0 pb-6 px-6">
          <Button 
            variant="outline" 
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
              setScore(0);
            }}
          >
            Take Quiz Again
          </Button>
          <Button onClick={() => window.location.href = "/blog"}>
            Return to Blog
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const question = QUESTIONS[currentQuestion];
  const selectedValue = answers[question.id]?.toString() || '';
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4 bg-blue-50 h-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <Card className={`shadow-lg ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-muted-foreground">Question {currentQuestion + 1} of {QUESTIONS.length}</p>
            <p className="text-sm font-medium">{Math.round(progress)}% Complete</p>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">{question.text}</h2>
        </CardHeader>
        
        <CardContent className="pt-6">
          <RadioGroup 
            value={selectedValue} 
            onValueChange={handleOptionSelect}
            className="space-y-4"
          >
            {OPTIONS.map((option) => (
              <div key={option.value} className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                <RadioGroupItem 
                  value={option.value.toString()} 
                  id={`option-${question.id}-${option.value}`} 
                  className="h-5 w-5"
                />
                <Label 
                  htmlFor={`option-${question.id}-${option.value}`}
                  className="flex-grow cursor-pointer font-medium text-base"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-0 pb-6 px-6">
          <Button 
            variant="outline" 
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center gap-1"
          >
            <ArrowLeft size={16} />
            Back
          </Button>
          <Button 
            onClick={goToNextQuestion}
            className="flex items-center gap-1"
          >
            {currentQuestion < QUESTIONS.length - 1 ? (
              <>
                Next
                <ArrowRight size={16} />
              </>
            ) : 'See Results'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ConscientiousnessQuiz;
