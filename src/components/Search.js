// src/components/Search.js
import React, { useState } from 'react';
import { searchRecords } from '../api'; // Import the API call function

function Search({ records, setRecords }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const foundRecords = await searchRecords(searchTerm);
      setRecords(foundRecords);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
