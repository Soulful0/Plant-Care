import axios from 'axios';

const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;
console.log('API Key:', API_KEY);

export const fetchPlants = async (query) => {
  try {
    const response = await axios.get('https://perenual.com/api/species-list', {
      params: {
        key: API_KEY,
        q: query,
      },
    });
    console.log('API Response:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching plants:', error);
    return [];
  }
};

export const fetchPlantDetails = async (plantId) => {
  try {
    const response = await axios.get(`https://perenual.com/api/species/${plantId}`, {
      params: {
        key: API_KEY,
      },
    });
    console.log('Plant Details Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching plant details:', error);
    return null;
  }
};
