import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import SelectProfileContainer from './profiles';
import { Header, Loading } from '../components';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const BrowseContainer = (props) => {
  const { slides } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const loadingComponent = loading ? (
    <Loading src={user.photoURL} />
  ) : (
    <Loading.ReleaseBody />
  );

  const firebaseSignOut = () => {
    firebase.auth().signOut();
  };

  // Only used when user selects profile
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  // Needs a user for profile
  return profile.displayName ? (
    <>
      {loadingComponent}

      <Header smallView="true" src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} alt="profile-picture" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} alt="profile-picture" />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebaseSignOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            In 1981 Gotham City, a struggling, mentally ill comic battles to be
            seen. His life takes a dark, gut-wrenching turn after he lashes back
            at attackers. Joaquin Phoenix and composer Hildur Guðnadóttir earned
            Oscars for their work in Todd Phillips's take on the DC
            supervillain.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

BrowseContainer.propTypes = {
  slides: PropTypes.object,
};

export default BrowseContainer;
