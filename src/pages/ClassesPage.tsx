import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/Button';

const ClassesPage = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Classes"
            subtitle="Explore our wide range of classes designed to help you learn and grow in your chosen field."
          />
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">
            This is a placeholder for the Classes page content. The full implementation would include a comprehensive listing of all available classes.
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

export default ClassesPage;