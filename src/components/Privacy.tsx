import * as React from "react";
import * as Types from "../../src/redux/store/types";
import LogoGif from "../components/LogoGif";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";
interface PrivacyProps {
  getPagesInit: () => any;
  pages: Types.Pages;
}

export default class Privacy extends React.Component<
  PrivacyProps,
  { title: string; content: string | Element }
> {
  state = { title: "", content: "" };
  componentDidMount() {
    this.props.getPagesInit();
  }
  componentWillReceiveProps(pages: any) {
    if (pages.pages) {
      this.setState({
        title: pages.pages[1].title.rendered,
        content: pages.pages[1].content.rendered
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
          <div className="row">
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
