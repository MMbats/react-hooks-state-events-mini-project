// src/components/CategoryFilter.js
import React from 'react';

function CategoryFilter({ categories, onCategorySelect }) {
  return (
    <div>
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => onCategorySelect(category)} 
          className={category === "All" ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;  // Make sure to export as default
