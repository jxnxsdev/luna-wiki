---
prev: false
next: false
description: Interacting with the TIDAL Redux store from plugins
---

# Redux Store Guide

Most runtime integrations in TidaLuna plugins come from Redux actions.

## Observe actions

```ts
import { redux } from "@luna/lib";
import type { LunaUnload } from "@luna/core";

const unloads = new Set<LunaUnload>();

redux.intercept("router/NAVIGATED", unloads, (payload) => {
  console.log("Route:", payload.pathname);
});
```

## Observe one action as a promise

```ts
const payload = await redux.interceptPromise("contextMenu/OPEN", unloads);
```

## Dispatch actions

```ts
redux.actions["playbackControls/PLAY"]();
redux.actions["playQueue/MOVE_NEXT"]();
```

## Request/response action flow

```ts
const result = await redux.interceptActionResp(
  () => redux.actions["content/LOAD_SINGLE_MEDIA_ITEM"]({ id: 123, itemType: "track" }),
  unloads,
  ["content/LOAD_SINGLE_MEDIA_ITEM_SUCCESS"],
  ["content/LOAD_SINGLE_MEDIA_ITEM_FAIL"],
);
```

## Playback focused API (recommended)

For playback control, prefer `PlayState` over raw action dispatch:

- `PlayState.play()`
- `PlayState.pause()`
- `PlayState.next()`
- `PlayState.previous()`
- `PlayState.seek(seconds)`

This usually keeps code simpler and less fragile.
