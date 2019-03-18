import React, { Component } from "react";

import axios from "axios";

class AppID extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // const { id } = this.props.match.params;

    axios
      .get(`/index/:id`)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    // const { data } = this.state;
    return (
      <div>
        <h1>Post id</h1>
      </div>
    );
  }
}

export default AppID;
