import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/Button';

const ContactPage = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contact Us"
            subtitle="Get in touch with us for any questions, support, or inquiries about our educational programs."
          />
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">
            This is a placeholder for the Contact page content. The full implementation would include contact forms and information.
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

export default ContactPage;