const { Schema, model } = require('mongoose');

const plantSchema = new Schema({
  common_name: {
    type: String,
    required: true
  },
  scientific_name: {
    type: String,
    required: true
  },
  sunlight: {
    type: [String],
    required: true
  },
  watering: {
    type: String,
    required: true
  },
  cycle: {
    type: String,
    required: true
  },
  default_image: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;
