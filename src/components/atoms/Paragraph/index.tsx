import React from "react";
import { Text, TextProperties } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

interface IProps extends TextProperties {
  children: React.ReactChild;
}

const Paragraph = (props: IProps) => (
  <Text style={[styles.root]}>{props.children}</Text>
);

const styles = EStyleSheet.create({
  root: {
    fontFamily: "Roboto",
    fontSize: "1rem",
  },
});

export default Paragraph;
