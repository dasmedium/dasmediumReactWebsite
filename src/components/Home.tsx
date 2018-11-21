import * as React from "react";
import LogoGif from "./LogoGif";
import Header from "./Header";
import { RouteComponentProps, withRouter } from "react-router";
import { ConnectedFooter } from "../../src/redux/containers/index";

export type HomeProps = RouteComponentProps<{}> & {
  initialiseApp: () => any;
};
interface HomeState {
  posts: {};
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      posts: {}
    };
  }
  componentDidMount() {
    this.props.initialiseApp();
  }

  render() {
    return (
      <div>
        <Header navClass="navbar navbar-expand-lg fixed-top home" />
        <header className="home-div">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <LogoGif />
                </div>
              </div>
            </div>
          </div>
        </header>
        <ConnectedFooter navClass="navbar fixed-bottom navbar-expand-sm nav-class-home" />
      </div>
    );
  }
}

export default withRouter(Home);
