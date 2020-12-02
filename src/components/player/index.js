/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext();

const Player = (props) => {
  const { children, ...restProps } = props;
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

// ReactDOM.createPortal - to overlay over all content with no CSS issues
Player.Video = function PlayerVideo(props) {
  const { src, ...restProps } = props;
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  const hidePlayer = () => {
    setShowPlayer(false);
  };

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => hidePlayer()} {...restProps}>
          <Inner>
            <video controls onClick={(e) => e.stopPropagation()}>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  const flipPlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <Button onClick={() => flipPlayer()} {...restProps}>
      Play
    </Button>
  );
};

Player.propTypes = {
  children: PropTypes.node,
};

Player.Video.propTypes = {
  src: PropTypes.string,
};

export default Player;
