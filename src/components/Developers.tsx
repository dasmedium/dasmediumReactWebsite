import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";
const clean = require('dompurify');

interface DevProps {
  getPostsInit: (params: string) => { payload: string };
  posts: State;
}
type State = Types.Posts;
class Developers extends React.Component<
  DevProps,
  { title: string; content: string | Element; }
> {
  state = { title: "", content: ""};

  componentDidMount() {
    this.props.getPostsInit("developers");
  }
  componentWillReceiveProps(nextProps: DevProps) {
    if (nextProps.posts) {
      this.setState({
        title: nextProps.posts[0].title.rendered,
        content: nextProps.posts[0].content.rendered
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
      title = <div />;
      content = <div />;

    }
    return (
      <div>
        <Header navClass="navbar navbar-expand-lg fixed-top" />
        <div>
          <Hero
            title={title}
            subheading="Get in touch..."
            headerClass="masthead hero-dev"
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

export default Developers;
