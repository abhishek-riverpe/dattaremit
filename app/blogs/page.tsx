import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Cross-Border Payments: A Complete Guide",
    excerpt: "Learn how international money transfers work and how to get the best rates when sending money abroad.",
    category: "Education",
    readTime: "5 min read",
    date: "Jan 15, 2025",
  },
  {
    title: "Why Traditional Banks Charge High Fees for International Transfers",
    excerpt: "Discover the hidden costs behind bank transfers and how fintech companies are disrupting the industry.",
    category: "Finance",
    readTime: "4 min read",
    date: "Jan 10, 2025",
  },
  {
    title: "Stablecoins Explained: The Future of Global Payments",
    excerpt: "An introduction to stablecoins and how they're revolutionizing cross-border transactions.",
    category: "Technology",
    readTime: "6 min read",
    date: "Jan 5, 2025",
  },
  {
    title: "How to Send Money to India from the US: Best Options in 2025",
    excerpt: "Compare the top methods for sending money to India and find the most cost-effective solution.",
    category: "Guide",
    readTime: "7 min read",
    date: "Dec 28, 2024",
  },
  {
    title: "Understanding Exchange Rates: Tips to Maximize Your Transfer",
    excerpt: "Learn how exchange rates work and strategies to get more value from your international transfers.",
    category: "Tips",
    readTime: "4 min read",
    date: "Dec 20, 2024",
  },
  {
    title: "The Rise of Digital Remittances: Trends and Predictions",
    excerpt: "Explore the latest trends in digital money transfers and what the future holds for the industry.",
    category: "Industry",
    readTime: "5 min read",
    date: "Dec 15, 2024",
  },
];

const categoryColors: Record<string, string> = {
  Education: "bg-blue-100 text-blue-700",
  Finance: "bg-green-100 text-green-700",
  Technology: "bg-purple-100 text-purple-700",
  Guide: "bg-orange-100 text-orange-700",
  Tips: "bg-pink-100 text-pink-700",
  Industry: "bg-teal-100 text-teal-700",
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="size-4" />
                Our Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Insights & Updates
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay informed about cross-border payments, financial tips, and the latest from DattaPay.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card rounded-3xl border shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <BookOpen className="size-8 text-primary" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="xl" variant="outline" className="group">
                Load More Articles
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
