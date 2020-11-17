import React from 'react';
import PropTypes from 'prop-types';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const SelectProfileContainer = (props) => {
  const { user, setProfile } = props;

  const selectProfile = () => {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => selectProfile()}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName} </Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

SelectProfileContainer.propTypes = {
  // user from firebase
  user: PropTypes.object,
  // setProfile from container state
  setProfile: PropTypes.func,
};

export default SelectProfileContainer;
