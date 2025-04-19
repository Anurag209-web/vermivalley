import React from 'react';
import { Sprout, Globe, Users, Award } from 'lucide-react';

const VisionPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-green-800 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Vision</h1>
            <p className="max-w-3xl mx-auto text-lg text-green-100">
              At Vermi Valley, we envision a world where sustainable farming practices are accessible to all, leading to healthier crops, cleaner environment, and prosperous farmers.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to provide high-quality agricultural products that enhance soil fertility, increase crop yield, and promote sustainable farming practices, all while ensuring that farming remains an economically viable profession.
            </p>
            
            <div className="prose prose-green max-w-none">
              <p>
                We believe that sustainable agriculture is the cornerstone of food security and environmental preservation. By offering products like our premium vermi compost at affordable prices, we're making it easier for farmers to adopt eco-friendly practices without compromising on productivity or profitability.
              </p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <img 
              src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Farmer in field" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Sprout className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-900">Sustainability</h3>
              </div>
              <p className="text-gray-600">
                We're committed to promoting farming practices that are environmentally sound, economically viable, and socially responsible.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-900">Quality</h3>
              </div>
              <p className="text-gray-600">
                We never compromise on the quality of our products. Every item we sell meets the highest standards of excellence.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Users className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-900">Community</h3>
              </div>
              <p className="text-gray-600">
                We believe in building strong relationships with farmers and creating a community dedicated to sustainable agriculture.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Globe className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-900">Innovation</h3>
              </div>
              <p className="text-gray-600">
                We constantly research and develop new solutions to make farming more efficient, productive, and environmentally friendly.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-green-700 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                  <div className="text-green-100 space-y-4">
                    <p>
                      Founded in 2020, Vermi Valley began with a simple idea: to make sustainable farming accessible to all. Our founder, a passionate advocate for organic farming, noticed that many farmers were hesitant to adopt sustainable practices due to concerns about cost and yield.
                    </p>
                    <p>
                      This inspired the creation of our flagship product - high-quality vermi compost at just ₹20 per kg. What started as a small initiative has now grown into a comprehensive agricultural solutions provider, offering everything from organic fertilizers to farming tools and equipment.
                    </p>
                    <p>
                      Today, we continue to expand our product line while staying true to our original mission: empowering farmers to embrace sustainable practices without sacrificing productivity or profitability.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <img 
                    src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Our team working together" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;