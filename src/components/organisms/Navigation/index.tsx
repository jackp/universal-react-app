/**
 * <Navigation />
 */

import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Navigation = () => (
  <View style={styles.container}>
    <Text>Navigation</Text>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    width: "250px",
  },
});

export default Navigation;
