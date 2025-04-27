import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/Button';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About Shelly"
            subtitle="Learn more about our mission, values, and the passionate team behind our educational platform."
          />
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">
            This is a placeholder for the About page content. The full implementation would include detailed information about the institution.
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

export default AboutPage;