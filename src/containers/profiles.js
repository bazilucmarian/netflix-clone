import React from "react";
import Header, { HeaderFrame, HeaderLogo } from "../components/header/index";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

import Profiles, {
  ProfilesTitle,
  ProfilesList,
  ProfilesUser,
  ProfilesPicture,
  ProfilesName,
} from "../components/profiles/index";
const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <HeaderFrame>
          <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflix"></HeaderLogo>
        </HeaderFrame>
      </Header>
      <Profiles>
        <ProfilesTitle>Who is watching?</ProfilesTitle>
        <ProfilesList>
          <ProfilesUser
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <ProfilesPicture src={user.photoURL} />
            <ProfilesName>{user.displayName}</ProfilesName>
          </ProfilesUser>
        </ProfilesList>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
