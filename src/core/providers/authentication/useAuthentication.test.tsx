import { PropsWithChildren } from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { authenticationContext } from './context';
import { useAuthentication } from './useAuthentication';

describe('useAuthentication Hook', () => {
  it('use context and return its value', () => {
    const mockValue = { uid: '123', name: 'my name' };

    const wrapper = ({ children }: PropsWithChildren) => (
      <authenticationContext.Provider value={mockValue}>
        {children}
      </authenticationContext.Provider>
    );

    const { result } = renderHook(() => useAuthentication(), { wrapper });

    expect(result.current).toEqual(mockValue);
  });
});
