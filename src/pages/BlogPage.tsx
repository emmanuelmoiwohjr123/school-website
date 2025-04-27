import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/Button';

const BlogPage = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Blog"
            subtitle="Stay updated with the latest news, insights, and stories from our educational community."
          />
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">
            This is a placeholder for the Blog page content. The full implementation would include a list of blog posts and articles.
          </p>
          <div className="text-center">
            <Button onClick={() => window.history.back()}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;