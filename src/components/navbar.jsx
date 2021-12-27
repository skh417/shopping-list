import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div style={{ fontSize: "40px", color: "pink" }}>
          <i className="fas fa-receipt"></i>
        </div>
        <span>Is's My receipt</span>
      </nav>
    );
  }
}

export default Navbar;
