import logo from './logo.svg';
import './App.css';

import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard title="Jane Doe" age={45} color="Black" />
      <PersonCard title="John Smith" age={88} color="Brown" />
      <PersonCard title="Millard Fillmore" age={50} color="Brown" />
      <PersonCard title="Maria Smith" age={62} color="Brown" />
    </div>
  );
}

export default App;
