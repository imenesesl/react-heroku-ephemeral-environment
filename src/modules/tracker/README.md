## `Tracker` Class

### Overview

The `Tracker` class is designed to facilitate the tracking of user events and associated data to the Segment platform (`https://api.segment.io/v1`). It handles asynchronous network requests for sending tracking data and logs the outcomes of these operations.

### Usage

#### Creating an Instance of `Tracker`

To use the `Tracker` class, first create an instance of the class by passing your Segment write key:

```typescript
import { Tracker } from '@modules/tracker';

const writeKey: string = 'your_write_key';
const tracker: Tracker = new Tracker(writeKey);
```

#### Sending a Tracking Event

To send a tracking event, use the `track` method of your `Tracker` instance, passing the event details:

```typescript
tracker.track({
  event: 'Event_Name',
  userId: 'user_id',
  properties: {
    // Event properties
    property1: 'value1',
    property2: 'value2'
  },
  type: 'track' // Request type, usually 'track'
});
```

### Methods

#### constructor(writeKey: string)

Creates a new instance of `Tracker`.

- `writeKey`: The write key for authentication with the Segment API.

#### track(args: ICallbackArgs)

Sends a tracking request to Segment.

- `args`: An object containing the event details. It should follow the `ICallbackArgs` interface, which includes `event`, `userId`, `properties`, and `type`.

### Complete Example

```typescript
import { Tracker } from '@modules/tracker';

// Create a tracker instance
const tracker: Tracker = new Tracker('your_write_key');

// Send an event
tracker.track({
  event: 'Purchase_Made',
  userId: '12345',
  properties: {
    price: 100,
    product: 'JavaScript Book'
  },
  type: 'track'
});
```

### Error Handling

The `track` method internally handles request errors. In case of an error, these are logged using the imported `logger`. Ensure your logger is appropriately set up to monitor these events.