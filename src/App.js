import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      wheather: null,
      error: null,
    };
    this.fetchWheather = this.fetchWheather.bind(this);
  }

  fetchWheather () {
    console.log("Loading wheather...");
    console.log(this)

  }

  render() {
    return (
      <div className="app">
        <h1>Classy Wheather</h1>
        <div>
          <input
            type="text"
            placeholder="Search From Location..."
            value={this.state.location}
            onChange={(e) => {
              this.setState({ location: e.target.value });
            }}
          />
        </div>
        <button onClick={this.fetchWheather}>Got Wheather</button>
      </div>
    );
  }
}
export default App;
