# clsx Utility Function

The `clsx` function is a lightweight utility for conditionally joining class names together, useful in typescript and TypeScript projects, especially with React.

## Installation

This utility is designed to be integrated directly into your codebase. Simply place the `clsx` function file in your project and import it where needed.

## Usage

Import the `clsx` function into your component:

```typescript
import { clsx } from '@components/utilities/clsx';
```

Use it to conditionally join class names:

```typescript
const buttonClass = clsx(
  'btn',
  { 'btn-primary': isPrimary },
  { 'btn-disabled': isDisabled }
);
```

`btn` will always be applied, `btn-primary` if `isPrimary` is `true`, and `btn-disabled` if `isDisabled` is `true`.

## Arguments

`clsx` accepts any number of arguments, either strings or objects with class names as keys and boolean values indicating whether the class should be included.

## Examples

```typescript
// Strings only
const class1 = clsx('class1', 'class2');

// Strings and objects
const class2 = clsx('class1', { 'class2': true, 'class3': false });

// Multiple objects
const class3 = clsx({ 'class1': true }, { 'class2': isTrue });
```
