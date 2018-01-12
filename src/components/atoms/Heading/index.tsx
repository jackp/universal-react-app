import React from "react";
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

interface IProps {
  children: React.ReactChild;
  level?: 1 | 2 | 3;
}
const Heading = (props: IProps) => (
  <Text style={[styles.root, styles[`h${props.level}`]]}>{props.children}</Text>
);

const styles = EStyleSheet.create({
  root: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: "500",
  },

  h1: {
    fontSize: "4.236rem",
  },
  h2: {
    fontSize: "2.618rem",
  },
  h3: {
    fontSize: "1.618rem",
  },
});

export default Heading;
