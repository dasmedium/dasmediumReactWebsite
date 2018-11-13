import { createAction } from "typesafe-actions";

import * as Types from "../../store/types";

// Action Creators
export const fetchPages = createAction("FETCH_PAGES", resolve => {
  return payload => resolve(payload);
});

export const fetchPagesFulfilled = createAction(
  "FETCH_PAGES_SUCCESS",
  resolve => {
    return (payload: Types.Pages) => resolve(payload);
  }
);

export const fetchPagesError = createAction("FETCH_PAGES_ERROR", resolve => {
  return Error => resolve(Error);
});
