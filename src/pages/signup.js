import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../components/context/firebase";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

import Form, {
  FormTitle,
  FormError,
  FormBase,
  FormInput,
  FormSubmit,
  FormText,
  FormLink,
  FormTextSmall,
} from "../components/form/index";
import * as ROUTES from "../constants/routes";

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    // do firebase stuff

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
          .catch((error) => {
            setFirstName("");
            setEmailAddress("");
            setPassword("");
            setError(error.message);
          });
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <FormTitle>Sign Up</FormTitle>
          {error && <FormError>{error}</FormError>}

          <FormBase onSubmit={handleSignUp} method="POST">
            <FormInput
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormInput
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <FormInput
              type="password"
              placeholder="Password"
              autocomplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormSubmit type="submit" disabled={isInvalid}>
              Sign Up
            </FormSubmit>
            <FormText>
              Already have an account?{" "}
              <FormLink to="/signin">Sign In now</FormLink>
            </FormText>
            <FormTextSmall>
              {" "}
              This page is protected by google reCAPTCHA to ensure you are not a
              bot.Learn more.
            </FormTextSmall>
          </FormBase>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
export default SignUp;
