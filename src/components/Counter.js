import React, { Component } from "react";

export default class Counter extends React.Component {
  componentDidMount() {
    console.log("Counter Did Mount");
  }
  componentDidUpdate() {
    console.log("Counter Component Updated");
  }
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState(preState => {
      return {
        count: preState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(preState => {
      return {
        count: preState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(preState => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
