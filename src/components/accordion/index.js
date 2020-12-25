import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Title,
  Inner,
  Frame,
  Header,
  Body,
  Item,
} from "./styles/accordion";
const ToggleContext = createContext();
console.log(ToggleContext);

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

export const AccordionTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const AccordionItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
export const AccordionHeader = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}

      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" />
      )}
    </Header>
  );
};

export const AccordionBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
