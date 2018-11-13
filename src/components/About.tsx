import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";

interface AboutProps {
  initialiseApp: () => any;
  posts: Types.Posts;
}

class About extends React.Component<
  AboutProps,
  { title: string; content: string | Element }
> {
  state = { title: "", content: "" };

  componentDidMount() {
    this.props.initialiseApp();
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

export default About;
