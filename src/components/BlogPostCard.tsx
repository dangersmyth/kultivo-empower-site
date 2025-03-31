
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group block h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
          <Badge 
            variant={post.type === "Quiz" ? "default" : "secondary"} 
            className={`mb-2 ${
              post.type === "Quiz" 
                ? "bg-kultivo-600 hover:bg-kultivo-700" 
                : "bg-gray-700 hover:bg-gray-800"
            }`}
          >
            {post.type}
          </Badge>
          <h3 className="text-white text-xl font-bold leading-tight">{post.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
