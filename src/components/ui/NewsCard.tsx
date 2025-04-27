import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  imageUrl,
  date,
  category,
  slug
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2 hover:text-orange-500 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <Link 
          to={`/blog/${slug}`}
          className="text-orange-500 font-medium inline-flex items-center hover:text-orange-600 transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;