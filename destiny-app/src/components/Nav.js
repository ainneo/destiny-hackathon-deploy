import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        </nav>
      </div>
    );
  }
}

export default Nav;
