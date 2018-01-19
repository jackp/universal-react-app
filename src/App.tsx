import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Link, Route, Router, Switch } from "router/index";

import DashboardPage from "components/pages/DashboardPage";
import LandingPage from "components/pages/LandingPage";
import LoginPage from "components/pages/LoginPage";

import { AccountStore } from "./stores";
import { auth } from "./utils/firebase";
import { PrivateRoutes } from "./utils/security";

import theme from "./styles/theme";

// Enable Mobx strict mode
useStrict(true);

// Initialize Mobx stores
const rootStores = {
  account: new AccountStore(),
};

// Set global style variables, available in all stylesheets
EStyleSheet.build(theme);

export default class App extends React.Component {
  private removeListener: () => void;

  public componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }

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
