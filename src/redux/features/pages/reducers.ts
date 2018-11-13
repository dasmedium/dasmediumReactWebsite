import { StateType, getType, ActionType } from "typesafe-actions";
import * as Types from "../../store/types";
import * as actions from "./actions";

type actions = ActionType<typeof actions>;
let initialState: Types.Pages = { pages: [] };
export const pagesReducer = function(state = initialState, action: actions) {
  switch (action.type) {
    case getType(actions.fetchPages):
      return { ...state };
    case getType(actions.fetchPagesFulfilled):
      return { ...state, pages: action.payload };
    default:
      return state;
  }
};

export type PageState = StateType<typeof pagesReducer>;
