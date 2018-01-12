/**
 * <Navigation />
 */

import React from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Navigation = () => (
  <View style={styles.container}>
    <Text>Navigation</Text>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    width: "250px",
    backgroundColor: "#ECECEC"
  }
});

export default Navigation;
