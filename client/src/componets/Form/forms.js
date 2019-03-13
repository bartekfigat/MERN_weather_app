import React, { Component } from "react";
import axios from "axios";

class AddCity extends Component {
  state = {
    city: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    let city = e.target.value;

    this.setState({ city });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      city: this.state.city
    };
    console.log("dziala");

    axios
      .post(`/weather`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    console.log("axios");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
            {/* <input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.city}
            /> */}
            <input
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Add city:
          </button>
        </form>
      </div>
    );
  }
}

export default AddCity;
