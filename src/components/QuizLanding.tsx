
import { Button } from "@/components/ui/button";
import { Check, LightbulbIcon } from "lucide-react";
import { Link } from "react-router-dom";

const QuizLanding = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
        Understand Your Financial Personality: A Conscientiousness Test
      </h1>

      <div className="space-y-6">
        <p className="text-lg md:text-xl">
          Managing money wisely isn't just about income—it's about <span className="font-semibold">habits, planning, and self-control</span>. This short questionnaire (about <span className="font-semibold">2-3 minutes</span>) will assess your <span className="font-semibold">conscientiousness</span>, a key personality trait that influences how well you manage debt and financial commitments.
        </p>

        <div className="bg-blue-50 p-6 md:p-8 rounded-lg my-8">
          <div className="flex items-start md:items-center gap-2 mb-4">
            <div className="text-blue-500 text-2xl md:text-3xl">
              <span className="inline-block h-8 w-1 bg-blue-500 mr-2"></span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">
              By answering <span className="text-kultivo-600">10 simple questions</span>, you'll get:
            </h2>
          </div>

          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-2">
              <div className="mt-1 bg-green-500 rounded-md p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="font-semibold">A personal conscientiousness score</span> based on psychology research.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 bg-green-500 rounded-md p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                Insights into how your personality affects your <span className="font-semibold">financial habits</span>.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 bg-green-500 rounded-md p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                Tailored advice on <span className="font-semibold">avoiding financial risks and improving money management</span>.
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-3 bg-amber-50 p-6 rounded-lg">
          <div className="text-amber-500 mt-1">
            <LightbulbIcon size={24} />
          </div>
          <p className="text-lg">
            At the end, you'll receive a <span className="font-semibold">risk analysis</span> and practical steps to strengthen your financial resilience.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
            <Link to="/quiz/conscientiousness">Let's Get Started! 🚀</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizLanding;
