import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router";
import classnames from "classnames";

export type FooterProps = RouteComponentProps<{}> & {
  navClass: string;
};

class Footer extends Component<FooterProps> {
  navClass = classnames(this.props.navClass);
  render() {
    return (
      <nav className={this.navClass}>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/developers">
          Developers
        </Link>
        <Link className="nav-link" to="/entrepreneurs">
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
