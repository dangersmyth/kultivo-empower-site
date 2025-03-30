
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow kultivo-container py-16">
        <h1 className="section-title text-center mb-12">Our Blog</h1>
        <div className="text-center">
          <p className="section-description mb-8">
            Stay tuned for our upcoming blog posts!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
