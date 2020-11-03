import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/optForm';
import faqsData from '../fixtures/faqs.json';

const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    <Accordion.Frame>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion.Frame>

    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Input placeholder="Email address" name="email" type="email" />
      <OptForm.Button>Get Started</OptForm.Button>
    </OptForm>
  </Accordion>
);

export default FaqsContainer;
