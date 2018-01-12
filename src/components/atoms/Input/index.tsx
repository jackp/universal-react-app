import React from "react";
import { TextInput, TextInputProperties } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export { TextInputProperties as InputProps };

const Input = (props: TextInputProperties) => (
  <TextInput {...props} style={styles.input} />
);

const styles = EStyleSheet.create({
  input: {
    padding: "1em",
    width: "100%",

    borderColor: "$borderColor",
    borderWidth: 1,
    fontFamily: "Roboto",
    outline: "0",
  },
});

export default Input;
