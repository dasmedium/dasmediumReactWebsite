import { combineEpics } from "redux-observable";
import { getPostsEpic } from "../features/posts/epics";
import { getPagesEpic } from "../features/pages/epics";

export const rootEpic = combineEpics(getPostsEpic, getPagesEpic);
