import React from "react";
import { TouchableHighlight, TouchableHighlightProperties } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

interface IProps extends TouchableHighlightProperties {
  children: React.ReactChild;
}
const Button = (props: IProps) => (
  <TouchableHighlight style={styles.button}>
    {props.children}
  </TouchableHighlight>
);

const styles = EStyleSheet.create({
  button: {
    borderColor: "red",
    borderWidth: "1px",
  },
});
export default Button;
