import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

const Frame = styled.div`
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  color: white;
  margin: 0 0 8px 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 700px;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
`;

const Header = styled.div`
  font-size: 1.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #303030;
  margin-bottom: 1px;
  padding: 0.8em 1.2em;
  cursor: pointer;
  font-weight: normal;
  user-select: none;
  img {
    // Turn image completely white
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Body = styled.div`
  font-size: 1.25rem;
  max-height: 1200px;
  font-weight: normal;
  line-height: normal;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;

export { Container, Inner, Frame, Title, Item, Header, Body };
