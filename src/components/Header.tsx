import * as React from "react";
import DMlogo from "./Logo";
import classnames from "classnames";
import { ConnectedFooter } from "../../src/redux/containers/index";

interface HeaderProps {
  navClass: string;
}

class Header extends React.Component<HeaderProps> {
  navClass = classnames(this.props.navClass);
  render() {
    return (
      <div className="container">
        <div className="collapse" id="navmenuToggle">
          <ConnectedFooter navClass="navbar fixed-top navbar-expand-sm nav-home flex-column align-items-end" />
        </div>
        <nav className={this.navClass}>
          <div>
            <DMlogo />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navmenuToggle"
            aria-controls="navmenuToggle"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="fas fa-bars" />
          </button>
        </nav>
      </div>
    );
  }
}
export default Header;
