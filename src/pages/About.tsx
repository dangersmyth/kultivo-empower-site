
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow kultivo-container py-16">
        <h1 className="section-title text-center mb-12">About Kultivo</h1>
        <div className="max-w-3xl mx-auto">
          <p className="section-description mb-8">
            At Kultivo, we're passionate about helping people achieve financial wellness through innovative tools and personalized guidance.
          </p>
          <p className="section-description mb-8">
            Our mission is to make financial management accessible, understandable, and empowering for everyone, regardless of their financial background or expertise.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
