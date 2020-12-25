import React from "react";
import SubscribeForm, {
  SubscribeFormBreak,
} from "../components/subscribe-form/index";
import {
  SubscribeFormInput,
  SubscribeFormButton,
  SubscribeFormText,
} from "../components/subscribe-form/index";
import Accordion from "../components/accordion/index";
import faqsData from "../fixtures/faqs.json";
import {
  AccordionTitle,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "../components/accordion/index";
const AccordionContainer = () => {
  return (
    <Accordion>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {faqsData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}

      <SubscribeForm>
        <SubscribeFormInput placeholder="Email Address" />
        <SubscribeFormButton>Try it now</SubscribeFormButton>
        <SubscribeFormBreak />
        <SubscribeFormText>
          Ready to watch? Enter your email to create you membership{" "}
        </SubscribeFormText>
      </SubscribeForm>
    </Accordion>
  );
};
export default AccordionContainer;
