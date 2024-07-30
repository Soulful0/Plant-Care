# Plant Care Website

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Screenshots](#Screenshots)
- [License](#license)
- [Contact](#contact)

## Description
The Plant Care website is a MERN (MongoDB, Express.js, React.js, Node.js) SPA (Single Page Application) designed to help users manage their plants. Users can create and log in to their accounts, find and save plants, and track schedules for caring for their plants.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository_url>
    ```

2. Navigate to the project directory:
    ```sh
    cd plant-care
    ```

3. Install dependencies for the client:
    ```sh
    cd client
    npm install
    ```

4. Install dependencies for the server:
    ```sh
    cd ../server
    npm install
    ```

5. Create a `.env` file in both the `client` and `server` directories with the necessary environment variables:
    - `client/.env`:
      ```env
      REACT_APP_API_URL=<your_api_url>
      ```

    - `server/.env`:
      ```env
      MONGODB_URI=<your_mongodb_uri>
      JWT_SECRET=<your_jwt_secret>
      STRIPE_SECRET_KEY=<your_stripe_secret_key>
      ```

6. Start the development servers:
    - Client:
      ```sh
      cd client
      npm run dev
      ```

    - Server:
      ```sh
      cd ../server
      npm run dev
      ```

## Usage
1. Visit the website.
2. Create an account or log in with existing credentials.
3. Search for plants and view their details.
4. Save plants to your profile.
5. Track your plant care schedule.

## Features
- User authentication and authorization
- Search and view plant details
- Save favorite plants
- Track plant care schedules
- Stripe integration for donations

## Technologies
- Frontend: React.js, Apollo Client, GraphQL
- Backend: Node.js, Express.js, MongoDB, Mongoose, GraphQL
- Styling: CSS
- Authentication: JWT
- Payment: Stripe

## Screenshots


## License


## Contact Us
