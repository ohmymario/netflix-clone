import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const Subtitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export { Container, Title, Subtitle };
