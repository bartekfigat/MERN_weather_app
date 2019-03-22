import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 960f0276456fb3c68ffe2e1bf957182f2f8d8623
=======
>>>>>>> parent of 2c11e47... Merge branch 'Nevo0' into playground
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import AddCity from "./componets/Form/forms";
import NewCard from "./componets/newCard/NewCard";
import AppID from "./componets/GetPostId/GetID";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import "./bootstrap.min.css";
import Navbar from "./componets/Navbar";
import SectionSearch from "./componets/SectionSearch";
import Result from "./componets/Result";
import Images from "./componets/images";

const axios = require("axios");
const API = "/index";
>>>>>>> Nevo0
=======
>>>>>>> 960f0276456fb3c68ffe2e1bf957182f2f8d8623
=======
>>>>>>> parent of 2c11e47... Merge branch 'Nevo0' into playground

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 2c11e47... Merge branch 'Nevo0' into playground
      <Router>
        <div className="App">
          <Link to="/">Mern weather app </Link>
          <AddCity />
          <Switch>
            <Route path="/" exact component={NewCard} />
            <Route path="/index/:city" component={AppID} />
          </Switch>
        </div>
      </Router>
<<<<<<< HEAD
=======
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <SectionSearch />
          <Result data={this.state.images} />
          {/* <Images /> */}
        </div>
      </BrowserRouter>
>>>>>>> Nevo0
=======
      <Router>
        <div className="App">
          <Link to="/">Mern weather app</Link>
          <AddCity />
          <Switch>
            <Route exact path="/" component={NewCard} />
            <Route path="/index/:id" component={AppID} />
          </Switch>
        </div>
      </Router>
>>>>>>> 960f0276456fb3c68ffe2e1bf957182f2f8d8623
=======
>>>>>>> parent of 2c11e47... Merge branch 'Nevo0' into playground
    );
  }
}

export default App;
