---
prev: false
next: false
description: Logging and diagnostics for TidaLuna plugins
---

# Logging Guide

Use `Tracer` from `@luna/core` for clear plugin logs.

## Basic setup

```ts
import { Tracer, type LunaUnload } from "@luna/core";

export const unloads = new Set<LunaUnload>();
export const { trace, errSignal } = Tracer("[MyPlugin]");
```

## Common patterns

- `trace.log(...)` for info
- `trace.warn(...)` for recoverable issues
- `trace.err.withContext("myFn")(err)` for caught errors
- `trace.err.withContext("myFn").throw(err)` to log and throw

## Logging Redux actions during development

```ts
import { startReduxLog, stopReduxLog } from "@luna/dev";

await startReduxLog(/router\/.*/, (payload, type) => {
  trace.log("Redux", type, payload);
});

// later
await stopReduxLog();
```

## Logging IPC traffic

```ts
import { startNativeIPCLog, stopNativeIPCLog, startRenderIpcLog, stopRenderIpcLog } from "@luna/dev";

await startNativeIPCLog();
await startRenderIpcLog();

// cleanup
await stopNativeIPCLog();
await stopRenderIpcLog();
```

## Recommendation

Keep high volume logs behind settings toggles so users are not flooded with logs.