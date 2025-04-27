import { Clock, Users } from 'lucide-react';
import Button from '../Button';

interface ClassCardProps {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  schedule: string;
  students: number;
  price: number;
}

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  imageUrl,
  category,
  schedule,
  students,
  price
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-orange-500 mr-2" />
            <span>{schedule}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-orange-500 mr-2" />
            <span>{students} Students</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-orange-500 font-bold">${price}</div>
          <Button variant="outline" size="sm">Enroll Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;