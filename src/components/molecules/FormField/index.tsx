import React from "react";
import { View } from "react-native";

import { Input, InputProps, Label } from "components/atoms";

export interface FormFieldProps extends InputProps {
  label: string;
  name: string;
}

export default class FormField extends React.Component<FormFieldProps> {
  public render() {
    return (
      <View>
        <Label>{this.props.label}</Label>
        <Input {...this.props} />
      </View>
    );
  }
}
