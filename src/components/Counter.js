import React from 'react'

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count: this.props.startAt }
  }

  addOne() {
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1 })
  }

  render() {
    return (
      <div>
        <p>Started At: <span>{ this.props.startAt }</span></p>
        <p>current count: <span>{ this.state.count }</span></p>
        <p>
          <button onClick={() => this.addOne()}>Add one</button>
        </p>
      </div>
    )
  }
}

export default Counter