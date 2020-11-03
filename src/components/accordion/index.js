import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = (props) => {
  const { children, ...restProps } = props;
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame(props) {
  const { children, ...restProps } = props;
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem(props) {
  const [toggleShow, setToggleShow] = useState(false);
  const { children, ...restProps } = props;
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader(props) {
  const { children, ...restProps } = props;
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody(props) {
  const { children, ...restProps } = props;
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.propTypes = {
  children: PropTypes.node,
};

export default Accordion;
