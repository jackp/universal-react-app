import { useStrict } from "mobx";
import { observer, Provider } from "mobx-react";
import { hot } from "react-hot-loader";

import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Link, Route, Router, Switch } from "router/index";

import DashboardPage from "components/pages/DashboardPage";
import LandingPage from "components/pages/LandingPage";
import LoginPage from "components/pages/LoginPage";

import { AccountStore } from "./stores";
import { auth } from "./utils/firebase";
import { PrivateRoutes } from "./utils/security";

import styleVariables from "./styles/variables";

// Enable Mobx strict mode
useStrict(true);

// Initialize Mobx stores
const rootStores = {
  account: new AccountStore(),
};

// Set global style variables, available in all stylesheets
EStyleSheet.build(styleVariables);
class App extends React.Component {
  public render() {
    return (
      <Provider {...rootStores}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoutes>
              <Route path="/dashboard" component={DashboardPage} />
            </PrivateRoutes>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
