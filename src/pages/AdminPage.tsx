import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';

const AdminPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { products, updateProduct } = useProducts();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  const handleProductSelect = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };
  
  const handleSave = (updatedProduct: typeof selectedProduct) => {
    updateProduct(updatedProduct);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        
        {showSuccess && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-start">
            <div className="flex-1">
              <p className="font-bold">Success!</p>
              <p>Product information has been updated successfully.</p>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Manage Products</h2>
            <p className="mt-1 text-sm text-gray-500">
              Update product information, prices, and inventory.
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            {/* Product list sidebar */}
            <aside className="py-6 px-4 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 border-r border-gray-200">
              <nav className="space-y-1">
                {products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product.id)}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                      selectedProduct.id === product.id
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Edit 
                      className={`mr-3 flex-shrink-0 h-5 w-5 ${
                        selectedProduct.id === product.id
                          ? 'text-green-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    <span className="truncate">{product.name}</span>
                  </button>
                ))}
              </nav>
            </aside>
            
            {/* Product edit form */}
            <div className="py-6 px-4 sm:p-6 lg:pb-8 lg:col-span-9">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Product: {selectedProduct.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Update the information for this product.
                  </p>
                </div>
                
                <ProductForm 
                  product={selectedProduct}
                  onSave={handleSave}
                />
                
                <div className="flex items-start mt-8 p-4 bg-yellow-50 rounded-md border border-yellow-200">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Changes made to products will be immediately visible to customers. Please ensure all information is accurate before saving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;