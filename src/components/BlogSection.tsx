
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="kultivo-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Blog</h2>
          <p className="section-description max-w-3xl mx-auto">
            Stay updated with the latest financial tips, insights, and strategies to help you make better financial decisions.
          </p>
        </div>

        {/* Blog post previews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Financial planning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-foreground">
                Financial Planning 101
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn the basics of financial planning and how to set yourself up for future success.
              </p>
              <Button variant="outline" className="text-kultivo-600 border-kultivo-600 hover:bg-kultivo-50">
                Read More
              </Button>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Investment strategies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-foreground">
                Smart Investment Strategies
              </h3>
              <p className="text-muted-foreground mb-4">
                Discover how to make your money work for you with these proven investment approaches.
              </p>
              <Button variant="outline" className="text-kultivo-600 border-kultivo-600 hover:bg-kultivo-50">
                Read More
              </Button>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg md:col-span-2 lg:col-span-1">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Budgeting tips"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-foreground">
                Effective Budgeting Tips
              </h3>
              <p className="text-muted-foreground mb-4">
                Master your finances with these practical budgeting strategies that actually work.
              </p>
              <Button variant="outline" className="text-kultivo-600 border-kultivo-600 hover:bg-kultivo-50">
                Read More
              </Button>
            </div>
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button asChild className="bg-kultivo-500 hover:bg-kultivo-600">
            <a href="/blog">View All Blog Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
