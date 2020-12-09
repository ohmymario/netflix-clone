import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading/>', () => {
  it('renders the <Loading/> component', () => {
    const { container, getByTestId } = render(
      <Loading src="" data-testid="loading" />
    );
    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Loading.ReleaseBody/>', () => {
    const { container, getByTestId } = render(<Loading.ReleaseBody />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
