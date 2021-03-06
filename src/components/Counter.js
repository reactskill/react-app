import React from 'react'

class Counter extends React.Component {

  constructor() {
    super()
    this.state = { count: 0 }
  }

  addOne() {
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1 })
  }

  render() {
    return (
      <div>
        <p>current count: <span>{ this.state.count }</span></p>
        <p>
          <button onClick={() => this.addOne()}>Add one</button>
        </p>
      </div>
    )
  }
}

export default Counter