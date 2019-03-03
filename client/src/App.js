import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import "./bootstrap.min.css";
import Navbar from "./componets/Navbar";
import SectionSearch from "./componets/SectionSearch";
import Result from "./componets/Result";
import Images from "./componets/images";

const axios = require("axios");
const API = "/index";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get(API)
      .then(function(response) {
        // handle success
        const images = response.data;
        // console.log(images);
        this.setState({ images });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <SectionSearch />
          <Result data={this.state.images} />
          {/* <Images /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
