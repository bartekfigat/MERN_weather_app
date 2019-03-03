import React, { Component } from "react";
const axios = require("axios");

const API = "http://localhost:8080/index";

export default class images extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    // this.handleDataFetch();
    this.handleDataFetch2();
    // this.axiosFetch();
  }

  axiosFetch = () => {
    axios
      .get(API)
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  handleDataFetch2 = () => {
    const options = {
      method: "GET",
      mode: "no-cors",
      cache: "default"
    };

    const request = new Request("http://localhost:8080/index", options);

    fetch(request)
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        console.log(response);
      });
  };

  handleDataFetch = () => {
    fetch(API, {
      mode: "no-cors"
    })
      .then(response => {
        console.log(response);

        if (response.ok) {
          return response;
        }

        throw Error("Error!!!!!!!!" + response);
      })
      .then(response => {
        response.json();
      })
      .then(response => {
        this.setState({
          images: response
        });
      }, console.log(images))
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.state.images);
    return <div>images</div>;
  }
}
