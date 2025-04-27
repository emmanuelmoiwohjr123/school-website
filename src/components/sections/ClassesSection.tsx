import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ClassCard from '../ui/ClassCard';
import { classes } from '../../data/classes';

const ClassesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(classes.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get current items
  const currentClasses = classes.slice(
    currentIndex * itemsPerPage, 
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Classes" 
          subtitle="Explore our diverse range of classes designed to help you grow and excel in your chosen fields."
        />
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -top-16 right-0 flex space-x-2">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Classes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentClasses.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* View all button */}
        <div className="text-center mt-10">
          <a 
            href="/classes" 
            className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            View All Classes
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

export default ClassesSection;