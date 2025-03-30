import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }

  render() {
    return (
      <div>
        <button>-</button>
        <button>{this.state.count}</button>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
