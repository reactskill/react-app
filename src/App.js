import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/count').then(res => res.json()).then(serverData => {
      setCount(serverData.count)
    })
  }, [])

  return (
    <div className="App">
      <p>current count: <span>{ count }</span></p>
      <button onClick={() => setCount(count + 1)}>add 1</button>
    </div>
  );
}

export default App;
