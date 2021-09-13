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
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}
export default App;
