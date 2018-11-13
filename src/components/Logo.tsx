import logo1 from "../img/DM-Name.png";

import React, { Component } from "react";

interface LogoProps {}
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
      <div id="Dm-logo">
        <img className="Dm-logo" src={logo1} alt="Das Medium" />
      </div>
    );
  }
}
export default Logo;
