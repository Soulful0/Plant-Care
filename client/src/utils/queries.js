import { gql } from "@apollo/client";

export const GET_PLANTS = gql`
  query plants {
    plants {
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
