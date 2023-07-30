import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 data-testid="counter">Counter:{count}</h1>
      <button data-testid="addButton" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button data-testid="reduceButton" onClick={() => setCount(count - 1)}>
        sub
      </button>
    </div>
  );
}

export default App;
