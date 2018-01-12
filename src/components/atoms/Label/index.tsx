import React from "react";
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Paragraph from "../Paragraph";

interface IProps {
  children: React.ReactChild;
}
const Label = (props: IProps) => (
  <Paragraph style={styles.label}>{props.children}</Paragraph>
);

const styles = EStyleSheet.create({
  label: {},
});

export default Label;
