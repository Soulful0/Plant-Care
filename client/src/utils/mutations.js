import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SIGNUP_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_PLANT = gql`
  mutation savePlant(
    $common_name: String!
    $scientific_name: String!
    $sunlight: [String]!
    $watering: String!
    $cycle: String!
    $default_image: String!
  ) {
    savePlant(
      common_name: $common_name
      scientific_name: $scientific_name
      sunlight: $sunlight
      watering: $watering
      cycle: $cycle
      default_image: $default_image
    ) {
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
      }
    }
  }
`;
export const REMOVE_PLANT = gql`
  mutation removePlant($plantId: ID!) {
    removePlant(plantId: $plantId) {
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
      }
    }
  }
`;
export const UPDATE_PLANT_NOTE = gql`
  mutation updatePlantNote($plantId: ID!, $note: String!) {
    updatePlantNote(plantId: $plantId, note: $note) {
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
`;
