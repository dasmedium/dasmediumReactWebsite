import * as React from "react";
import * as Types from "../../src/redux/store/types";
import Hero from "./Hero";
import Header from "./Header";
import { ConnectedFooter } from "../../src/redux/containers/index";

interface AboutProps {
  getPostsInit: () => any;
  posts: Types.Posts;
}

class About extends React.Component<
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
        title: posts.posts[2].title.rendered,
        content: posts.posts[2].content.rendered
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
      content = (
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quo
          deleniti molestias omnis quos aperiam ab qui sequi nobis, dolorem a
          molestiae aliquam voluptates vel, distinctio quam. At, architecto
          dolores. Vitae iusto enim deserunt laudantium recusandae maxime,
          officia dignissimos laboriosam minima error possimus incidunt tenetur
          ipsa corrupti? Facilis velit labore nobis alias illo omnis cupiditate
          earum eum et dolorem! Voluptas maiores illum hic explicabo. Aut dolor
          aliquid voluptatum, architecto molestias qui placeat quis dolores
          magni rem odio odit veritatis officiis sapiente esse totam! Ducimus
          consequatur, iste illo esse laboriosam voluptate doloremque tenetur
          eligendi fugit a obcaecati nulla voluptatibus suscipit molestias.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quo
          deleniti molestias omnis quos aperiam ab qui sequi nobis, dolorem a
          molestiae aliquam voluptates vel, distinctio quam. At, architecto
          dolores. Vitae iusto enim deserunt laudantium recusandae maxime,
          officia dignissimos laboriosam minima error possimus incidunt tenetur
          ipsa corrupti? Facilis velit labore nobis alias illo omnis cupiditate
          earum eum et dolorem! Voluptas maiores illum hic explicabo. Aut dolor
          aliquid voluptatum, architecto molestias qui placeat quis dolores
          magni rem odio odit veritatis officiis sapiente esse totam! Ducimus
          consequatur, iste illo esse laboriosam voluptate doloremque tenetur
          eligendi fugit a obcaecati nulla voluptatibus suscipit molestias.
        </div>
      );
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

export default About;
