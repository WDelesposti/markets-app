import React, { useState } from 'react';
import axios from 'axios';

function MarketSearch() {
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/markets/${searchName}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Market Search</h1>
      <input
        type="text"
        placeholder="Enter market name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result:any) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MarketSearch;