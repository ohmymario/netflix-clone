import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

const Footer = (props) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow(props) {
  const { children, ...restProps } = props;
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn(props) {
  const { children, ...restProps } = props;
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink(props) {
  const { children, href, ...restProps } = props;
  return (
    <Link href={href} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Title = function FooterTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText(props) {
  const { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak(props) {
  const { children, ...restProps } = props;
  return <Break {...restProps}>{children}</Break>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

export default Footer;
