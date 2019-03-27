import React, { Component } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

import axios from "axios";
const defaultSatte = {
  city: "",
  inputError: "",
  success: ""
};
class AddCity extends Component {
  state = { defaultSatte };

  handleChange = e => {
    let city = e.target.value;
    this.setState({ city });
  };
  validate = () => {
    let inputError = "";

    if (!this.state.city) {
      inputError = "enter the city";
    }
    if (inputError) {
      this.setState({ inputError });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const user = {
        city: this.state.city
      };
      this.setState(defaultSatte);
      // this.props.history.push("/");

      axios
        .post(`/weather`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          // handle error
          let erro = this.setState.err;
          console.log(error, { err: erro });
        });
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              {this.state.inputError ? (
                <Alert variant="danger">Please {this.state.inputError} </Alert>
              ) : null}
              <Form.Group>
                <Form.Label>Yor city</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  placeholder="Enter city"
                />
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add city:
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddCity;
