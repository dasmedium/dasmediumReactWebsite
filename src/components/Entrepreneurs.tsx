import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";

interface AboutProps {
  getPostsInit: () => any;
  posts: Types.Posts;
}

class Entrepreneurs extends React.Component<
  AboutProps,
  { title: string; content: string | Element }
> {
  state = { title: "", content: "" };

  componentDidMount() {
    this.props.getPostsInit();
  }
  componentWillReceiveProps(posts: any) {
    if (posts.posts) {
      this.setState({
        title: posts.posts[0].title.rendered,
        content: posts.posts[0].content.rendered
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
      title = <div />;
      content = <div />;
    }
    return (
      <div>
        <Header navClass="navbar navbar-expand-lg fixed-top" />
        <div>
          <Hero
            title={title}
            subheading="...let's build"
            headerClass="masthead hero-ent"
          />
          <div className="row">
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

export default Entrepreneurs;
