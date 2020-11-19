import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const backgroundImg = (props) =>
  props.src ? `../images/misc/${props.src}.jpg` : '../images/misc/home-bg.jpg';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;

  // Remove at smaller viewports
  @media (max-width: 1100px) {
    ${(props) => props.smallView && `background: none;`}
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const TextLink = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${(props) => (props.active ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Picture = styled.button`
  background: url(${(props) => props.src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  // Dropdown -> Group(last) -> TextLink(Signout)
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const FeatureCallOut = styled.h2`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0 0 20px 0;
`;

const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  } ;
`;

const ButtonLink = styled(Link)`
  font-size: 15px;
  color: white;
  display: block;
  padding: 8px 17px;
  border: 0;
  border-radius: 3px;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 1.25rem;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.35s ease;

  &:hover {
    background-color: #ff1e1e;
    color: #fff;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
  }

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

const SearchInput = styled.input`
  background-color: #44444459;
  color: #fff;
  border: 1px solid #fff;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${(props) => (props.active ? '10px' : '0')};
  padding: ${(props) => (props.active ? '0 10px' : '0')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  width: ${(props) => (props.active ? '200px' : '0px')};
`;

export {
  Background,
  ButtonLink,
  Container,
  Dropdown,
  Feature,
  FeatureCallOut,
  Group,
  Logo,
  Picture,
  PlayButton,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  Text,
  TextLink,
};
