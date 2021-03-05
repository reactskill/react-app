function App() {

  const isGood = true

  return (
    <div className="App">
      {isGood &&
        <p>Yes, it's good.</p>
      }
      {!isGood &&
        <p>No, it's bad.</p>
      }
    </div>
  );
}

export default App;
