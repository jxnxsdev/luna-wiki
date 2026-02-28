---
prev: false
next: false
description: Adding context menu actions in TidaLuna plugins
---

# Context Menu Guide

Use `ContextMenu` from `@luna/lib` to add actions to track/album/playlist menus.

## Minimal pattern

```ts
import type { LunaUnload } from "@luna/core";
import { ContextMenu } from "@luna/lib";

export const unloads = new Set<LunaUnload>();
const actionButton = ContextMenu.addButton(unloads);
actionButton.text = "My Action";

ContextMenu.onMediaItem(unloads, async ({ mediaCollection, contextMenu }) => {
  await actionButton.show(contextMenu);
  actionButton.onClick(async () => {
    const first = await mediaCollection.mediaItems().next();
    if (first.value) {
      console.log("Selected media item", first.value.id);
    }
  });
});
```

## Useful callbacks

- `ContextMenu.onOpen(...)` for generic menu open handling
- `ContextMenu.onMediaItem(...)` for media-specific menu actions

## Practical tips

- Reuse one button instance; only show it when menu opens.
- Keep click handlers fast; offload expensive operations to async functions.
- Add all cleanup via `unloads`.
