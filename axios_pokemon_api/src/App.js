import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handlePokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      // .then(response => {response.json(e)})
      .then(response => {setPokemon(response.data.results)})
  }
  return (
    <div className="App">
      <button onClick={handlePokemon}>Fetch</button>
      {pokemon.map((pokemon) => {
        return (
          <div>
            <span>{pokemon.name}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
