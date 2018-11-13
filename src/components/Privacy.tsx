import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";

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
      title = <div>loading</div>;
      content = <div>loading</div>;
    }
    return (
      <div className="container">
        <Hero />
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h2 className="post-title">{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}
