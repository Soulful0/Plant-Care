const axios = require("axios");
require("dotenv").config();
const fetchPlantData = async () => {
  try {
    const response = await axios.get("https://perenual.com/api/species-list", {
      params: {
        key: process.env.PERENUAL_API_KEY,
        page: 1,
      },
    });
    console.log("Fetched data:", response.data);
    const plants = response.data.data;
    if (!Array.isArray(plants)) {
      throw new Error("Expected an array of plants");
    }
    console.log("First plant:", plants[0]);
  } catch (error) {
    console.error("Error fetching plant data:", error);
  }
};
fetchPlantData();
