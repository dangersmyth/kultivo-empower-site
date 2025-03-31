
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  // Get only the first 2 blog posts
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="kultivo-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Blog</h2>
          <p className="section-description max-w-3xl mx-auto">
            Stay updated with the latest financial tips, insights, and strategies to help you make better financial decisions.
          </p>
        </div>

        {/* Blog post previews - now using BlogPostCard component */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button asChild className="bg-kultivo-500 hover:bg-kultivo-600">
            <Link to="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

