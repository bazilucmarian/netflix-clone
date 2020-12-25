import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/subscribe";

const SubscribeForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default SubscribeForm;

export const SubscribeFormInput = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

export const SubscribeFormButton = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="try now" />
    </Button>
  );
};

export const SubscribeFormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const SubscribeFormBreak = ({ ...restProps }) => {
  return <Break {...restProps} />;
};
