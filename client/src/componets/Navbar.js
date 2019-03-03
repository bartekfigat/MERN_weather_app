import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Globals/Logo";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    nacCollapse: "collapse navbar-collapse",
    links: [
      {
        id: 0,
        path: "/",
        text: "home"
      },
      {
        id: 1,
        path: "/forecasts",
        text: "forecasts"
      },
      {
        id: 2,
        path: "/climatechange",
        text: "climate change"
      },
      {
        id: 3,
        path: "/lifestyle",
        text: "lifestyle"
      },
      {
        id: 4,
        path: "/photos",
        text: "photos"
      },
      {
        id: 5,
        path: "/news",
        text: "news"
      }
    ]
  };

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          nacCollapse: "collapse navbar-collapse"
        })
      : this.setState({
          navbarOpen: true,
          nacCollapse: "collapse navbar-collapse show"
        });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-danger">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon">Menu</span>
        </button>
        <div className={this.state.nacCollapse}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link
                    to={link.path}
                    className=" nav-link text-success text-capitalize"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
