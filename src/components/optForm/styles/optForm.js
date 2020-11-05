import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  max-width: 950px;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  border-radius: 2px;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 1.625rem;
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  border: 0;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
    height: 50px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const Text = styled.p`
  display: block;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;

export { Container, Input, Button, Text };
