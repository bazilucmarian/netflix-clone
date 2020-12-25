import React from "react";

import { Container, Title, List, Item, Picture, Name } from "./styles/profiles";

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export default Profiles;

export const ProfilesTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
export const ProfilesList = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};
export const ProfilesUser = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};
export const ProfilesPicture = ({ src, ...restProps }) => {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};
export const ProfilesName = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};
