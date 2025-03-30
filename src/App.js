import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    console.log(this);
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const data = new Date("June 21 2027");
    data.setDate(data.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <button>{data.toDateString()} [{this.state.count}]</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;