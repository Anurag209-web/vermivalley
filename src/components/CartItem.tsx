import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-16 h-16 object-cover rounded"
      />
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </div>
      
      <div className="flex items-center mr-4">
        <button 
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <Minus className="h-4 w-4 text-gray-600" />
        </button>
        
        <span className="mx-2 min-w-[2rem] text-center">{quantity}</span>
        
        <button 
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <Plus className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className="text-right min-w-[80px] mr-4">
        <div className="font-medium">₹{product.price * quantity}</div>
      </div>
      
      <button 
        onClick={() => removeFromCart(product.id)}
        className="p-2 text-red-500 hover:text-red-700 transition-colors"
      >
        <Trash className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;