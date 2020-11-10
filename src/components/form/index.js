import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  StyledLink,
  Input,
  Submit,
} from './styles/form';

const Form = (props) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Form.Base = function FormBase(props) {
  const { children, ...restProps } = props;
  return <Base {...restProps}>{children}</Base>;
};

Form.Error = function FormError(props) {
  const { children, ...restProps } = props;
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText(props) {
  const { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall(props) {
  const { children, ...restProps } = props;
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink(props) {
  // react-router-dom Link
  const { children, to, ...restProps } = props;
  return (
    <StyledLink to={to} {...restProps}>
      {children}
    </StyledLink>
  );
};

Form.Input = function FormInput(props) {
  const { children, placeholder, type, value, ...restProps } = props;
  return (
    <Input placeholder={placeholder} type={type} value={value} {...restProps}>
      {children}
    </Input>
  );
};

Form.Submit = function FormSubmit(props) {
  const { children, disabled, type, ...restProps } = props;
  return (
    <Submit disabled={disabled} type={type} {...restProps}>
      {children}
    </Submit>
  );
};

Form.propTypes = {
  children: PropTypes.node,
};

Form.Link.propTypes = {
  to: PropTypes.string,
};

Form.Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Form.Submit.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default Form;
