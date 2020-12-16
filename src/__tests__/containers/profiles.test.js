import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import SelectProfileContainer from '../../containers/profiles';

describe('<Profiles />', () => {
  it('renders the <Profiles/>', () => {
    const user = { displayName: 'Test', photoURL: 'profile.png' };
    const setProfile = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <SelectProfileContainer user={user} setProfile={setProfile} />
      </MemoryRouter>
    );

    expect(getByTestId('user-profile')).toBeTruthy();
    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});
