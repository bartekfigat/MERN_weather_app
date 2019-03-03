import React, { Component } from "react";
const axios = require("axios");

// const API = "http://localhost:8080/index";
const API = "/index";

export default class images extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios
      .get(API)
      .then(function(response) {
        // handle success
        const images = response.data;
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

  handleDataFetch2 = () => {
    const options = {
      method: "GET",
      // mode: "no-cors",
      cache: "default"
    };

    const request = new Request(API, options);

    fetch(request)
      .then(function(response) {
        return response;
      })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(function(response) {
        console.log(response);
      });
  };

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        // console.log(response);

        if (response.ok) {
          return response;
        }

        throw Error("Error!!!!!!!!" + response);
      })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  component;

  render() {
    console.log(this.state.images);
    return <div>images</div>;
  }
}
