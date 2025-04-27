import { Facebook, Twitter, Instagram } from 'lucide-react';

interface TeacherCardProps {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  title,
  imageUrl,
  socialLinks
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Social media overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {socialLinks.facebook && (
            <a 
              href={socialLinks.facebook}
              className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label={`${name}'s Facebook`}
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
          
          {socialLinks.twitter && (
            <a 
              href={socialLinks.twitter}
              className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          
          {socialLinks.instagram && (
            <a 
              href={socialLinks.instagram}
              className="bg-white p-2 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
              aria-label={`${name}'s Instagram`}
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
        </div>
        
        {/* Orange circle decoration */}
        <div className="absolute -bottom-3 -right-3 h-12 w-12 bg-orange-500 rounded-full"></div>
      </div>
      
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold mb-1 text-gray-800">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default TeacherCard;