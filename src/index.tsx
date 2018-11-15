import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
