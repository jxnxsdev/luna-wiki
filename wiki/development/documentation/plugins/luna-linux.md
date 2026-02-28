---
prev: false
next: false
description: Developer documentation for @luna/linux
---

# `@luna/linux`

`@luna/linux` is the Linux integration layer. It connects playback and client events to Linux desktop features through the tidal-hifi bridge.

## What it does

- Sends playback metadata updates for Linux integrations
- Handles global media control actions (play/pause/next/seek/shuffle/repeat)
- Applies Linux custom CSS and themes from bridge settings
- Supports custom hotkey wiring and utility actions
- Exposes settings window open/close helpers

## Function reference

### Exported functions

- `showSettings()`
  - Opens tidal-hifi settings window.
- `hideSettings()`
  - Closes tidal-hifi settings window.

### Diagnostics exports

- `linuxTrace`
- `errSignal`
- `unloads`

## Runtime behavior summary

- Loaded only on Linux platforms by core startup flow.
- Initializes integration side effects via `tidalHifi.ts` on import.
- Uses `PlayState`, `MediaItem`, and `redux` hooks to keep bridge state updated.
- Registers IPC listeners for media control commands.

## Example

```ts
import { showSettings, hideSettings } from "@luna/linux";

showSettings();

// ...later
hideSettings();
```

## Notes

- Guard Linux logic in cross platform plugins.
- Avoid assuming this plugin is available on macOS/Windows.
