import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import App from "./App.jsx";
// import SearchBooks from "./pages/SearchBooks";
// import SavedBooks from "./pages/SavedBooks";
import ApolloClientProvider from "./apolloClient.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <SearchBooks />,
      },
      {
        path: "/saved",
        element: <SavedBooks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloClientProvider>
    <RouterProvider router={router} />
  </ApolloClientProvider>
);
