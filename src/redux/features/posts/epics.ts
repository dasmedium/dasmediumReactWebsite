import { pipe } from "rxjs";
import { map, mergeMap, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";
import { Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";
import { getPostsInit } from "../../actions/index";
import * as actions from "./actions";

export const getPostsEpic: Epic = (action$, store, { ajax }) =>
  action$.pipe(
    filter(isActionOf(getPostsInit)),
    mergeMap(() => {
      return ajax({
        url: "https://dasmedium.co/wp-json/wp/v2/posts",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        responseType: "json"
      });
    }),
    map(({ response }) => actions.fetchPostFulfilled(response)),
    catchError(
      pipe(
        actions.fetchDataError,
        of
      )
    )
  );
