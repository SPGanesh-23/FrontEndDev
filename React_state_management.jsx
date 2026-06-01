import React from 'react';
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        React Components & State Management
      </h1>
      <Counter />
    </div>
  );
}

export default App;