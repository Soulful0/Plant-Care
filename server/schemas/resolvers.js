const { AuthenticationError } = require("apollo-server-express");
const { User, Plant, Species } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError("Not logged in");
    },
    plants: async () => {
      return Plant.find().populate("species");
    },
    plant: async (parent, { id }) => {
      return Plant.findById(id).populate("species");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addPlant: async (parent, args) => {
      return Plant.create(args);
    },
    updatePlant: async (parent, { id, ...args }) => {
      return Plant.findByIdAndUpdate(id, args, { new: true }).populate(
        "species"
      );
    },
    deletePlant: async (parent, { id }) => {
      return Plant.findByIdAndRemove(id);
    },
  },
};

module.exports = resolvers;
