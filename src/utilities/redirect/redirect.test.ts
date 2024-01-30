import { redirect } from '@tanstack/react-router';

import { logger } from './constants';
import { Redirect } from './redirect';

jest.mock('@tanstack/react-router', () => ({
  redirect: jest.fn()
}));

jest.mock('./constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('Redirect', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('log and redirect to /signin if not authenticated and path is not /signin or /signup', () => {
    const context = { auth: false };
    const location = { href: '/private' };

    expect(() =>
      Redirect.inject({ context, location }).protectedRoute()
    ).toThrow();
    expect(logger.log).toHaveBeenCalledWith('redirect:from', location.href);
    expect(redirect).toHaveBeenCalledWith({
      to: '/signin',
      search: { redirect: location.href }
    });
  });

  it('not redirect if navigating to /signin or /signup without authentication', () => {
    const context = { auth: false };
    const location = { href: '/signin' };

    expect(() =>
      Redirect.inject({ context, location }).protectedRoute()
    ).not.toThrow();
    expect(logger.log).not.toHaveBeenCalledWith('redirect:from', location.href);
  });

  it('log and redirect to a specified path if authenticated', () => {
    const toPath = '/dashboard';
    const context = { auth: true };
    const location = { href: '/private' };

    expect(() =>
      Redirect.inject({ context, location }).protectedRoute().redirectTo(toPath)
    ).toThrow();
    expect(logger.log).toHaveBeenCalledWith('redirect:to', toPath);
    expect(redirect).toHaveBeenCalledWith({ to: toPath });
  });

  it('log normal user flow if the user is authenticated and no specific redirection path is provided', () => {
    const context = { auth: true };
    const location = { href: '/another-page' };

    expect(() =>
      Redirect.inject({ context, location }).protectedRoute()
    ).not.toThrow();
    expect(logger.log).not.toHaveBeenCalledWith('redirect:from', location.href);
  });

  it('redirect to a specified path if not authenticated', () => {
    const toPath = '/';
    const context = { auth: false };
    const location = { href: '/another-page' };

    expect(() =>
      Redirect.inject({ context, location }).redirectTo(toPath)
    ).not.toThrow();
    expect(logger.log).not.toHaveBeenCalledWith('redirect:to', toPath);
  });
});
