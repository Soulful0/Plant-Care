import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoBoxes from "./components/infoBoxes";
import SearchBar from "./components/SearchBar";
import PlantList from "./components/PlantList";

const App = () => {
  const [plants, setPlants] = useState([]);

  return (
    <div style={{ backgroundColor: '#85c88a', minHeight: '100vh' }}>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="title has-text-centered" style={{color: '#000'}}>HOME PAGE</h1>
                <SearchBar setPlants={setPlants} />
                <PlantList plants={plants} />
                <InfoBoxes />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
