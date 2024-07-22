import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ensure correct path to Navbar component
import "./App.css"; // Ensure Bulma is imported here

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
