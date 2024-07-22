import { gql } from "@apollo/client";

export const ADD_PLANT = gql`
  mutation addPlant(
    $name: String!
    $scientificName: String!
    $image: String
    $description: String
    $careInstructions: String
    $wateringFrequency: String
    $sunlightRequirements: String
    $lastWatered: String
  ) {
    addPlant(
      name: $name
      scientificName: $scientificName
      image: $image
      description: $description
      careInstructions: $careInstructions
      wateringFrequency: $wateringFrequency
      sunlightRequirements: $sunlightRequirements
      lastWatered: $lastWatered
    ) {
      _id
      name
      scientificName
      image
      description
      careInstructions
      wateringFrequency
      sunlightRequirements
      lastWatered
    }
  }
`;

export const UPDATE_PLANT = gql`
  mutation updatePlant(
    $id: ID!
    $name: String
    $scientificName: String
    $image: String
    $description: String
    $careInstructions: String
    $wateringFrequency: String
    $sunlightRequirements: String
    $lastWatered: String
  ) {
    updatePlant(
      id: $id
      name: $name
      scientificName: $scientificName
      image: $image
      description: $description
      careInstructions: $careInstructions
      wateringFrequency: $wateringFrequency
      sunlightRequirements: $sunlightRequirements
      lastWatered: $lastWatered
    ) {
      _id
      name
      scientificName
      image
      description
      careInstructions
      wateringFrequency
      sunlightRequirements
      lastWatered
    }
  }
`;

export const DELETE_PLANT = gql`
  mutation deletePlant($id: ID!) {
    deletePlant(id: $id) {
      _id
      name
      scientificName
    }
  }
`;
