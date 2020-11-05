import React from 'react';

import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';

const Home = () => (
  <>
    <HeaderContainer>
      <p>Hello</p>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
);

export default Home;
