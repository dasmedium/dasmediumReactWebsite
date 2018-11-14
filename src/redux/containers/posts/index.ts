import { bindActionCreators, Dispatch } from "redux";
import {
  appInitialised,
  getPagesInit,
  getPostsInit
} from "../../actions/index";
import { connect } from "react-redux";
import * as Types from "../../store/types";
import Home from "../../../components/Home";
import Footer from "../../../components/Footer";
import About from "../../../components/About";
import Developers from "../../../components/Developers";
import Entrepreneurs from "../../../components/Entrepreneurs";
const mapStateToProps = (state: Types.RootState) => ({
  posts: state.posts.posts
});
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      initialiseApp: appInitialised,
      getPagesInit: getPagesInit,
      getPostsInit: getPostsInit
    },
    dispatch
  );

export const ConnectedAbout = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
export const ConnectedDev = connect(
  mapStateToProps,
  mapDispatchToProps
)(Developers);
export const ConnectedEnt = connect(
  mapStateToProps,
  mapDispatchToProps
)(Entrepreneurs);
export const ConnectedFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
