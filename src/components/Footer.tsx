import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router";

export type FooterProps = RouteComponentProps<{}>;

class Footer extends Component<FooterProps> {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-expand-sm">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/about">
          Developers
        </Link>
        <Link className="nav-link" to="/about">
          Entrepreneurs
        </Link>
        <Link className="nav-link" to="/privacy">
          Privacy
        </Link>
      </nav>
    );
  }
}
export default withRouter(Footer);
