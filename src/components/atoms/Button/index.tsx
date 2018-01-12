import React from "react";
import {
  Text,
  TouchableHighlight,
  TouchableHighlightProperties,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

interface IProps extends TouchableHighlightProperties {
  title?: string;
}
const Button = (props: IProps) => (
  <TouchableHighlight style={styles.button} {...props}>
    <Text>{props.title}</Text>
  </TouchableHighlight>
);

const styles = EStyleSheet.create({
  button: {
    borderColor: "red",
    borderWidth: "1px",
  },
});
export default Button;
