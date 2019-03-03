import { createAction } from "typesafe-actions";
export const appInitialised = createAction("APP_INITIALISED");
export const getPagesInit = createAction("GET_PAGES_INIT", action => {
  return (payload: string) => action(payload);
});
export const getPostsInit = createAction("GET_POSTS_INIT", action => {
  return (payload: string) => action(payload);
});
