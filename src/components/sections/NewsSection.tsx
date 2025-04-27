import SectionTitle from '../ui/SectionTitle';
import NewsCard from '../ui/NewsCard';
import { news } from '../../data/news';

const NewsSection = () => {
  // Get first 3 news for display
  const displayNews = news.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Recent News" 
          subtitle="Stay updated with the latest happenings, events, and insightful articles from our community."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayNews.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-10">
          <a 
            href="/blog" 
            className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            View All News
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;