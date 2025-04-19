import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center text-green-700 hover:text-green-800"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-green-700 hover:text-green-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl text-gray-900">₹{product.price}</p>
            </div>
            
            <div className="mt-6">
              <div className="text-base text-gray-700 space-y-3">
                <p>{product.description}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center">
                <div className={`h-4 w-4 rounded-full flex items-center justify-center ${product.stock > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                  <div className={`h-2 w-2 rounded-full ${product.stock > 0 ? 'bg-green-600' : 'bg-red-600'}`}></div>
                </div>
                <p className={`ml-2 text-sm ${product.stock > 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {product.stock > 0 ? `In stock (${product.stock} available)` : 'Out of stock'}
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock <= 0}
                className={`flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                  product.stock > 0
                    ? 'bg-green-700 hover:bg-green-800'
                    : 'bg-gray-400 cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors`}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Product Details</h2>
              <div className="mt-4 space-y-4">
                <div className="flex">
                  <span className="text-gray-500 w-28">Category:</span>
                  <span className="text-gray-700">{product.category}</span>
                </div>
                {product.category === 'Fertilizers' && (
                  <div className="flex">
                    <span className="text-gray-500 w-28">Application:</span>
                    <span className="text-gray-700">Suitable for all types of crops and plants</span>
                  </div>
                )}
                {product.category === 'Seeds' && (
                  <div className="flex">
                    <span className="text-gray-500 w-28">Variety:</span>
                    <span className="text-gray-700">Organic, non-GMO</span>
                  </div>
                )}
                {product.category === 'Equipment' && (
                  <div className="flex">
                    <span className="text-gray-500 w-28">Material:</span>
                    <span className="text-gray-700">High-quality, durable materials</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;