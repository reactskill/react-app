import React from 'react'

function App() {
  return (
    React.createElement('div', { className: 'App' }, [
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Hello'),
        React.createElement('li', {}, 'World'),
      ])
    ])
    // <div className="App">
    //   <ul>
    //     <li>Hello</li>
    //     <li>World</li>
    //   </ul>
    // </div>
  );
}

export default App;
