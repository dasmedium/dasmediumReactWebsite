import { pipe } from "rxjs";
import { map, mergeMap, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";
import { Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";
import { getPostsInit } from "../../actions/index";
import * as actions from "./actions";

export const getPostsEpic: Epic = (action$, store, { PostService }) =>
  action$.pipe(
    filter(isActionOf(getPostsInit)),
    mergeMap(action => {
      return PostService.get(action.payload);
    }),
    map(({ response }) => actions.fetchPostFulfilled(response)),
    catchError(
      pipe(
        actions.fetchDataError,
        of
      )
    )
  );
