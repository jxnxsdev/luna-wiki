---
prev: false
next: false
description: Developer documentation for @luna/lib
---

# `@luna/lib`

`@luna/lib` is the main plugin toolbox in the renderer. Most plugins use it for context menus, playback, media info, Redux hooks, IPC, and safe DOM helpers.

## What it does

- Lets plugins react to TIDAL app actions (`redux.intercept`)
- Lets plugins control playback (`PlayState.play`, `pause`, `next`, `seek`, ...)
- Gives high level media objects (`MediaItem`) instead of raw store payloads
- Adds context menu integration (`ContextMenu.onMediaItem`, `addButton`)
- Wraps IPC listeners with automatic unload handling

## Function reference

### Redux module (`redux`)

- `redux.intercept(actionType | actionType[], unloads, callback, once?)`
  - Listen for one or many Redux action types.
  - Return `true` from callback to cancel dispatch.
- `redux.interceptPromise(actionType, unloads, cancel?)`
  - Wait for the next matching action as a promise.
- `redux.interceptActionResp(trigger, unloads, resolveTypes, rejectTypes?, options?)`
  - Trigger an action and wait for success or fail response actions.
- `redux.actions[...]`
  - Dispatch typed TIDAL/Luna actions (playback, router, queue, etc.).
- `redux.store`
  - Typed Redux store access for reads.

### IPC module (`ipcRenderer`)

- `ipcRenderer.invoke(channel, ...args)`
- `ipcRenderer.send(channel, ...args)`
- `ipcRenderer.on(unloads, channel, listener)`
- `ipcRenderer.once(unloads, channel, listener)`
- `ipcRenderer.onOpenUrl(unloads, listener)`
  - Helper for `tidaluna:` deep link events.

### `ContextMenu`

- `ContextMenu.addButton(unloads)`
  - Creates a reusable context menu button controller.
- `ContextMenu.getCurrent()`
  - Resolves the currently open menu element (or `null`).
- `ContextMenu.onOpen(unloads, ({ event, contextMenu }) => ...)`
  - Runs whenever a context menu opens.
- `ContextMenu.onMediaItem(unloads, ({ mediaCollection, contextMenu }) => ...)`
  - Runs for track/album/playlist style context menus.

### `PlayState`

- Read state:
  - `PlayState.state`, `desiredState`, `playing`
  - `PlayState.currentTime`, `playTime`
  - `PlayState.playQueue`, `shuffle`, `repeatMode`
- Control playback:
  - `PlayState.play(mediaItemId?)`, `pause()`, `next()`, `previous()`
  - `PlayState.moveTo(index)`, `playNext(mediaItemId | mediaItemIds)`
  - `PlayState.seek(seconds)`
  - `PlayState.setShuffle(enabled, shuffleItems?)`
  - `PlayState.setRepeatMode(mode)`
- Events:
  - `PlayState.onState(unloads, callback)`
  - `PlayState.onScrobble(unloads, callback)`

### `MediaItem`

- Static construction/listeners:
  - `MediaItem.fromId(id, contentType?)`
  - `MediaItem.fromPlaybackContext(ctx?)`
  - `MediaItem.fromIsrc(isrc)`
  - `MediaItem.fromIds(ids)` / `fromTMediaItems(items)`
  - `MediaItem.onMediaTransition(unloads, callback)`
  - `MediaItem.onPreload(unloads, callback)`
- Common instance methods:
  - `play()`
  - `title()`, `artists()`, `album()`, `coverUrl(opts?)`, `lyrics()`
  - `playbackInfo(audioQuality?)`, `fetchBestQuality()`
  - `download(path, audioQuality?)`, `downloadProgress()`, `fileExtension(audioQuality?)`
  - `withFormat(unloads, audioQuality, listener)`, `updateFormat(audioQuality?, force?)`

### `StyleTag`

- `new StyleTag(id, unloads, css?)`
- `styleTag.css = "..."`
- `styleTag.add()` / `styleTag.remove()`

### Helpers

- `observe(unloads, selector, callback)`
- `observePromise(unloads, selector, timeoutMs?)`
- `safeTimeout(unloads, callback, delay?)`
- `safeInterval(unloads, callback, delay?)`
- `getCredentials()`

## Practical example (context menu + media)

Pattern used by plugins like QR/share tools and exporters:

```ts
import type { LunaUnload } from "@luna/core";
import { ContextMenu, MediaItem } from "@luna/lib";

export const unloads = new Set<LunaUnload>();
const button = ContextMenu.addButton(unloads);
button.text = "Run Action";

ContextMenu.onMediaItem(unloads, async ({ mediaCollection, contextMenu }) => {
  const first = (await mediaCollection.mediaItems().next()).value as MediaItem | undefined;
  if (!first) return;

  await button.show(contextMenu);
  button.onClick(async () => {
    const title = await first.title();
    console.log("Selected:", title);
  });
});
```

## See also

- [Plugin Settings guide](/development/documentation/guides/plugin-settings)
- [Redux guide](/development/documentation/guides/redux-store)
- [Plugin Unloading guide](/development/documentation/guides/plugin-unloading)
