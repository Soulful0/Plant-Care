const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    plants: [Plant]
    species: [Species]
    plant(id: ID!): Plant
    speciesById(id: ID!): Species
  }

  type Mutation {
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
    addSpecies(
      name: String!
      description: String
      wateringFrequency: Int
    ): Species
    updateSpecies(
      id: ID!
      name: String
      description: String
      wateringFrequency: Int
    ): Species
    deleteSpecies(id: ID!): Species
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
`;

module.exports = typeDefs;
