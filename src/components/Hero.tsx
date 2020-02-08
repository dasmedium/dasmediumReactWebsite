import * as React from "react";
import classnames from "classnames";



interface HeroProps {
  title: JSX.Element | string;
  subheading: JSX.Element | string;
  headerClass: string;
}

class Hero extends React.Component<HeroProps> {
  headerClass = classnames(this.props.headerClass);

  render() {
    const { title, subheading } = this.props;
    return (
      <header className={this.headerClass}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{title}</h1>
                <span className="subheading">{subheading}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Hero;
