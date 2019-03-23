import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

import { Button, Row, Card, Container, Col, Jumbotron } from "react-bootstrap";
import Moment from "react-moment";
=======
import axios from "axios";
import {
  MDBCard,
} from "mdbreact";
>>>>>>> 960f0276456fb3c68ffe2e1bf957182f2f8d8623

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
<<<<<<< HEAD
        <Jumbotron>
          <Container className="d-flex flex-column">
            <Row className="justify-content-md-center">
              {data.map((all, i) => (
                <Col xs={6} md={4}>
                  <Card key={i} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={all.displayImages} alt="img" />
                    <Card.Body>
                      <Card.Title>{all.city}</Card.Title>
                      <Card.Text>
                        <img src={all.iconLink} alt="" />
                        {all.desription}
                        <Moment fromNow ago>
                          {all.date}
                        </Moment>
                      </Card.Text>
                      <Link to={`/index/${all._id}`}>
                        <Button variant="primary">Primary</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Jumbotron>
=======
        <MDBCard className="my-5 px-5 pb-5">
          {data.map((all, i) => <Post post={all} link key={`post-${i}`} />)}
        </MDBCard>
>>>>>>> 960f0276456fb3c68ffe2e1bf957182f2f8d8623
      );
    }
  }
}
export default App;
