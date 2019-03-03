import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import "./bootstrap.min.css";
import Navbar from "./componets/Navbar";
import Images from "./componets/images";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Images />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
