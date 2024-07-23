const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: Schema.Types.ObjectId,
    ref: "Species",
    required: true,
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
