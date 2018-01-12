import React from "react";

import { Form } from "components/organisms";
import GenericTemplate from "components/templates/GenericTemplate";

const LandingPage = () => (
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

export default LandingPage;
