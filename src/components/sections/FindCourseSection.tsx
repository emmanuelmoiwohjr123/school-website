import Button from '../Button';
import { Phone } from 'lucide-react';

const FindCourseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Find Your Course</h2>
            <p className="text-gray-600 mb-8">
              Not sure which course is right for you? Our education consultants are here to help you find the perfect learning path that matches your goals, interests, and skill level.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Get a Personal Consultation</h3>
              <p className="text-gray-600 mb-6">
                Fill out this short form, and one of our education advisors will contact you to discuss your options.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Interest Area</option>
                    <option value="arts">Arts & Creativity</option>
                    <option value="business">Business & Management</option>
                    <option value="tech">Technology & Programming</option>
                    <option value="language">Languages</option>
                    <option value="science">Science & Mathematics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <Button type="submit" fullWidth>Submit Request</Button>
              </form>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="bg-orange-500 text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Us Directly</p>
                  <a href="tel:+12345678901" className="text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors">
                    +1 234 5678 90
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Main image */}
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students discussing course options" 
                className="rounded-lg shadow-lg"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-70 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-70 z-0"></div>
            </div>
            
            {/* Secondary image */}
            <div className="absolute -bottom-10 -right-5 w-48 h-48 rounded-lg shadow-md overflow-hidden border-4 border-white z-20">
              <img 
                src="https://images.pexels.com/photos/8471762/pexels-photo-8471762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Online learning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindCourseSection;