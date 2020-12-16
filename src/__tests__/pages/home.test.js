import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../pages';

describe('Homepage Page', () => {
  it('description', () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    expect(getAllByText('Get Started')).toBeTruthy();
    expect(
      getAllByText(
        'Ready to watch? Enter your email to create or restart your membership.'
      )
    ).toBeTruthy();
  });
});
