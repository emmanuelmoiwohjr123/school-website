import HeroSection from '../components/sections/HeroSection';
import WelcomeSection from '../components/sections/WelcomeSection';
import ClassesSection from '../components/sections/ClassesSection';
import TeachersSection from '../components/sections/TeachersSection';
import FindCourseSection from '../components/sections/FindCourseSection';
import NewsSection from '../components/sections/NewsSection';
import NewsletterSection from '../components/sections/NewsletterSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ClassesSection />
      <TeachersSection />
      <FindCourseSection />
      <NewsSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;