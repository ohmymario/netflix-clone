import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature/>', () => {
  it('renders the <Feature /> with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
      </Feature>
    );
    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with just a Title', () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
      </Feature>
    );
    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with just a Subtitle', () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
      </Feature>
    );
    expect(queryByText('Unlimited movies, TV shows, and more.')).toBeFalsy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
