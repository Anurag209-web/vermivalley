import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Check, Truck, ShieldCheck, Leaf } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Vermi Valley?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're committed to sustainable farming and providing high-quality agricultural products to help farmers maximize their yields while preserving the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">All our products are environmentally friendly and promote sustainable farming practices.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">We rigorously test all our products to ensure they meet the highest quality standards.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver our products quickly to ensure you can implement them without delay.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Our team of agricultural experts is always available to provide guidance and support.</p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <section className="py-12 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Ready to enhance your agricultural practices?</h2>
              <p className="text-green-100">Browse our products and start your journey towards sustainable farming today.</p>
            </div>
            <div>
              <a
                href="/products"
                className="inline-block px-6 py-3 bg-white text-green-800 font-semibold rounded-md hover:bg-green-100 transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;