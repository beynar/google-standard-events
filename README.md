# Google standard events

This is a simple types-only library about the Google-recommended events for ecommerce, as referenced [here](https://developers.google.com/analytics/devguides/collection/ga4/reference/events).

## Usage

```typescript
// With Tag Manager
import type GOOGLE_STANDARDS_EVENTS from "google-standard-events";

export const sendEvent = <E extends GOOGLE_STANDARDS_EVENTS.EVENTS>(
  event: E,
  ecommerce: GOOGLE_STANDARDS_EVENTS.PARAMS<E>
) => {
  return dataLayer.push({
    event,
    ecommerce
  });
};
```

```typescript
// With Google tag
import type GOOGLE_STANDARDS_EVENTS from "google-standard-events";

export const sendEvent = <E extends GOOGLE_STANDARDS_EVENTS.EVENTS>(
  event: E,
  params: GOOGLE_STANDARDS_EVENTS.PARAMS<E>
) => {
  return gtag("event", event, params);
};
```
