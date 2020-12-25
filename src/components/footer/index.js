import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Container>{children}</Container>;
};

export default Footer;

export const FooterRow = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};
export const FooterColumn = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};
export const FooterLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};
export const FooterTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
export const FooterText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const FooterBreak = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};
