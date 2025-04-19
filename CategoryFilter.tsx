import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onChange 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
            selectedCategory === null
              ? 'bg-green-100 text-green-800 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => onChange(null)}
        >
          All Products
        </button>
        
        {categories.map(category => (
          <button
            key={category}
            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === category
                ? 'bg-green-100 text-green-800 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;