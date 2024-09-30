import React, { Component } from 'react'


export class Counter extends Component {

  constructor(props){
      super(props)

      this.state = {
        count : 0
      }
  }

    handleDec(){
    this.setState({
      count : this.state.count - 1
    })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => {
          this.setState({count: this.state.count + 1})
        }}>Increment</button>
        <button onClick={() => {
          this.handleDec()
        }}>Decrement</button>
      </div>
    )
  }
}

export default Counter;
