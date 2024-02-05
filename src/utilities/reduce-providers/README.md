# `reduceProviders` Utility

## Overview

`reduceProviders` is a React utility function designed to streamline the usage of multiple context providers. It allows for easy composition of providers, reducing the complexity and nesting in your component tree.

## Getting Started

Copy the `reduceProviders` function into your project, ideally within a utility or helpers directory. Ensure React is a dependency in your project, as this utility leverages React's functional components and children props.

## How to Use

### Simple Composition

Combine multiple context providers into one composite provider without deep nesting:

```tsx
import React from 'react';
import { reduceProviders } from 'path/to/utilities/reduceProviders';
import { UserProvider } from 'contexts/UserContext';
import { ThemeProvider } from 'contexts/ThemeContext';

// Composite provider
const GlobalProvider = reduceProviders(UserProvider, ThemeProvider);

// Usage in your app
const App = () => (
  <GlobalProvider>
    {/* App components go here */}
  </GlobalProvider>
);
```

### Advanced Composition with Props

`reduceProviders` also supports providers that require props, by wrapping them in functional components:

```tsx
import React from 'react';
import { reduceProviders } from 'path/to/utilities/reduceProviders';
import { LocaleProvider } from 'contexts/LocaleContext';
import { ConfigProvider } from 'contexts/ConfigContext';

const AppProvider = reduceProviders(
  ({ children }) => <LocaleProvider locale="en">{children}</LocaleProvider>,
  ({ children }) => <ConfigProvider config={{ key: 'value' }}>{children}</ConfigProvider>
);

const App = () => (
  <AppProvider>
    {/* App components go here */}
  </AppProvider>
);
```

## Benefits

- **Simplicity**: Reduces the complexity of your component tree.
- **Reusability**: Create a single, reusable provider component for your entire application.
- **Flexibility**: Easily add or remove providers as your application requirements change.