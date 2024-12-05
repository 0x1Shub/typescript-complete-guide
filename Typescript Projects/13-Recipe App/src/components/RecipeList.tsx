import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} />
    ))}
  </div>
);

export default RecipeList;
