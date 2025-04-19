import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
    
  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    // Close mobile filters when a category is selected
    setMobileFiltersOpen(false);
  };
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
        
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-lg font-medium text-gray-900">{filteredProducts.length} products</h2>
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="bg-white p-2 rounded-md flex items-center text-gray-600 border border-gray-300"
          >
            <Filter className="h-5 w-5 mr-2" />
            <span>Filters</span>
          </button>
        </div>
        
        <div className="md:grid md:grid-cols-4 md:gap-x-8">
          {/* Mobile filter dialog */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 flex z-40 md:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)}></div>
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-4 px-4">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onChange={handleCategoryChange}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Desktop filters */}
          <div className="hidden md:block md:col-span-1">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={handleCategoryChange}
            />
          </div>
          
          {/* Product grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                <p className="text-gray-500">Try selecting a different category or check back later.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;