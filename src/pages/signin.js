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

const SignIn = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(password, emailAddress);
  // check from input element are valid

  const isInvalid = password === "" || emailAddress === "";

  // email and password sent to backend

  const handleSignIn = (e) => {
    e.preventDefault();

    // firebase work here

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <FormTitle>Sign In</FormTitle>
          {error && <FormError>{error}</FormError>}
          <FormBase onSubmit={handleSignIn} method="POST">
            <FormInput
              placeholder="Email Address"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <FormInput
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormSubmit disabled={isInvalid} type="submit">
              Sign In
            </FormSubmit>
          </FormBase>
          <FormText>
            New to netflix? <FormLink to="/signup">Sign up now</FormLink>
          </FormText>
          <FormTextSmall>
            This page is protected by google reCAPTCHA to ensure you are not a
            bot.Learn more.
          </FormTextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
export default SignIn;
