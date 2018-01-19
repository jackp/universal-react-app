import React from "react";
import { Redirect } from "router/index";

const loggedIn = false;

export class PrivateRoutes extends React.Component {
  public render() {
    return loggedIn ? this.props.children : <Redirect to="/login" />;
  }
}
