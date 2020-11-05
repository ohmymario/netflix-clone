import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

const Header = (props) => {
  const { children, bg = true, ...restProps } = props;
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame(props) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink(props) {
  const { children, to, ...restProps } = props;
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo(props) {
  const { children, to, alt, src, ...restProps } = props;
  return (
    <Link to={to}>
      <Logo src={src} alt={alt} {...restProps} />
    </Link>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.bool,
};

Header.ButtonLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

Header.Logo.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Header;
