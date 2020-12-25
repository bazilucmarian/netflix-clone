import React from "react";
import Header, {
  HeaderFrame,
  HeaderLogo,
  HeaderButton,
} from "../components/header/index";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <HeaderFrame>
        <HeaderLogo to={ROUTES.HOME} alt="netflix" src={logo} />
        <HeaderButton to={ROUTES.SIGN_IN}>Sign In</HeaderButton>
      </HeaderFrame>
      {children}
    </Header>
  );
};
export default HeaderContainer;
