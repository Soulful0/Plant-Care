const { MongoClient } = require("mongodb");
const axios = require("axios");
require("dotenv").config();
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = "plantDB";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 60000,
  socketTimeoutMS: 60000,
  connectTimeoutMS: 60000,
});
async function run() {
  try {
    await client.connect();
    console.log("MongoDB connected successfully");
    const db = client.db(dbName);
    const plantsCollection = db.collection("plants");
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
    for (let i = 0; i < Math.min(plants.length, 5); i++) {
      const plant = plants[i];
      console.log("Processing plant:", plant.common_name);
      const newPlant = {
        name: plant.common_name,
        scientificName: plant.scientific_name.join(", "),
        species: null,
        age: null,
        lastWatered: null,
        location: null,
        notes: null,
      };
      try {
        await plantsCollection.insertOne(newPlant);
        console.log(`Saved plant: ${newPlant.name}`);
      } catch (saveError) {
        console.error("Error saving plant:", saveError);
      }
    }
    console.log("Processed and attempted to save a few plants");
  } catch (error) {
    console.error("Error fetching or saving plant data:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed");
  }
}
run().catch(console.error);
