import styled from 'styled-components/macro';

const Container = styled.div``;

// Play Button
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 1.125rem;
  border-radius: 5px;
  height: 45px;
  cursor: pointer;
  padding-left: 0;
  transition: all 0.15s;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

// Darken Whole Body
const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* margin: 0 20px; */
`;

// Hold Video Player
const Inner = styled.div`
  position: relative;
  width: 98%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export { Container, Button, Overlay, Inner, Close };
