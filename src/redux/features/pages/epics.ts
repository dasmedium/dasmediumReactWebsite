import * as actions from "./actions";
import { getPagesInit } from "../../actions/index";
import { Epic } from "redux-observable";
import { map, mergeMap, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";
import { pipe } from "rxjs";
import { isActionOf } from "typesafe-actions";

// Epics

export const getPagesEpic: Epic = (actions$, store, { PageService }) =>
  actions$.pipe(
    filter(isActionOf(getPagesInit)),
    mergeMap(action => {
      return PageService.get(action.payload);
    }),
    map(({ response }) => actions.fetchPagesFulfilled(response)),
    catchError(
      pipe(
        actions.fetchPagesError,
        of
      )
    )
  );
