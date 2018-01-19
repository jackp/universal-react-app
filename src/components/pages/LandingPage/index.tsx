import { inject, observer } from "mobx-react";
import React from "react";
import { Text } from "react-native";

import { Form } from "components/organisms";
import GenericTemplate from "components/templates/GenericTemplate";
import { AccountStore } from "stores";

interface LandingPageProps {
  account: AccountStore;
}

@inject("account")
@observer
export default class LandingPage extends React.Component<LandingPageProps> {
  public render() {
    return (
      <GenericTemplate>
        <Form
          title="Login"
          fields={[
            { label: "Email", name: "email" },
            { label: "Password", name: "password" },
          ]}
          action="Login"
          onSubmit={(data) => console.log(data)}
        />
      </GenericTemplate>
    );
  }
}
