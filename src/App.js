import useEnglish from './useEnglish'

function App() {

  const [ word, addOne ] = useEnglish(0)

  return (
    <div className="App">
      <p>current count: <span>{ word }</span></p>
      <button onClick={() => addOne()}>add 1</button>
    </div>
  );
}

export default App;
