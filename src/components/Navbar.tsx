import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Vermi Valley</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
              Home
            </Link>
            <Link to="/vision" className="px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
              Our Vision
            </Link>
            <Link to="/products" className="px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
              Products
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
              Contact Us
            </Link>
            {isAuthenticated && (
              <Link to="/admin" className="px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
                Admin
              </Link>
            )}
            {isAuthenticated && (
              <button 
                onClick={logout} 
                className="px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Logout
              </button>
            )}
            <Link to="/cart" className="relative px-3 py-2 hover:bg-green-700 rounded-md transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative px-3 py-2 mr-2">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/vision" 
              className="block px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Vision
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            {isAuthenticated && (
              <Link 
                to="/admin" 
                className="block px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {isAuthenticated && (
              <button 
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;