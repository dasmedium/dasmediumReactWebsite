import * as React from "react";
import "./App.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/redux/containers/posts/index";
import {
  ConnectedAbout,
  ConnectedPrivacy,
  ConnectedDev,
  ConnectedEnt,
  ConnectedTermsConditions
} from "../src/redux/containers/index";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" component={Home} exact />

            <Route exact path="/about" component={ConnectedAbout} />
            <Route exact path="/privacy" component={ConnectedPrivacy} />
            <Route exact path="/developers" component={ConnectedDev} />
            <Route exact path="/entrepreneurs" component={ConnectedEnt} />
            <Route exact path="/terms" component={ConnectedTermsConditions} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
