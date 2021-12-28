import React, { Component } from "react";
import style from "../styles/navbar.module.css";
class Navbar extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <div>
          <i className="fas fa-receipt"></i>
        </div>
        <span>My Shopping List</span>
      </nav>
    );
  }
}

export default Navbar;
