import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>current count: <span data-testid="count">{ count }</span></p>
      <button onClick={() => setCount(count + 1)}>add 1</button>
    </div>
  );
}

export default App;
