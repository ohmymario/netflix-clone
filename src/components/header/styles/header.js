import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const backgroundImg = (props) => {
  console.log(props.src);
  return props.src
    ? `../images/misc/${props.src}.jpg`
    : '../images/misc/home-bg.jpg';
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-position: top left / cover;
  background-repeat: no-repeat;
`;

const Frame = styled.div``;

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

export { Background, Frame, Container, Logo, ButtonLink };
