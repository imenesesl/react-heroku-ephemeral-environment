import { useContext } from 'react';

import { render } from '@testing-library/react';

import { onAuthStateChanged } from '@modules/firebase';

import { AuthenticationProvider } from './AuthenticationProvider';
import { authenticationContext } from './context';

jest.mock('@modules/firebase', () => ({
  onAuthStateChanged: jest.fn()
}));

describe('AuthenticationProvider', () => {
  it('provide null when there is no user', () => {
    (onAuthStateChanged as jest.Mock).mockImplementation((callback) => {
      callback(null);
      return () => {};
    });

    let contextValue;
    const TestComponent = () => {
      contextValue = useContext(authenticationContext);
      return null;
    };

    render(
      <AuthenticationProvider>
        <TestComponent />
      </AuthenticationProvider>
    );

    expect(contextValue).toBeNull();
  });

  it('provide user data when a user is authenticated with all data', () => {
    const mockUser = { uid: '123', displayName: 'John Doe' };

    (onAuthStateChanged as jest.Mock).mockImplementation((callback) => {
      callback(mockUser);
      return () => {};
    });

    let contextValue;
    const TestComponent = () => {
      contextValue = useContext(authenticationContext);
      return null;
    };

    render(
      <AuthenticationProvider>
        <TestComponent />
      </AuthenticationProvider>
    );

    expect(contextValue).toEqual({
      name: mockUser.displayName,
      uid: mockUser.uid
    });
  });
});

it('provide user data when a user is authenticated with null data', () => {
  const mockUser = { uid: '123', displayName: null };

  (onAuthStateChanged as jest.Mock).mockImplementation((callback) => {
    callback(mockUser);
    return () => {};
  });

  let contextValue;
  const TestComponent = () => {
    contextValue = useContext(authenticationContext);
    return null;
  };

  render(
    <AuthenticationProvider>
      <TestComponent />
    </AuthenticationProvider>
  );

  expect(contextValue).toEqual({
    name: '',
    uid: mockUser.uid
  });
});
