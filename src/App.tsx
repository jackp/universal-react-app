import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Link, Route, Router } from "router/index";

import DashboardPage from "components/pages/DashboardPage";
import LandingPage from "components/pages/LandingPage";

import theme from "./styles/theme";

const App = () => (
  <Router>
    <View style={styles.container}>
      <Route exact path="/" component={LandingPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </View>
  </Router>
);

// Set global style variables, available in all stylesheets
EStyleSheet.build(theme);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
