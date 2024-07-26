const { AuthenticationError } = require("apollo-server-express");
const Plant = require("../plants");
const Species = require("../species");

const resolvers = {
  Query: {
    plants: async () => {
      return await Plant.find().populate("species");
    },
    species: async () => {
      return await Species.find();
    },
    plant: async (parent, { id }) => {
      return await Plant.findById(id).populate("species");
    },
    speciesById: async (parent, { id }) => {
      return await Species.findById(id);
    },
  },
  Mutation: {
    addPlant: async (parent, args) => {
      const plant = await Plant.create(args);
      return plant.populate("species");
    },
    updatePlant: async (parent, { id, ...args }) => {
      const plant = await Plant.findByIdAndUpdate(id, args, {
        new: true,
      }).populate("species");
      return plant;
    },
    deletePlant: async (parent, { id }) => {
      return await Plant.findByIdAndDelete(id);
    },
    addSpecies: async (parent, args) => {
      const species = await Species.create(args);
      return species;
    },
    updateSpecies: async (parent, { id, ...args }) => {
      const species = await Species.findByIdAndUpdate(id, args, { new: true });
      return species;
    },
    deleteSpecies: async (parent, { id }) => {
      return await Species.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
