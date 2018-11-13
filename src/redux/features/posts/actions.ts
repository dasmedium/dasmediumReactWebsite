import { createAction } from "typesafe-actions";

import * as Types from "../../store/types";

export const fetchPosts = createAction("FETCH_POSTS", resolve => {
  return payload => resolve(payload);
});

export const fetchPostFulfilled = createAction(
  "FETCH_POSTS_SUCCESS",
  resolve => {
    return (payload: Types.Posts) => resolve(payload);
  }
);

export const fetchDataError = createAction("FETCH_POSTS_ERROR", resolve => {
  return Error => resolve(Error);
});
