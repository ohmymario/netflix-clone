import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Background,
  ButtonLink,
  Container,
  Dropdown,
  Feature,
  FeatureCallOut,
  Group,
  Logo,
  Picture,
  Profile,
  Text,
  TextLink,
} from './styles/header';

const Header = (props) => {
  const { children, src, bg = true, ...restProps } = props;
  return bg ? (
    <Background src={src} {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
};

Header.Feature = function HeaderFeature(props) {
  const { children, ...restProps } = props;
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut(props) {
  const { children, ...restProps } = props;
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText(props) {
  const { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink(props) {
  const { children, ...restProps } = props;
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Frame = function HeaderFrame(props) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup(props) {
  const { children, ...restProps } = props;
  return <Group {...restProps}>{children}</Group>;
};

Header.Dropdown = function HeaderDropdown(props) {
  const { children, ...restProps } = props;
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile(props) {
  const { children, ...restProps } = props;
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture(props) {
  const { src, ...restProps } = props;
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
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
  src: PropTypes.string,
  bg: PropTypes.bool,
};

Header.ButtonLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

Header.Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Header.Logo.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Header;
