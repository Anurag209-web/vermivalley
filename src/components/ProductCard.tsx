import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-700">{product.name}</h3>
        </Link>
        <div className="text-green-700 font-bold my-2">₹{product.price}</div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/product/${product.id}`}
            className="text-green-700 hover:text-green-800 text-sm font-medium"
          >
            View Details
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;