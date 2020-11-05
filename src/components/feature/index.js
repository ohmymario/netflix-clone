import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Subtitle } from './styles/feature';

const Feature = (props) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle(props) {
  const { children, ...restProps } = props;
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Feature.propTypes = {
  children: PropTypes.node,
};

export default Feature;
