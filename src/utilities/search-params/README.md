# SearchParams Utility

The `SearchParams` utility class provides a streamlined interface for interacting with the URL's query parameters. It simplifies the process of retrieving values from the query string of the current page's URL.

## Features

- **Simplified Query Parameter Access**: Offers a straightforward method to get the value of specific query parameters from the current URL.
- **URLSearchParams Integration**: Leverages the `URLSearchParams` Web API for parsing the query string, ensuring reliable and standardized behavior.

## Usage

To use the `SearchParams` utility, simply call the `get` static method with the name of the query parameter you wish to retrieve. The method returns the value of the parameter if it exists, or `null` if it does not.

```typescript
const value = SearchParams.get('myParam');
```

If the current URL is `http://example.com/?myParam=value`, the above call would return `'value'`.

## Methods

### `static get(query: string): string | null`

Retrieves the value of a specified query parameter from the current URL's query string.

- `query`: The name of the query parameter whose value you want to retrieve.

## How It Works

The utility uses a private static method `urlParams` to create a `URLSearchParams` object from the current URL's query string. The `get` method then uses this object to fetch the value of the desired query parameter.

### `private static urlParams(): URLSearchParams`

A helper method that parses the current URL's query string into a `URLSearchParams` object, facilitating easy access to individual query parameters.

## Example

Assuming the current URL is `http://example.com/?page=2&filter=active`, you can retrieve the value of the `page` parameter as follows:

```typescript
const page = SearchParams.get('page'); // Returns '2'
```
