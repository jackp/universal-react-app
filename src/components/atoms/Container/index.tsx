import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

interface ContainerProps {
  row?: boolean;
  children: React.ReactChildren;
}

const Container = (props: ContainerProps) => (
  <View style={[styles.container]}>{props.children}</View>
);

export default Container;

const styles = EStyleSheet.create({
  container: {
    flexBasis: "auto",
    flexGrow: 1,
    flexShrink: 1,
    padding: `${EStyleSheet.value("$gridGutter")}rem`,
  },
});
