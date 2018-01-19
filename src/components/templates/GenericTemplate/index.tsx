import React from "react";

import { Container } from "components/atoms";
interface IProps {
  children?: any;
}

const GenericTemplate = (props: IProps) => (
  <Container>{props.children}</Container>
);

export default GenericTemplate;
