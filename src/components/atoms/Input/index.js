import React, { Component } from "react";
import { TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default class Input extends Component {
  render() {
    return (
      <TextInput {...this.props} style={[styles.input, this.props.style]} />
    );
  }
}

const styles = {
  input: {
    color: "red"
  }
};
