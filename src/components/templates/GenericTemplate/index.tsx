import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

interface IProps {
  children: React.ReactChild;
}
const GenericTemplate = (props: IProps) => (
  <View style={styles.container}>{props.children}</View>
);

const styles = EStyleSheet.create({
  container: {
    height: "100%",
  },
});

export default GenericTemplate;
