import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    let isMounted = true
    fetch('/count').then(res => res.json()).then(serverData => {
      if(isMounted) {
        setCount(serverData.count)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="App">
      <p>current count: <span data-testid="count">{ count }</span></p>
      <button onClick={() => setCount(count + 1)}>add 1</button>
    </div>
  );
}

export default App;
