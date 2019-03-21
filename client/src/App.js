import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import AddCity from "./componets/Form/forms";
import NewCard from "./componets/newCard/NewCard";
import AppID from "./componets/GetPostId/GetID";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/index/:id" component={AppID} />
            <Link exact to="/">
              Mern weather app{" "}
            </Link>
          </Switch>
          <AddCity />
          <NewCard />
        </div>
      </Router>
    );
  }
}

export default App;
