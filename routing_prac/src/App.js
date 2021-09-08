import './App.css';
import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";


const Element = (props) => {
  const { element } = useParams();
  if (!isNaN(element)) {
    return <h1>Your number is: { element }</h1>
  } else {
    return <h1>Your word is: { element }</h1>
  }
}

const StringColor = (props) => {
  const {string} = useParams();
  const {color1} = useParams();
  const {color2} = useParams();
  const style = {
    color: color1,
    backgroundColor: color2
  }
  if (isNaN(string)) {   
    return <h1 style={ style }>{ string }</h1>
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <h1>Welcome!</h1>
        </Route>
        <Route exact path="/:element">
          <Element/>
        </Route>
        <Route exact path="/:string/:color1/:color2">
          <StringColor/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
