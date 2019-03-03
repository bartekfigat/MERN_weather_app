import React, { Component } from "react";
import "./App.css";
import Images from "./componets/images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello from MERN_weather_app</h1>
        <Images />
      </div>
    );
  }
}

export default App;
