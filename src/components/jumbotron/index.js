import React from 'react';
import PropTypes from 'prop-types';
import { Inner } from './styles/jumbotron';

const Jumbotron = (props) => {
  const { direction = 'row' } = props;
  return <Inner direction={direction}>Test Jumbotron Component</Inner>;
};

Jumbotron.propTypes = {
  direction: PropTypes.string,
};

export default Jumbotron;
