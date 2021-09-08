import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [select, setSelect] = useState("");
  const [id, setId] = useState(""); 

  const datatype = (e) => {
    setSelect(e.target.value);
    console.log(select);
  }
  const dataId = (e) => {
    if (!isNaN(e.target.value)) {
      setId(e.target.value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (select === "people") {
      axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {setPeople(response.data.results)})
    }
    if (select === "planets") {
      axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {setPlanets(response.data.results)})
    }
    setId("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <span>Search for: </span>
        <select onChange={datatype}>
          <option value={people}>people</option>
          <option value={planets}>planets</option>
        </select>
        <label> ID: </label>
        <input type="text" value={id} onChange={dataId}/>
        <input type="submit" value="Search"/>
      </form>
      <div>
        <h2>{people.name}</h2>
        <p>Height: {people.height}</p>
        <p>Mass: {people.mass}</p>
        <p>Hair Color: {people.hair_color}</p>
        <p>Skin Color: {people.skin_color}</p>
      </div>
      {/* <div>
        <h2>{planets.name}</h2>
        <p>Height: {planets.height}</p>
        <p>Mass: {planets.mass}</p>
        <p>Hair Color: {planets.hair_color}</p>
        <p>Skin Color: {planets.skin_color}</p>
      </div> */}
    </div>
  );
}

export default App;
