import React from "react";

import { Container, Title, Subtitle } from "./styles/feature";

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export default Feature;

export const FeatureTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const FeatureSubTitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
