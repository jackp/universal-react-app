import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigation from "components/organisms/Navigation";

interface IProps {
  children: React.ReactChild;
}

const PageTemplate = (props: IProps) => (
  <View style={styles.container}>
    <Navigation />
    <View style={styles.main}>{props.children}</View>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
  },
  main: {
    flex: 1,
    flexDirection: "column",
  },
});

export default PageTemplate;
