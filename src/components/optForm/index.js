import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Button, Text } from './styles/optForm';

const OptForm = (props) => {
  const { children, ...restProps } = props;
  return <Container>{children}</Container>;
};

OptForm.Input = function OptFormInput(props) {
  const { children, placeholder, type, name, ...restProps } = props;
  return (
    <Input placeholder={placeholder} type={type} name={name} {...restProps} />
  );
};

OptForm.Button = function OptFormButton(props) {
  const { children, ...restProps } = props;
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText(props) {
  const { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

OptForm.propTypes = {
  children: PropTypes.node,
};

OptForm.Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default OptForm;
