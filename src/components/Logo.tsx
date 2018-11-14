import logo1 from "../img/DM-Name.png";

import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";
export type LogoProps = RouteComponentProps<{}>;

interface LogoState {
  currentImage: number;
}
class Logo extends Component<LogoProps, LogoState> {
  constructor(props: LogoProps) {
    super(props);
    this.state = {
      currentImage: 0
    };
  }

  render() {
    return (
      <Link to="/">
        <div id="Dm-logo">
          <img className="Dm-logo" src={logo1} alt="Das Medium" />
        </div>
      </Link>
    );
  }
}
export default withRouter(Logo);
