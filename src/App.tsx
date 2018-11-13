import * as React from "react";
import "./App.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../src/redux/containers/posts/index";
import Header from "./components/Header";
import {
  ConnectedFooter,
  ConnectedAbout,
  ConnectedPrivacy
} from "../src/redux/containers/index";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
            <Route exact path="/about" component={ConnectedAbout} />
            <Route exact path="/privacy" component={ConnectedPrivacy} />
            <ConnectedFooter />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
