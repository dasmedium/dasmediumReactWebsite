import logo1 from "../img/DM-Icon-(mad).png";
import logo2 from "../img/DM-Icon-(tired).png";
import logo3 from "../img/DM-Icon-(surprised).png";
import logo4 from "../img/DM-Icon-(determined).png";

import React, { Component } from "react";

interface LogoProps {}
interface LogoState {
  currentImage: number;
}
class LogoGif extends Component<LogoProps, LogoState> {
  constructor(props: LogoProps) {
    super(props);
    this.state = {
      currentImage: 0
    };
  }

  getRandomImageId() {
    const min: number = 0;
    const max: number = 3;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentImage: this.getRandomImageId()
      });
    }, 6000);
  }

  render() {
    const images = [logo1, logo2, logo3, logo4];
    return (
      <div id="Dm-logo-gif">
        <img
          className="Dm-logo-gif"
          src={images[this.state.currentImage]}
          alt="Das Medium"
        />
      </div>
    );
  }
}
export default LogoGif;
