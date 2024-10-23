const BASE_API_URL = "https://stunning-couscous-69gv9qw7gg9qcrpqp-3000.app.github.dev/";

const fetchSWAPIData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching SWAPI data:", error);
    return null;
  }
};

const fetchLocalAPIData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching local API data:", error);
    return null;
  }
};

export { fetchSWAPIData, fetchLocalAPIData };
