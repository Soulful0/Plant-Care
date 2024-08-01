import React, { useState } from 'react';
import { fetchPlants } from '../utils/API';

const SearchBar = ({ setPlants }) => {
  const [query, setQuery] = useState('');
  const handleSearch = async () => {
    const data = await fetchPlants(query);
    setPlants(data.data);
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: 'white',
  };

  return (
    <div className="field has-addons has-addons-centered" style={{ marginTop: '20px' }}>
      <div className="control is-expanded" style={{ maxWidth: '850px' }}>
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for plants"
          style={{ fontSize: '1rem', height: '2.5rem' }}
        />
      </div>
      <div className="control">
        <button
          className="button"
          onClick={handleSearch}
          style={{ ...buttonStyle, fontSize: '1rem', height: '2.5rem' }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
