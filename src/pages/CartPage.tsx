import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <ShoppingBag className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link
          to="/products"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-8">
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              {cartItems.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={clearCart}
                className="text-sm text-red-600 hover:text-red-800 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                to="/products"
                className="text-sm text-green-700 hover:text-green-800 transition-colors flex items-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
              
              <div className="flow-root">
                <div className="border-b border-gray-200 py-2">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{cartTotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping calculated at checkout</p>
                </div>
                
                <div className="py-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Tax (GST)</p>
                    <p>₹{(cartTotal * 0.18).toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <p>Total</p>
                    <p>₹{(cartTotal + cartTotal * 0.18).toFixed(2)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => alert('Checkout functionality would be integrated here!')}
                  className="flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;