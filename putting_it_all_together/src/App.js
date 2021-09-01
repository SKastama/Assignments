import './App.css';

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard title="Jane Doe" age={45} color="Black" />
      <PersonCard title="John Smith" age={88} color="Brown" />
    </div>
  );
}

export default App;
