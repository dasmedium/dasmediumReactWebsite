import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";
import { ConnectedFooter } from "../../src/redux/containers/index";

interface DevProps {
  getPostsInit: () => any;
  posts: Types.Posts;
}

class Developers extends React.Component<
  DevProps,
  { title: string; content: string | Element }
> {
  state = { title: "", content: "" };

  componentDidMount() {
    this.props.getPostsInit();
  }
  componentWillReceiveProps(posts: any) {
    if (posts.posts) {
      this.setState({
        title: posts.posts[1].title.rendered,
        content: posts.posts[1].content.rendered
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
        <div className="container">
          <Hero
            title={title}
            subheading="Hit me up..."
            headerClass="masthead hero-dev"
          />
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p className="page-text">{content}</p>
            </div>
          </div>
        </div>
        <ConnectedFooter navClass="navbar fixed-bottom navbar-expand-sm nav-class" />
      </div>
    );
  }
}

export default Developers;
