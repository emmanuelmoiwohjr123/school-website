import Button from '../Button';

const NewsletterSection = () => {
  return (
    <section className="py-12 md:py-16 bg-orange-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="bg-orange-500 rounded-lg p-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join us and stay tuned!</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, exclusive content, and special offers directly to your inbox.
            </p>
          </div>
          
          <form className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <Button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;