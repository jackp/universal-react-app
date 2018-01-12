import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigation from "components/organisms/Navigation";

const PageTemplate = props => (
  <View style={styles.container}>
    <Navigation />
    <View style={styles.main}>{props.children}</View>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row"
  },
  main: {
    flex: 1,
    flexDirection: "column"
  }
});

export default PageTemplate;
