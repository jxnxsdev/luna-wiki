---
prev: false
next: false
description: Developer documentation for @luna/lib.native
---

# `@luna/lib.native`

`@luna/lib.native` is your bridge to native Electron capabilities. Use it for privileged operations and stream or file work that should not run in normal renderer code.

## What it does

- Exposes app control (`update`, `relaunch`)
- Exposes elevation helpers (`needsElevation`, `runElevatedInstall`)
- Exposes dialog/system helpers (open/save/message dialogs, clipboard, external URL open)
- Exposes media stream helpers (`fetchMediaItemStream`) for downloading/tagging track streams

## Function reference

### App + updater

- `pkg()`
  - Returns current app/package metadata.
- `update(...)`
  - Triggers update flow.
- `relaunch()`
  - Restarts client.
- `needsElevation()`
  - Detects whether elevated install path is required.
- `runElevatedInstall(...)`
  - Executes elevated install operation.

### Native messaging / shell

- `sendToRender(channel, ...args)`
- `openExternal(url)`
- `clipboardWriteText(text)`

### Dialog helpers

- `showOpenDialog(options)`
- `showSaveDialog(options)`
- `showMessageBox(options)`
- `showErrorBox(title, content)`

### Streaming helpers

- `fetchMediaItemStream(playbackInfo, options?)`
  - Creates a Node `Readable` from TIDAL playback manifests.
  - Supports FLAC tagging via `options.tags` and init-only DASH reads via `initSegmentOnly`.
- `fetchStream(urls, options?)`
  - Low level async stream fetch generator used by `fetchMediaItemStream`.

## Example

```ts
import { showOpenDialog, openExternal, showMessageBox } from "@luna/lib.native";

const result = await showOpenDialog({
  properties: ["openFile", "openDirectory"],
});

if (!result.canceled && result.filePaths[0]) {
  await openExternal(`file://${result.filePaths[0]}`);
} else {
  await showMessageBox({
    type: "info",
    message: "No file selected",
  });
}
```

## Safety notes

- Keep native actions user-driven and explicit.
- Avoid exposing raw privileged functions to arbitrary plugin UI callbacks.
- Validate paths/inputs before passing to native APIs.
