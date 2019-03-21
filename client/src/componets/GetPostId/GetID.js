import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";

class AppID extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`/index/${id}`)
      .then(res => {
        const item = res.data;
        this.setState({ item });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        <h1>Post id:${this.props.match.params.id}</h1>
        <Post post={item} />
      </div>
    );
  }
}

export default AppID;
