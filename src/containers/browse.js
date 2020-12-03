import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';
import { Card, Header, Loading, Player } from '../components';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const BrowseContainer = (props) => {
  const { slides } = props;

  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

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

  const options = {
    isCaseSensitive: false,
    minMatchCharLength: 3,
    keys: ['data.description', 'data.title', 'data.genre'],
  };

  // Only used when user selects profile
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, options);
    const allResults = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && allResults.length > 0) {
      setSlideRows(allResults);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  // Needs a user for profile
  return profile.displayName ? (
    <>
      {loadingComponent}

      <Header smallView="true" src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />

            <Header.TextLink
              active={category === 'series'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
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
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>

            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

BrowseContainer.propTypes = {
  slides: PropTypes.object,
};

export default BrowseContainer;
