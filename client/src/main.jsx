import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApolloClientProvider from "./apolloClient"; // Ensure correct path to ApolloClientProvider
import App from "./App";
import "./App.css"; // Ensure Bulma is imported here

const Home = () => (
  <h1 className="is-flex is-justify-content-center">Home Page</h1>
);
const About = () => <h1>About Page</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloClientProvider>
    <RouterProvider router={router} />
  </ApolloClientProvider>
);
