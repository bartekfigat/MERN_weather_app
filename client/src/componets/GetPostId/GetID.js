import React, { Component } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import MapSection from "../Map/MapSection";
import Spinner from "../spinner/Spinner";
import axios from "axios";
import "./imgSlide.css";

// {this.renderImages(displayImages ? displayImages : [])}

class AppID extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      data: [],
      i: 0
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
    // const { id } = this.props.match.params;

    const {
      info,
      displayImages,
      city,
      temperature,
      iconLink
    } = this.state.data;

    this.handelNextImg = () => {
      const lastIndex = displayImages.length - 1;
      const { i } = this.state;
      const shouldResetIndex = i === 0;
      const index = shouldResetIndex ? lastIndex : i - 1;
      this.setState({
        i: index
      });
    };

    this.handelPrevImg = () => {
      const lastIndex = displayImages.length - 1;
      const { i } = this.state;
      const shouldResetIndex = i === lastIndex;
      const index = shouldResetIndex ? 0 : i + 1;
      this.setState({
        i: index
      });
    };

    if (!displayImages || displayImages === null) {
      return <Spinner />;
    } else {
      return (
        <Container key={this.props.id} className=" flex-column">
          <MapSection />
          <h1>{city}</h1>
          <h1>{temperature}</h1>
          <h1>
            <img src={iconLink} alt="" />
          </h1>
          <Row className="imgSlideShow">
            <Col xs={8} md={6}>
              <Button
                onClick={() => this.handelNextImg()}
                variant="outline-secondary"
              >
                Next
              </Button>
              <img
                style={{
                  width: "300px",
                  height: "600px"
                }}
                src={displayImages[this.state.i]}
                alt=""
              />
              <Button
                onClick={() => this.handelPrevImg()}
                variant="outline-secondary"
              >
                Prev
              </Button>
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
