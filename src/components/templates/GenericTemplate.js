import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const GenericTemplate = props => (
  <View style={styles.container}>{props.children}</View>
);

const styles = EStyleSheet.create({
  container: {
    height: "100%"
  }
});

export default GenericTemplate;
