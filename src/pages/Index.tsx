
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Static Information Section */}
        <InfoSection
          title="Take control of your financial future"
          description="Kultivo provides you with the tools and insights you need to manage your finances effectively. Our comprehensive platform offers personalized recommendations, expense tracking, and goal setting to help you achieve financial wellness. Start your journey to financial freedom today."
          image="/lovable-uploads/04ba12ea-01d4-4b35-b361-7222b346b028.png"
          imageAlt="Kultivo app dashboard showing financial insights"
          buttonText="Learn More"
          buttonLink="/features"
          imageOnRight={true}
          bgClassName="bg-gradient-to-br from-blue-50 to-teal-50"
        />

        {/* Blog Section */}
        <BlogSection />

        {/* How We Help Section */}
        <InfoSection
          title="How We Help"
          description="We believe everyone deserves financial peace of mind. Kultivo's intuitive platform provides real-time insights into your spending habits, helps you set and track financial goals, and offers personalized recommendations to improve your financial health. Our expert-backed resources and tools are designed to make financial management accessible and stress-free."
          image="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="People discussing finances"
          buttonText="Get Started"
          buttonLink="/signup"
          imageOnRight={false}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
