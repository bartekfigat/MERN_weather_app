import React, { Component } from "react";
import "./App.css";

import AddCity from "./componets/Form/forms";
import NewCard from "./componets/newCard/NewCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mern weather app </h1>
        <AddCity />
        <NewCard />
      </div>
    );
  }
}

export default App;
