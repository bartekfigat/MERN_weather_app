import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import Moment from "react-moment";

import axios from "axios";

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
          {data.map((all, i) => (
            <MDBCardBody key={i}>
              <MDBRow>
                <MDBCol lg="5" xl="4">
                  <MDBView
                    hover
                    className="rounded z-depth-1-half mb-lg-0 mb-4"
                  >
                    <img
                      className="img-fluid"
                      src={all.displayImages}
                      alt="img"
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <p className="h1-responsive font-weight-bold text-center my-5">
                      {all.city}
                    </p>
                    <strong>{all.description}</strong>
                  </h3>

                  <p className="dark-grey-text">
                    {all.info},{all.temperature},
                    <img src={all.iconLink} alt="img" />
                  </p>
                  <p>
                    by{" "}
                    <a href="#!" className="font-weight-bold">
                      Jessica Clark
                    </a>
                    ,{" "}
                    <Moment fromNow ago>
                      {all.date}
                    </Moment>
                  </p>
                  <Link to={`/index/${all._id}`}>
                    <MDBBtn color="primary" size="md">
                      Read More
                    </MDBBtn>
                  </Link>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          ))}
        </MDBCard>
      );
    }
  }
}

export default App;
