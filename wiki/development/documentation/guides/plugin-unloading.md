---
prev: false
next: false
description: Cleanup and unload lifecycle in TidaLuna plugins
---

# Plugin Unloading Guide

Every plugin should clean up DOM nodes, listeners, timers, and external resources on unload.

## Standard unload set

```ts
import type { LunaUnload } from "@luna/core";

export const unloads = new Set<LunaUnload>();
```

Register cleanup functions as soon as you create resources.

## Typical cleanup targets

- DOM elements you append
- `<style>` tags and CSS variables
- `setInterval` / `setTimeout`
- `redux.intercept` listeners
- `ipcRenderer.on` listeners
- external/native windows and sockets

## Example (real pattern)

```ts
const style = document.createElement("style");
document.head.appendChild(style);

const node = document.createElement("div");
node.id = "my-plugin-root";
document.body.appendChild(node);

const timer = setInterval(() => {
  // work
}, 1000);

unloads.add(() => {
  clearInterval(timer);
  style.remove();
  node.remove();
  document.documentElement.style.removeProperty("--my-plugin-var");
});
```

## Helpers that auto-register cleanup

- `@luna/lib.observe(...)`
- `@luna/lib.observePromise(...)`
- `@luna/lib.ipcRenderer.on(...)`
- `@luna/lib.ipcRenderer.once(...)`
- `@luna/lib.safeTimeout(...)`
- `@luna/lib.safeInterval(...)`

## Recommendation

Treat unload support as required. Many users hot reload plugins while developing.