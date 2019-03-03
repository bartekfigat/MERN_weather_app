import React, { Component } from "react";

import "./App.css";
import "./bootstrap.min.css";
import Navbar from "./componets/Navbar";
import Images from "./componets/images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Images />
      </div>
    );
  }
}

export default App;
