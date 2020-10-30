import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
} from './styles/jumbotron';

// Hero unit style content

const Jumbotron = (props) => {
  // Grabbing restProps for compound component
  const { children, direction = 'row', ...restProps } = props;
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer(props) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane(props) {
  const { children, ...restProps } = props;
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle(props) {
  const { children, ...restProps } = props;
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage(props) {
  const { src, alt, ...restProps } = props;
  return <Image src={src} alt={alt} {...restProps} />;
};

Jumbotron.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};

Jumbotron.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Jumbotron;
