const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        console.log('User context:', context.user);
        return User.findById(context.user._id);
      }
      console.log('No user in context');
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      console.log('Generated token:', token);
      return { token, user };
    },

    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        console.log("User created:", user);
        return { token, user };
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Error creating user");
      }
    }
  },
};

module.exports = resolvers;
