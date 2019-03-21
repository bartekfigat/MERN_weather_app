import React, { Component } from "react";
import axios from "axios";
import {
  MDBCard,
} from "mdbreact";

import Spinner from "../spinner/Spinner";
import Post from "../GetPostId/Post";

const back_end_api = "/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(back_end_api)
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
    // const toUpperCaseFilter = d => {
    //   return d.toUpperCase();
    // };
    const { data } = this.state;

    if (!data || data === null) {
      return <Spinner />;
    } else {
      return (
        <MDBCard className="my-5 px-5 pb-5">
          {data.map((all, i) => <Post post={all} link key={`post-${i}`} />)}
        </MDBCard>
      );
    }
  }
}

export default App;
