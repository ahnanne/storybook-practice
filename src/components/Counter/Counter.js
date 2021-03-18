import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterControl from './CounterControl';

export default class Counter extends Component {
  state = {
    number: 0,
  };

  changeNumber = e => {
    this.setState((prevState) => {
      console.log(prevState);
      if (e.target.matches('.decrease')) { // -를 누르면
        return {
          number: prevState.number - 1
        };
      } else { // +를 누르면
        return {
          number: prevState.number + 1
        };
      }
    });
  }

  render() {
    return (
      <>
        <CounterControl
          onControl={this.changeNumber}
          className="decrease"
        >감소</CounterControl>
        <CounterDisplay
          number={this.state.number}
        />
        <CounterControl
          onControl={this.changeNumber}
          className="increase"
        >증가</CounterControl>
      </>
    );
  }
}