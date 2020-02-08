import * as React from "react";
import * as Types from "../../src/redux/store/types";
import LogoGif from "../components/LogoGif";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";
const clean = require('dompurify');

interface PrivacyProps {
  getPagesInit: (params: string) => { payload: string };
  pages: State;
}
type State = Types.Pages;

export default class Privacy extends React.Component<
  PrivacyProps,
  { title: string; content: string }
> {
  state = { title: "", content: "" };
  componentDidMount() {
    this.props.getPagesInit("privacy-policy");
  }

  // TODO: Get page by id
  componentWillReceiveProps(nextProps: PrivacyProps) {
    if (nextProps.pages) {
      this.setState({
        title: nextProps.pages[0].title.rendered,
        content: nextProps.pages[0].content.rendered
      });
    }
  }
  render() {
    let title = clean.sanitize(this.state.title);
    let content = clean.sanitize(this.state.content);
    if (this.state.title && this.state.content) {
      title = <h1 dangerouslySetInnerHTML={{ __html: title }} />;
      content = <p dangerouslySetInnerHTML={{ __html: content }} />;
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
