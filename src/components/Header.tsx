import React, { Component } from "react";
import DMlogo from "./Logo";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div>
            <DMlogo />
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
