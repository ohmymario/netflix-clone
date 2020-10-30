import styled from 'styled-components/macro';

const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px;
  color: white;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1100px;
  margin: auto;
  width: 100%;

  // Alternate img and text
  flex-direction: ${({ direction }) => direction};

  // stack below 1000px
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  @media (max-width: 1000px) {
    // push down last {Item} h2 to match other components
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

const Pane = styled.div`
  width: 50%;

  // Under 1000px - Pane takes entire view
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export { Item, Inner, Container, Pane, Title, Subtitle, Image };
