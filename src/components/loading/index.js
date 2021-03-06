import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, ReleaseBody, LockBody, Picture } from './styles/loading';

const Loading = (props) => {
  const { src, ...restProps } = props;
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

Loading.propTypes = {
  src: PropTypes.string,
};

export default Loading;
