const { AuthenticationError } = require('apollo-server-express');
const { User, Plant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedPlants');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    signup: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    savePlant: async (parent, { common_name, scientific_name, sunlight, watering, cycle, default_image }, context) => {
      if (context.user) {
        const plant = await Plant.create({ common_name, scientific_name, sunlight, watering, cycle, default_image });
        
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedPlants: plant._id } },
          { new: true }
        ).populate('savedPlants');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePlant: async (parent, { plantId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedPlants: plantId } },
          { new: true }
        ).populate('savedPlants');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updatePlantNote: async (parent, { plantId, note }, context) => {
      if (context.user) {
        const plant = await Plant.findOneAndUpdate(
          { _id: plantId },
          { note: note },
          { new: true }
        );
        return plant;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
