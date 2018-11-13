import { bindActionCreators, Dispatch } from "redux";
import { appInitialised } from "../../actions/index";
import { connect } from "react-redux";
import * as Types from "../../store/types";
import Home from "../../../components/Home";
import Footer from "../../../components/Footer";
import About from "../../../components/About";

const mapStateToProps = (state: Types.RootState) => ({
  posts: state.posts.posts
});
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      initialiseApp: appInitialised
    },
    dispatch
  );

export const ConnectedAbout = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
export const ConnectedFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
