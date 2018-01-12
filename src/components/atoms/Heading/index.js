import React from "react";
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Heading = props => (
  <Text style={[styles.root, styles[`h${props.level}`]]}>{props.children}</Text>
);

const styles = EStyleSheet.create({
  root: {
    fontFamily: "Roboto"
  },
  h1: {
    fontSize: "4rem"
  },
  h2: {},
  h3: {}
});

export default Heading;
