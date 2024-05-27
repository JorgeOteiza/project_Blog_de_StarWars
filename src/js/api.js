const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.starwars.com';

const fetchStarWarsData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
};

export { fetchStarWarsData };
