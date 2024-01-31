# Environment Variable Helper

This utility provides a simple and effective way to access environment variables in your application. It includes an optional feature to differentiate between global environment variables and those prefixed specifically for Vite projects.

## Features

- **Easy Retrieval**: Quickly get the value of environment variables with or without a `VITE_` prefix.
- **Global Support**: Optionally access global environment variables without any prefix.
- **Logging**: Automatically logs a message if the specified environment variable is not found.

## Usage

First, import the `getEnv` function from where it's defined:

```typescript
import { getEnv } from 'path/to/getEnv';
```

Then, use it to retrieve environment variables by passing the key. Optionally, you can specify whether to treat the key as a global variable:

```typescript
const myEnvVar = getEnv('MY_VARIABLE');
const myGlobalEnvVar = getEnv('MY_GLOBAL_VARIABLE', { isGlobal: true });
```

## Parameters

- `key` (IEnvVariable): The key of the environment variable you want to access.
- `options` (IEnvVariableOptions, optional): Configuration options for accessing the environment variable.
  - `isGlobal` (boolean, optional): Set to `true` if the environment variable is global and should not use the `VITE_` prefix. Defaults to `false`.

## Logging

If the specified key is not found among the environment variables, the function will log an event with the key and the `isGlobal` flag using the provided logger.
