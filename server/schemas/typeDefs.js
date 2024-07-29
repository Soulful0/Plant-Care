const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Plant {
    _id: ID
    common_name: String
    scientific_name: String
    sunlight: [String]
    watering: String
    cycle: String
    default_image: String
    note: String
  }

  type User {
    _id: ID
    username: String
    email: String
    savedPlants: [Plant]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    plants: [Plant]
  }

  type Mutation {
    savePlant(
      common_name: String!,
      scientific_name: String!,
      sunlight: [String]!,
      watering: String!,
      cycle: String!,
      default_image: String!
    ): User
    removePlant(plantId: ID!): User
    updatePlantNote(plantId: ID!, note: String!): Plant
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
