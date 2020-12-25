import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Dropdown,
  Picture,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};
export default Header;

export const HeaderFeature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};
export const HeaderPicture = ({ src, ...restProps }) => {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};
export const HeaderProfile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};
export const HeaderSearch = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
      ></SearchInput>
    </Search>
  );
};
export const HeaderDropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

export const HeaderFrame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export const HeaderGroup = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
export const HeaderFeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
export const HeaderText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
export const HeaderTextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export const HeaderPlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
export const HeaderLogo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

export const HeaderButton = ({ to, children, ...restProps }) => {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
