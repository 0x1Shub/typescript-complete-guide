import React, { useState } from 'react';
import { fetchRecipes } from '../services/api';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query: string) => {
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
      setError('');
    } catch (err) {
      setError('Failed to fetch recipes.');
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
