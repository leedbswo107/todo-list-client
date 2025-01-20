import { useState } from 'react';

const useCategorySelect = (category: string) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  return {
    selectedCategory,
    onCategoryChange: (newCategory: string) => setSelectedCategory(newCategory),
  };
};

export default useCategorySelect;
