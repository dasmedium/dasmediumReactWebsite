import * as actions from "./actions";
import { appInitialised } from "../../actions/index";
import { Epic } from "redux-observable";
import { map, mergeMap, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";
import { pipe } from "rxjs";
import { isActionOf } from "typesafe-actions";

// Epics

export const getPagesEpic: Epic = (actions$, store, { ajax }) =>
  actions$.pipe(
    filter(isActionOf(appInitialised)),
    mergeMap(() => {
      return ajax({
        url: "https://dasmedium.co/wp-json/wp/v2/pages",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        responseType: "json"
      });
    }),
    map(({ response }) => actions.fetchPagesFulfilled(response)),
    catchError(
      pipe(
        actions.fetchPagesError,
        of
      )
    )
  );
