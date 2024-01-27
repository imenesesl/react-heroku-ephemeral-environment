# Authentication System

The Authentication System provides a flexible and extensible way to handle authentication using different providers. Currently, it supports authentication via Google, but the architecture allows for easy addition of more authentication providers.

## Features

- Support for Google authentication.
- Easily extendable to other authentication providers.
- Centralized handling of authentication through the `AuthenticationFactory` class.
- Logging of all authentication actions for ease of debugging and monitoring.

## Setup

Ensure all necessary dependencies are installed in your project, and that you have configured the credentials for the authentication providers you plan to use, such as Google API credentials.

## Usage

To use the authentication system, first create an instance of `Authentication` using `AuthenticationFactory`. Then, you can use this instance to perform `signIn`, `signUp`, and `signOut` operations.

### Google Authentication Example

```typescript
import { AuthenticationFactory } from '@modules/authentication';

// Create an authentication instance for Google
const authInstance = AuthenticationFactory.create('google');

// Sign in
authInstance.signIn().then(() => {
  console.log('Sign-in successful');
}).catch((error) => {
  console.error('Sign-in error', error);
});

// Sign up (Note: signUp may behave the same as signIn for some providers)
authInstance.signUp().then(() => {
  console.log('Sign-up successful');
}).catch((error) => {
  console.error('Sign-up error', error);
});

// Sign out
authInstance.signOut().then(() => {
  console.log('Sign-out successful');
}).catch((error) => {
  console.error('Sign-out error', error);
});
```

### Error Handling

The system automatically logs all errors and successes via the `logger`. Ensure you monitor these logs to understand and debug the authentication flows.

## Extending to New Providers

To add a new authentication provider, implement the `AuthMethods` interface in a new class and add the corresponding logic for `signIn`, `signUp`, and `signOut`. Then, update `AuthenticationFactory` to handle the new provider.