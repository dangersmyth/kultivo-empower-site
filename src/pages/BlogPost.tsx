
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from "@/data/blogPosts";
import QuizLanding from "@/components/QuizLanding";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
      return;
    }
    
    // Fade in effect
    setIsVisible(true);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow kultivo-container py-12">
        <div 
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 text-kultivo-600 hover:bg-kultivo-50"
              onClick={() => navigate("/blog")}
            >
              <ArrowLeft size={16} />
              <span>Back to Blog</span>
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <Badge 
              variant={post.type === "Quiz" ? "default" : "secondary"} 
              className={`mb-6 ${
                post.type === "Quiz" 
                  ? "bg-kultivo-600 hover:bg-kultivo-700" 
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              {post.type}
            </Badge>
            
            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-60 md:h-80 object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              {post.type === "Quiz" ? (
                <QuizLanding />
              ) : post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <p className="text-lg text-muted-foreground">
                    Full article coming soon! Check back later for the complete content.
                  </p>
                </div>
              )}
            </div>
            
            <div className="mt-12 pt-4 border-t border-gray-200">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1 text-kultivo-600 hover:bg-kultivo-50"
                onClick={() => navigate("/blog")}
              >
                <ArrowLeft size={16} />
                <span>Back to Blog</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
