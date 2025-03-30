
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FounderCard from "@/components/FounderCard";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
          <div className="kultivo-container">
            <h1 className="section-title text-center mb-6 text-3xl md:text-4xl lg:text-5xl">About Us</h1>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-12 md:py-16">
          <div className="kultivo-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="section-description mb-8 text-center">
                We created Kultivo because we've seen so many Australians struggle to get access to credit on good terms. 
                We want to help Aussies not only get a loan when they need it, but also improve their financial health more broadly. 
                We will bring our years of experience in credit to help provide education tools for users to improve their financial wellbeing. 
                We'll put our money into it too, offering discounts for people who commit to learning more about credit.
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-3xl mx-auto" />
        
        {/* Founders Section */}
        <section className="py-12 md:py-16">
          <div className="kultivo-container">
            <h2 className="text-2xl font-bold mb-10 text-center">Meet Our Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FounderCard 
                name="Steve Smyth" 
                bio="Steve was born in Shropshire, England, and lived in France and Spain before settling in Australia in 2013. He still supports the English cricket team but is otherwise 100% Aussie. His passion at work is marketing and analysis. He loves running and football but is too injured to play anymore."
                imageSrc="/lovable-uploads/901141f5-9bcd-4ea3-8fb3-51d23e5cee99.png"
              />
              <FounderCard 
                name="TK" 
                bio="TK was born in Sri Lanka but grew up and then worked in South Africa before moving to Australia. Like Steve, TK is a die-hard consumer credit expert with a speciality in all things credit risk. He also built an awesome toy business."
                imageSrc="/lovable-uploads/6912318a-188f-4702-94ee-d805803e03e5.png"
              />
            </div>
          </div>
        </section>
        
        {/* Values or additional info section (optional) */}
        <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-12 md:py-16">
          <div className="kultivo-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Join Us On Our Mission</h2>
              <p className="section-description mb-6">
                At Kultivo, we're committed to helping Australians achieve financial wellness through innovative tools and personalized guidance.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
