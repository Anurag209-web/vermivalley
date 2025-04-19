import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Vermi Valley</span>
            </div>
            <p className="text-green-200 mb-4">
              Providing high-quality agricultural products to enhance your farming experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/vision" className="text-green-200 hover:text-white transition-colors">Our Vision</Link></li>
              <li><Link to="/products" className="text-green-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=Fertilizers" className="text-green-200 hover:text-white transition-colors">Fertilizers</Link></li>
              <li><Link to="/products?category=Seeds" className="text-green-200 hover:text-white transition-colors">Seeds</Link></li>
              <li><Link to="/products?category=Equipment" className="text-green-200 hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/products?category=Pesticides" className="text-green-200 hover:text-white transition-colors">Pesticides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-green-200">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-green-200">info@vermivalley.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span className="text-green-200">123 Farming Road, Agriculture District, India - 123456</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} Vermi Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;