import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
import store from "../../redux/store";

export default class Counter extends Component {
  onIncrement = () => {
    store.dispatch(createIncrementAction());
  };

  onDecrement = () => {
    store.dispatch(createDecrementAction());
  };

  incrementIfOdd = () => {
    if (store.getState().count % 2 !== 0) {
      store.dispatch(createIncrementAction());
    }
  };

  incrementAsync = () => {
    store.dispatch(createIncrementAsyncAction(undefined, 1000));
  };

  render() {
    return (
      <p>
        Clicked: {store.getState().count} times{" "}
        <button onClick={this.onIncrement}>+</button>{" "}
        <button onClick={this.onDecrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}
