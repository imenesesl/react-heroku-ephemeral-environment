# Internationalization (i18n) System

This system provides a simple yet flexible solution for internationalizing your React application. It leverages the React context API to provide localization records to your components and a custom hook for easy access and translation of text.

## Components and Hooks

### `I18nProvider`

This component makes localization records available to any nested components that use the `useI18n` hook. It should wrap your application or component tree where internationalization is needed.

#### Props

- `records`: An object containing localization keys and their corresponding translations. These records are then accessible to any child components through the `useI18n` hook.

### `useI18n` Hook

This custom hook provides access to the `I18n` instance, allowing components to retrieve translated text based on the current localization records and language settings.

#### Methods

- `tr`: A method to translate a given key using the current localization records. It can optionally replace template strings in the translation with provided arguments.

## Setup

First, wrap your application or the part of your application that requires internationalization with the `I18nProvider`:

```tsx
import { I18nProvider } from '@modules/i18n';

const App = () => {
  const records = {
    en: {
      greeting: 'Hello, {name}!',
    },
  };

  return (
    <I18nProvider records={records}>
      <YourComponentTree />
    </I18nProvider>
  );
};
```

Then, use the `useI18n` hook in your components to access and use translations:

```tsx
import { useI18n } from '@modules/i18n';

const GreetingComponent = () => {
  const i18n = useI18n();
  const greeting = i18n.tr('greeting', { name: 'World' });

  return <div>{greeting}</div>;
};
```