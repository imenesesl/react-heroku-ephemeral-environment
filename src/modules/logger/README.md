## `Logger` Class

### Overview

The `Logger` class provides a simple logging functionality with support for including a target identifier and additional arguments. This class is particularly useful for debugging or tracking application flow by logging various messages with contextual information.

### Installation

No additional dependencies are required to use this class, as it utilizes the built-in `console.log` function.

### Usage

#### Creating an Instance of `Logger`

To use the `Logger` class, first create an instance by passing a target identifier. The target can be any string that identifies the source or the context of the logs.

```typescript
import { Logger } from 'path/to/your/Logger';

const target: string = 'MyApp';
const logger: Logger = new Logger(target);
```

#### Logging an Event

To log an event or message, use the `log` method of your `Logger` instance, passing the name of the event and any additional arguments you want to include:

```typescript
logger.log('Event_Name', 'Additional', 'Information', 123);
```

### Methods

#### constructor(target: string)

Creates a new instance of `Logger`.

- `target`: A string representing the target or source of the logs.

#### log(name: string, ...args: unknown[])

Logs a message to the console.

- `name`: The name of the event or message to log.
- `...args`: Additional arguments or information to log.

### Complete Example

```typescript
import { Logger } from 'path/to/your/Logger';

// Create a logger instance
const logger: Logger = new Logger('MyApp');

// Log an event
logger.log('UserLogin', 'User ID:', 12345);
// Output: { name: 'UserLogin', target: 'MyApp' }, { '0': 'User ID:', '1': 12345 }
```

### Customization

You can extend the `Logger` class to integrate with more sophisticated logging mechanisms or third-party services. For instance, you could override the `log` method to send logs to an external logging service or to format the logs differently.