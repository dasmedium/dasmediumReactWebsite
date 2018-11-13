import { StateType, ActionType } from "typesafe-actions";
import rootReducer from "./root-reducer";
// import { actions } from "../actions/postActions";
import services from "../services/index";
import { appInitialised } from "../actions/index";

export type PostAction = ActionType<typeof appInitialised>;

export type RootState = StateType<typeof rootReducer>;
export type RootAction = PostAction;
export type Services = typeof services;

export type Posts = {
  posts: Array<{}>;
};
export type Pages = {
  pages: Array<{}>;
};
// export interface Types {
//   RootState: StateType<typeof rootReducer>;
//   RootAction:
// }
