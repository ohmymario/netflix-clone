import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

const Profiles = (props) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = function ProfilesTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList(props) {
  const { children, ...restProps } = props;
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser(props) {
  const { children, ...restProps } = props;
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture(props) {
  const { src, ...restProps } = props;
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName(props) {
  const { children, ...restProps } = props;
  return <Name {...restProps}>{children}</Name>;
};

Profiles.propTypes = {
  children: PropTypes.node,
};

Profiles.Picture.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
};

export default Profiles;
