import React from "react";
import {
  Inner,
  Item,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction, ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

export const JumbotronContainerParent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export const JumbotronPane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
export const JumbotronTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
export const JumbotronSubtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
export const JumbotronImage = ({ children, ...restProps }) => {
  return <Image {...restProps}></Image>;
};
export default Jumbotron;
