import React from 'react';

import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import { OptForm, Feature } from '../components';

const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>

        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input
            placeholder="Email address"
            name="email"
            type="email"
          />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
);

export default Home;
