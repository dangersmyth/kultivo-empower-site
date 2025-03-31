
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  type: "Article" | "Quiz";
  imageUrl: string;
  excerpt: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-conscientious-are-you-and-why-it-matters-for-borrowing",
    title: "How conscientious are you? And why it matters for borrowing",
    type: "Quiz",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Take our quiz to discover how your conscientiousness affects your borrowing opportunities and financial health."
  },
  {
    id: 2,
    slug: "demystifying-borrowing-capacity",
    title: "Demystifying borrowing capacity",
    type: "Article",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Learn what factors influence how much you can borrow and how to improve your borrowing capacity."
  },
  {
    id: 3,
    slug: "surprising-reasons-you-could-be-declined-for-a-loan",
    title: "Surprising reasons you could be declined for a loan",
    type: "Article",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Discover the unexpected factors that could be affecting your loan applications and how to address them."
  },
  {
    id: 4,
    slug: "how-were-making-borrowing-smarter-and-fairer",
    title: "How We're Making Borrowing Smarter and Fairer",
    type: "Article",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Learn about Kultivo's approach to creating a more equitable and intelligent lending system for all Australians."
  },
  {
    id: 5,
    slug: "understanding-interest-rates-what-you-need-to-know",
    title: "Understanding Interest Rates: What You Need to Know",
    type: "Article",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "An in-depth guide to understanding how interest rates work and how they impact your borrowing decisions."
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
