const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    plants: [Plant]
    plant(id: ID!): Plant
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPlant(
      name: String!
      species: ID!
      age: Int
      lastWatered: String
      location: String
      notes: String
    ): Plant
    updatePlant(
      id: ID!
      name: String
      species: ID
      age: Int
      lastWatered: String
      location: String
      notes: String
    ): Plant
    deletePlant(id: ID!): Plant
  }

  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Plant {
    _id: ID!
    name: String!
    species: Species!
    age: Int
    lastWatered: String
    location: String
    notes: String
  }

  type Species {
    _id: ID!
    name: String!
    description: String
    wateringFrequency: Int
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
