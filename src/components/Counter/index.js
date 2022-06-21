import React, { Component } from "react";

export default class Counter extends Component {
  onIncrement = () => {};

  onDecrement = () => {};

  render() {
    return (
      <p>
        Clicked: 0 times <button onClick={this.onIncrement}>+</button>{" "}
        <button onClick={this.onDecrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}
