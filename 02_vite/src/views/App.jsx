import React, { useState } from "react";
const App = function () {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
      <h2>react: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}

export default App