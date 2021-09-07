import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const handlePokemon = (e) => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      // .then(response => {response.json(e)})
      .then(response => {setPokemon(response.results)})
  }
  return (
    <div className="App">
      <button onClick={handlePokemon}>Fetch</button>
      {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
        return (<div key={index}>{pokemon.name}</div>)
      })}
    </div>
  );
}

export default App;
