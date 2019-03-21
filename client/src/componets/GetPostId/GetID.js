import React, { Component } from "react";

import axios from "axios";

class AppID extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`/index/${id}`)
      .then(res => {
        const item = res.data;
        this.setState({ item }, console.log(item));
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Post id:${this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default AppID;
