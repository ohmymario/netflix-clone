import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import SelectProfileContainer from './profiles';
import { Loading } from '../components';
import FirebaseContext from '../context/firebase';

const BrowseContainer = (props) => {
  const { slides } = props;
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const loadingComponent = loading ? (
    <Loading src={user.photoURL} />
  ) : (
    <h1>SHOW BROWSE LIBRARY</h1>
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  // Needs a user for profile
  return profile.displayName ? (
    loadingComponent
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

BrowseContainer.propTypes = {
  slides: PropTypes.object,
};

export default BrowseContainer;
