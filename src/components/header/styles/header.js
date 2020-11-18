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
    border: 1px solid red;
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
  Profile,
  Text,
  TextLink,
};
