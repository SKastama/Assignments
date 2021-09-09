import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [output, setOutput] = useState({});
  const [select, setSelect] = useState("");
  const [id, setId] = useState(""); 

  const datatype = (e) => {
    setSelect(e.target.value);
  }
  const dataId = (e) => {
    if (!isNaN(e.target.value)) {
      setId(e.target.value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${select}/${id}`)
      .then(response => {setOutput(response.data)})
      .catch(error => {console.log(error)});
    setId("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <span>Search for: </span>
        <select onChange={datatype}>
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
        <label> ID: </label>
        <input type="text" value={id} onChange={dataId}/>
        <input type="submit" value="Search"/>
      </form>
      {
        select === "people"?
        <div>
          <h2>Name: {output["name"]}</h2>
          <p>Height: {output["height"]}</p>
          <p>Mass: {output["mass"]}</p>
          <p>Hair Color: {output["hair_color"]}</p>
          <p>Skin Color: {output["skin_color"]}</p>
        </div> :
        <div></div>
      }
      {
        select === "planets"?
        <div>
          <h2>Name: {output["name"]}</h2>
          <p>Climate: {output["climate"]}</p>
          <p>Terrain: {output["terrain"]}</p>
          <p>Surface Water: {output["surface_water"]}</p>
          <p>Population: {output["population"]}</p>
        </div> :
        <div></div>
      }
    </div>
  );
}

export default App;
