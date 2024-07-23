const { Schema, model } = require("mongoose");

const speciesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  wateringFrequency: {
    type: Number,
    required: false,
  },
});

const Species = model("Species", speciesSchema);

module.exports = Species;
