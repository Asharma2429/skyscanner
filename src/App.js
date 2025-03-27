import React, { useState } from "react";
import { searchResults } from "./api";

function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchResults(city);
    setResults(data);
  };

  return (
    <div>
      <h1>Flight Schedule</h1>
      <input 
        type="text" 
        placeholder="Enter city..." 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      
      <h2>Results:</h2>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.title} - {item.kind} ({item.city})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
