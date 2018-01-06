import React from "react";
import Link from 'gatsby-link'


class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <div>
          <h1>This is my counter</h1>
          <p>current count: {this.state.count}</p>
          <button onClick={() => this.add()}>plus </button>
          <button onClick={() => this.minus()}>minus </button>
        </div>

        <div>
          <button onClick={() => this.reset()}>reset </button>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </div>

    )
  }

  add() {
    this.setState({count: this.state.count + 1})
  }
  minus() {
    this.setState({count: this.state.count - 1})
  }
  reset() {
    this.setState({count: 0})
  }
}

export default Counter;
