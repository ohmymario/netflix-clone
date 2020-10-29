import styled from 'styled-components/macro';

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  flex-direction: ${({ direction }) => direction};

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export { Inner };
