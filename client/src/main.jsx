import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SearchBar from './components/SearchBar';
import ApolloClientProvider from "./apolloClient";
import "./App.css";
import SavedGuides from './components/SavedGuides';
const Home = () => (
  <>
    <h1 className="title has-text-centered">HOME PAGE</h1>
    <SearchBar setPlants={setPlants} />
    <PlantList plants={plants} />
    <InfoBoxes />
  </>
);
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
        path: "about",
        element: (
          <>
            <h1 className="is-flex is-justify-content-center">About Page</h1>
          </>
        ),
      },
    ],
  },
  {
    path: "/saved-guides",
    element: <SavedGuides />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloClientProvider>
    <RouterProvider router={router} />
  </ApolloClientProvider>
);