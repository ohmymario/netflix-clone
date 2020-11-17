import styled, { createGlobalStyle } from 'styled-components/macro';

const LockBody = createGlobalStyle`
  body {
     overflow: hidden;
  }
`;

const ReleaseBody = createGlobalStyle`
  body {
     overflow: visible;
  }
`;

const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;
`;

const Picture = styled.img``;

export { LockBody, ReleaseBody, Spinner, Picture };
