import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Button, Heading } from "components/atoms";
import { FormField, FormFieldProps } from "components/molecules";

export interface FormProps {
  title?: string;
  action?: string;
  fields: [FormFieldProps];
  onSubmit: (data: object) => void;
}

interface FormState {
  data: object;
}

export default class Form extends React.Component<FormProps, FormState> {
  public static defaultProps: Partial<FormProps> = { action: "Submit" };

  constructor(props: FormProps) {
    super(props);

    this.state = { data: {} };
  }

  public render() {
    return (
      <View>
        {this.props.title ? <Heading>{this.props.title}</Heading> : null}
        {this.props.fields.map((field, i) => (
          <FormField
            key={i}
            onChangeText={(value) => this.updateFormData(field.name, value)}
            {...field}
          />
        ))}
        <Button title={this.props.action} onPress={() => this.onSubmit()} />
      </View>
    );
  }

  private updateFormData(name: string, value: any) {
    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  }

  private onSubmit() {
    this.props.onSubmit(this.state.data);
  }
}
