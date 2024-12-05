import axios from 'axios';

const API_BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

export const fetchRecipes = async (query: string) => {
    const response = await axios.get(`${API_BASE_URL}/complexSearch`, {
        params: {
            query,
            apiKey: API_KEY,
        },
    });

    return response.data.results;
}
