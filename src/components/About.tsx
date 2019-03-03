import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";

interface AboutProps {
  getPostsInit: (params: string) => { payload: string };
  posts: State;
}

type State = Types.Posts;

class About extends React.Component<
  AboutProps,
  { title: string; content: string | Element }
> {
  state = { title: "", content: "" };

  componentDidMount() {
    this.props.getPostsInit("about-us");
  }
  componentWillReceiveProps(nextProps: AboutProps) {
    if (nextProps.posts) {
      this.setState({
        title: nextProps.posts[0].title.rendered,
        content: nextProps.posts[0].content.rendered
      });
    }
  }

  render() {
    // let title;
    let content;
    if (this.state.title && this.state.content) {
      // title = <h1 dangerouslySetInnerHTML={{ __html: this.state.title }} />;
      content = <p dangerouslySetInnerHTML={{ __html: this.state.content }} />;
    } else {
      // title = <div>loading</div>;
      content = <div />;
    }
    return (
      <div>
        <Header navClass="navbar navbar-expand-lg fixed-top about" />
        <div>
          <Hero
            title="the who..."
            subheading="...And a bit about the why"
            headerClass="masthead about"
          />
          <div className="row page-text-div">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p className="page-text">{content}</p>
            </div>
          </div>
        </div>
        <ConnectedFooter navClass="navbar fixed-bottom navbar-expand-sm nav-class-home" />
      </div>
    );
  }
}

export default About;
