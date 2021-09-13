import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ margin: "1em 3em 1em 3em" }}>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/:id">
            <Details/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
