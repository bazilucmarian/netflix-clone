import React from "react";

import {
  Container,
  Title,
  Text,
  TextSmall,
  Error,
  Link,
  Input,
  Submit,
  Base,
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export default Form;

export const FormError = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

export const FormBase = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};
export const FormTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
export const FormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
export const FormTextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

export const FormLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};
export const FormInput = ({ ...restProps }) => {
  return <Input {...restProps} />;
};
export const FormSubmit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};
