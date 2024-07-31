const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/plantDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000,
    socketTimeoutMS: 60000,
    connectTimeoutMS: 60000,
  }
);
const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String, required: true },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Species",
    required: false,
  },
  age: { type: Number, required: false },
  lastWatered: { type: Date, required: false },
  location: { type: String, required: false },
  notes: { type: String, required: false },
});
const Plant = mongoose.model("Plant", plantSchema);
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});
mongoose.connection.once("open", async () => {
  console.log("Mongoose connection opened");
  await testMongooseInsert();
  mongoose.connection.close();
});
const testMongooseInsert = async () => {
  const newPlant = new Plant({
    name: "Test Plant",
    scientificName: "Testus Plantus",
    species: null,
    age: null,
    lastWatered: null,
    location: null,
    notes: null,
  });
  try {
    await newPlant.save();
    console.log(`Saved plant: ${newPlant.name}`);
  } catch (saveError) {
    console.error("Error saving plant:", saveError);
  }
};
