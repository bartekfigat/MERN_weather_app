import React, { Component } from "react";
import "./App.css";

import Api from "./componets/cards/fetch";
import AddCity from "./componets/Form/forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mern weather app </h1>
        <AddCity />
        <Api />
      </div>
    );
  }
}

export default App;
