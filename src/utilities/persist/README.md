# Persist Utility

The `Persist` utility class provides a straightforward interface for storing and retrieving data from the browser's localStorage, with an added layer of namespacing to avoid key collisions. It uses a utility-specific prefix for each key to ensure uniqueness and provides error logging for any issues encountered during data storage or retrieval.

## Features

- **Namespaced Storage**: Automatically prefixes keys with a specified namespace to avoid key collisions in localStorage.
- **Type-Safe Retrieval**: Safely retrieves and parses stored JSON data, ensuring the correct type is returned.
- **Error Logging**: Logs errors encountered during data storage or retrieval for easier debugging.

## Usage

### Storing Data

To store data in localStorage, use the `Persist.set` method. This method takes a key and the data to be stored. The data is automatically serialized to JSON.

```typescript
Persist.set('myKey', { foo: 'bar' });
```

### Retrieving Data

To retrieve data from localStorage, use the `Persist.get` method. Specify the key of the data to retrieve and the method will return the parsed data as its original type, or `null` if the key doesn't exist or an error occurs.

```typescript
const myData = Persist.get<MyType>('myKey');
```

## Methods

### `static get<T>(key: string): T | null`

Retrieves and parses the JSON data stored in localStorage under the namespaced key. If the key does not exist, or if an error occurs during retrieval or parsing, `null` is returned.

- `key`: The key for the stored data, without the namespace prefix.

### `static set(key: string, data: unknown): void`

Serializes the provided data to JSON and stores it in localStorage under the namespaced key. If `null` or an undefined value is provided, or if an error occurs during serialization or storage, the method fails silently and logs the error.

- `key`: The key under which to store the data, without the namespace prefix.
- `data`: The data to be stored. This can be any value that is serializable to JSON.

## Error Handling

The `Persist` utility logs errors to the console if any issues occur during the storage or retrieval process, using a provided `logger` object. This allows for easier tracking and debugging of issues related to localStorage operations.
