import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import HomePage from './views/HomePage';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/new">
            <NewAuthor/>
          </Route>
          <Route exact path="/edit/:id">
            <UpdateAuthor/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
