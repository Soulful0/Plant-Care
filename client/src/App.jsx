import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoBoxes from "./components/infoBoxes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <InfoBoxes />
    </div>
  );
};

export default App;
