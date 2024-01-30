# Redirect Utility

The `Redirect` utility class provides a mechanism for handling redirections within applications using `@tanstack/react-router`. It's designed to work in scenarios where authentication status determines the need for redirection, such as protecting routes or redirecting authenticated users away from authentication pages.

## Features

- **Context and Location Handling**: Integrates with the routing context and location to make decisions based on the current route and authentication status.
- **Protected Routes**: Easily protect routes by redirecting unauthenticated users to sign-in or sign-up pages.
- **Conditional Redirection**: Redirect authenticated users away from authentication pages to avoid redundant sign-in or sign-up attempts.

## Usage

### Injecting Context and Location

Before using the `Redirect` utility, you must inject the routing context and location into it. This is typically done in a route middleware or a similar setup phase in your application:

```typescript
import { Redirect } from 'path/to/Redirect';
import { useLoaderData } from '@tanstack/react-router';

// Inside a component or hook
const loaderData = useLoaderData();
Redirect.inject(loaderData).protectedRoute().redirectTo('/');
```

### Protecting Routes

To protect a route and redirect unauthenticated users to a sign-in page, use the `protectedRoute` method. This method should be called in a route loader or action where you have access to the authentication context:

```typescript
export const Route = createFileRoute('/_me/me/home')({
  beforeLoad: ({ context, location }) => {
    Redirect.inject({ context, location }).protectedRoute();
  },
  component: MePage
});
```

### Redirecting Authenticated Users

To redirect authenticated users away from pages like sign-in or sign-up, use the `redirectTo` method, specifying the path to redirect to:

```typescript
export const Route = createFileRoute('/signin')({
  beforeLoad: ({ context }) => {
    Redirect.inject(context).redirectTo('/me/home');
  },
  component: SignIn
});
```

## Methods

### `static inject(args: unknown): Redirect`

Injects the routing context and location into the `Redirect` utility for use in its methods. This is a prerequisite for using the utility's other methods.

- `args`: The routing context and location, typically obtained from a loader or action in `@tanstack/react-router`.

### `static protectedRoute(): Redirect`

Checks the user's authentication status and the current path to determine if a redirection to the sign-in page is necessary. If the user is unauthenticated and not on an authentication page, they are redirected.

### `static redirectTo(to: string): Redirect`

Redirects authenticated users to a specified path. This method is useful for redirecting users away from authentication pages once they are already signed in.

- `to`: The path to redirect authenticated users to.

## Internal Methods

The class also includes several private methods for internal use, such as `getContext`, `getLocation`, and `getCurrentPath`, which facilitate access to the routing context, location, and current path, respectively.
