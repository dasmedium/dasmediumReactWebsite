import { StateType, getType, ActionType } from "typesafe-actions";
import * as Types from "../../store/types";
import * as actions from "./actions";

type actions = ActionType<typeof actions>;
let initialState: Types.Posts = { posts: [] };
export const postReducer = function(state = initialState, action: actions) {
  switch (action.type) {
    case getType(actions.fetchPosts):
      return { ...state };
    case getType(actions.fetchPostFulfilled):
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export type PostState = StateType<typeof postReducer>;
