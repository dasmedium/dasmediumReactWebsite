import { combineReducers } from "redux";
import { postReducer } from "../features/posts/reducers";
import { pagesReducer } from "../features/pages/reducers";
const rootReducer = combineReducers({
  posts: postReducer,
  pages: pagesReducer
});
export default rootReducer;
