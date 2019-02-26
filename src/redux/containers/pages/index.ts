import { bindActionCreators, Dispatch } from "redux";
import {
  appInitialised,
  getPagesInit,
  getPostsInit
} from "../../actions/index";
import { connect } from "react-redux";
import * as Types from "../../store/types";
import Privacy from "../../../components/Privacy";
import TermsConditions from "../../../components/TermsConditions";

const mapStateToProps = (state: Types.RootState) => ({
  posts: state.posts.posts,
  pages: state.pages.pages
});
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      getPagesInit: getPagesInit
    },
    dispatch
  );

export const ConnectedPrivacy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Privacy);

export const ConnectedTermsConditions = connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsConditions);
