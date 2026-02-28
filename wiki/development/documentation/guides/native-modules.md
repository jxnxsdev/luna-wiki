---
prev: false
next: false
description: Working with native modules in TidaLuna plugins
---

# Native Modules Guide

Use `.native.ts` files when code needs native or Electron access.

## When to use native code

- filesystem access
- native dialogs
- sockets/process APIs
- privileged operations

## Pattern

1. Create `src/feature.native.ts`
2. Export async functions from it
3. Import and call from renderer plugin code

```ts
// src/feature.native.ts
export async function readStuff() {
  // native context work
  return "ok";
}

// src/index.ts
import { readStuff } from "./feature.native";

const value = await readStuff();
```

## Keep API boundaries clean

- Return serializable values (objects/arrays/strings/numbers/booleans).
- Avoid returning class instances/functions over bridge boundaries.
- Validate user input before passing to native operations.

## Related API

For shared native helpers, use `@luna/lib.native`:

- dialogs: `showOpenDialog`, `showSaveDialog`, `showMessageBox`
- system: `openExternal`, `clipboardWriteText`
- update/relaunch helpers
