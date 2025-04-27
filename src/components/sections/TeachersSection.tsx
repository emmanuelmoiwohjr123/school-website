import SectionTitle from '../ui/SectionTitle';
import TeacherCard from '../ui/TeacherCard';
import { teachers } from '../../data/teachers';

const TeachersSection = () => {
  // Get first 4 teachers for display
  const displayTeachers = teachers.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Awesome Teachers" 
          subtitle="Meet our team of experienced educators who are passionate about helping students succeed in their learning journey."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-10">
          <a 
            href="/teachers" 
            className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            View All Teachers
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

export default TeachersSection;