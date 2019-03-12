import React, { Component } from "react";
import axios from "axios";

class AddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ city: e.target.vaule });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      city: this.state.city
    };
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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
            <input type="text" name="city" onChange={this.handleChange} />
          </label>
          <button type="submit">Add city:</button>
        </form>
      </div>
    );
  }
}

export default AddCity;
