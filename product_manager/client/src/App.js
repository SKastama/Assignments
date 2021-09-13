import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App" style={{ margin: "1em 3em 1em 3em" }}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/:id">
          <Details/>
        </Route>
        <Route path="/:id/edit">
          <Update />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
