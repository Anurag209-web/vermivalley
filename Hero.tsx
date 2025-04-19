import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-green-800 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Sustainable Farming Solutions for a Better Tomorrow
          </h1>
          <p className="text-lg md:text-xl mb-8 text-green-100">
            High-quality agricultural products that enhance soil fertility, increase crop yield, and promote sustainable farming practices.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center"
            >
              Shop Now
            </Link>
            <Link
              to="/vision"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;