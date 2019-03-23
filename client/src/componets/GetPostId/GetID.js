import React, { Component } from "react";

import { Row, Container, Col } from "react-bootstrap";
import Spinner from "../spinner/Spinner";
import axios from "axios";

class AppID extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    axios
      .get(`/index/${id}`)
      .then(res => {
        const { data } = res;
        console.log(data);
        this.setState({ data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  renderImages = displayImages =>
    displayImages.map(i => <img src={i} alt="" />);

  // renderdesription = desription => desription.map(i => <h3>{i}</h3>);
  // <p>{this.renderdesription(desription ? desription : [])}</p>

  render() {
    const { id } = this.props.match.params;

    const {
      info,
      _id,
      displayImages,
      city,
      temperature,
      iconLink
    } = this.state.data;

    if (!displayImages || displayImages === null) {
      return <Spinner />;
    } else {
      return (
        <Container key={_id} className=" flex-column">
          <h1>{city}</h1>
          <h1>{temperature}</h1>
          <h1>
            <img src={iconLink} alt="" />
          </h1>
          <Row>
            <Col xs={8} md={6}>
              {this.renderImages(displayImages ? displayImages : [])}
            </Col>
            <Col md={4}>
              <h5>{info}</h5>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default AppID;
