/**
 * <App />
 */
import React from "react";
import { Text, View } from "react-native";

import LandingPage from "./pages/Landing";
import DashboardPage from "./pages/Dashboard";

import { Router, Link, Route } from "./router";

const App = () => (
  <Router>
    <View>
      <Link to="/">
        <Text>Landing</Text>
      </Link>
      <Link to="/dashboard">
        <Text>Dashboard</Text>
      </Link>

      <Route exact path="/" component={LandingPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </View>
  </Router>
);

export default App;
