const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const plantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  species: {
    type: Schema.Types.ObjectId,
    ref: "Species",
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  lastWatered: {
    type: Date,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;
