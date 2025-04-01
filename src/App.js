import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Lisbon",
      // wheather: null,
      // error: null,
    };
    this.fetchWheather = this.fetchWheather.bind(this);
  }

  async fetchWheather(location) {
    // console.log("Loading wheather...");
    // console.log(this)

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.location);
    } catch (error) {
    } finally {
    }
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

        {this.state.isLoading && <p className="loader">Loading...</p>}
      </div>
    );
  }
}
export default App;

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheather: null,
      error: null,
    };
  }

  componentDidMount() {
    this.props.fetchWheather(this.props.location);
  }

  render() {
    return <div>console.log(this.props);</div>;
  }
}

// export default Wheather
