import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ApolloClientProvider from "./apolloClient";
import "./App.css";
import SavedGuides from './components/SavedGuides';
import Donate from './components/Donate';
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloClientProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/saved-guides" element={<SavedGuides />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  </ApolloClientProvider>
);