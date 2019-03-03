import * as React from "react";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";
import LogoGif from "../components/LogoGif";
import * as Types from "../../src/redux/store/types";

interface TermsConditionsProps {
  getPagesInit: (params: string) => { payload: string };
  pages: State;
}
type State = Types.Pages;

class TermsConditions extends React.Component<
  TermsConditionsProps,
  { title: string; content: string }
> {
  state = { title: "", content: "" };
  componentDidMount() {
    this.props.getPagesInit("terms-and-conditions");
  }
  componentWillReceiveProps(nextProps: TermsConditionsProps) {
    if (nextProps.pages) {
      this.setState({
        title: nextProps.pages[0].title.rendered,
        content: nextProps.pages[0].content.rendered
      });
    }
  }

  render() {
    let title;
    let content;
    if (this.state.title && this.state.content) {
      title = <h1 dangerouslySetInnerHTML={{ __html: this.state.title }} />;
      content = <p dangerouslySetInnerHTML={{ __html: this.state.content }} />;
    } else {
      title = (
        <div>
          <LogoGif />
        </div>
      );
      content = <div />;
    }
    return (
      <div>
        <Header navClass="navbar navbar-expand-lg fixed-top" />
        <div className="container">
          <div className="row page-text-div">
            <div className="col-lg-8 col-md-10 mx-auto mt-5">
              <h2 className="post-title mt-5">{title}</h2>
              <p className="page-text">{content}</p>
            </div>
          </div>
        </div>
        <ConnectedFooter navClass="navbar fixed-bottom navbar-expand-sm nav-class-home" />
      </div>
    );
  }
}
export default TermsConditions;
