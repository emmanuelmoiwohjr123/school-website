import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-orange-500 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
      <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              The Smarter Way to Learn <span className="text-orange-500">Anything</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Join the most effective learning platform that transforms the way you gain knowledge. Our interactive methods make learning fun, engaging, and most importantly, effective.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Main image */}
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students learning" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            {/* Floating images */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-lg shadow-md overflow-hidden border-4 border-white z-20 transform rotate-6">
              <img 
                src="https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Learning moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-lg shadow-md overflow-hidden border-4 border-white z-20 transform -rotate-3">
              <img 
                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Student learning" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-1/4 right-1/4 h-16 w-16 bg-yellow-300 rounded-full opacity-80"></div>
            <div className="absolute top-1/3 -left-4 h-8 w-8 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;