import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./root-epic";
import { ajax } from "rxjs/ajax";

const epicMiddleware = createEpicMiddleware({
  dependencies: { ajax }
});

const enhancer = composeWithDevTools(applyMiddleware(...[epicMiddleware]));
function configureStore(initialState?: Object | null) {
  const store = createStore(rootReducer, initialState!, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
}

export const store = configureStore();
// Original Store configuration
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...epicMiddleware))
// );
// export default store;
// const devToolsExtension: GenericStoreEnhancer = window["devToolsExtension"]
//   ? window["devToolsExtension"]()
//   : f => f;

// const store = createStore(rootReducer, initialState, compose(
//   applyMiddleware(middleware),
//   devToolsExtension
// ) as GenericStoreEnhancer);

// const store = createStore(
//   rootReducer,
//   initialState,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );
