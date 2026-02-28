---
prev: false
next: false
description: Developer documentation for @luna/dev
---

# `@luna/dev`

`@luna/dev` is the built in debugging toolkit. It helps you inspect Redux actions, IPC traffic, and native debug state while you build plugins.

## What it does

- Live logs for Native to Render IPC channels
- Live logs for Render to Native IPC channels
- Regex-filtered Redux action logging
- Native debugger activation helper
- Built-in settings panel to toggle all of the above

## Function reference

### Logging controls

- `startReduxLog(regex, handler)`
- `stopReduxLog()`
- `startNativeIPCLog()`
- `stopNativeIPCLog()`
- `startRenderIpcLog()`
- `stopRenderIpcLog()`

### IPC event map helpers

- `getNativeIPCEvents()`
- `getRenderIPCEvents()`

### Native debugger helper

- `startNativeDebugging()`
  - Calls native debug attach flow (used by built-in dev settings page).

### Shared diagnostics state

- `trace`, `errSignal`
- `storage` (dev settings backing store)
- `Settings` React component

## Example

```ts
import { startReduxLog, stopReduxLog, trace } from "@luna/dev";

await startReduxLog(/router\/.*/, (payload, type) => {
  trace.log("Redux", type, payload);
});

// later
await stopReduxLog();
```

## Notes

- Use narrow regex filters when logging Redux actions in real sessions.
- Stop loggers on unload/reconfigure to avoid noisy output.
- Native debugger state may require restart to fully reset.
