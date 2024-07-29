import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import InfoBoxes from './components/infoBoxes';
import SearchBar from './components/SearchBar';
import PlantList from './components/PlantList';
const App = () => {
  const [plants, setPlants] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="title has-text-centered">HOME PAGE</h1>
        <SearchBar setPlants={setPlants} />
        <PlantList plants={plants} />
      </div>
      <InfoBoxes />
    </div>
  );
};
export default App;