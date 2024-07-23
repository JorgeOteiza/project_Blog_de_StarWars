const API_KEY = "your_api_key";
const SWAPI_BASE_URL = "https://api.starwars.com";
const LOCAL_API_BASE_URL = process.env.REACT_APP_LOCAL_API_URL;

const fetchSWAPIData = async (endpoint) => {
  const response = await fetch(
    `${SWAPI_BASE_URL}/${endpoint}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

const fetchLocalAPIData = async (endpoint) => {
  const response = await fetch(`${LOCAL_API_BASE_URL}/${endpoint}`);
  const data = await response.json();
  return data;
};

export { fetchSWAPIData, fetchLocalAPIData };
