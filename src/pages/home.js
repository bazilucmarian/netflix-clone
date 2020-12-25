import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import AccordionContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";
import SubscribeForm, {
  SubscribeFormButton,
  SubscribeFormInput,
  SubscribeFormText,
  SubscribeFormBreak,
} from "../components/subscribe-form/index";

import Feature, {
  FeatureTitle,
  FeatureSubTitle,
} from "../components/features/index";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <FeatureTitle>Unlimeted films, TV programmes and more. </FeatureTitle>
          <FeatureSubTitle>Watch anywhere.Cancel at any time. </FeatureSubTitle>
          <SubscribeForm>
            <SubscribeFormInput placeholder="Email Address" />
            <SubscribeFormButton>Try it now</SubscribeFormButton>
            <SubscribeFormBreak />
            <SubscribeFormText>
              Ready to watch? Enter your email to create you membership{" "}
            </SubscribeFormText>
          </SubscribeForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
};
export default Home;
