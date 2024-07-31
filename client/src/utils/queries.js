import { gql } from "@apollo/client";
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedPlants {
        _id
        common_name
        scientific_name
        sunlight
        watering
        cycle
        default_image
        note
      }
    }
  }
`;
export const GET_PLANTS = gql`
  query plants {
    plants {
      _id
      name
      scientificName
    }
  }
`;
export const GET_SAVED_PLANTS = gql`
  query GetSavedPlants {
    me {
      savedPlants {
        _id
        name
        scientificName
        defaultImage
        sunlight
        watering
      }
    }
  }
`;
export const QUERY_SAVED_PLANTS = gql`
  query GetSavedPlants {
    me {
      _id
      username
      email
      savedPlants {
        _id
        name
        scientificName
        defaultImage
        watering
        sunlight
      }
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedPlants {
        _id
        name
        scientificName
        defaultImage
        watering
        sunlight
      }
    }
  }
`;
