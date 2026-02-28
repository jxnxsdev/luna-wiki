---
prev: false
next: false
description: Quick reference for core TidaLuna plugin functions
---

# Function Quick Reference

This page is a quick index for the most used core functions. Each row links to the matching section in the detailed docs.

## `@luna/lib`

| Function | What it does | Docs |
|---|---|---|
| `redux.intercept(...)` | Subscribe to one or more Redux action types; can cancel dispatch by returning `true`. | [redux module](/development/documentation/plugins/luna-lib#redux-module-redux) |
| `redux.interceptPromise(...)` | Wait for the next matching Redux action as a promise. | [redux module](/development/documentation/plugins/luna-lib#redux-module-redux) |
| `redux.interceptActionResp(...)` | Trigger an action and await success/fail action responses. | [redux module](/development/documentation/plugins/luna-lib#redux-module-redux) |
| `redux.actions[...]` | Dispatch typed TIDAL/Luna Redux actions. | [redux module](/development/documentation/plugins/luna-lib#redux-module-redux) |
| `ipcRenderer.on(...)` | Register IPC listener with automatic unload cleanup. | [ipc module](/development/documentation/plugins/luna-lib#ipc-module-ipcrenderer) |
| `ipcRenderer.once(...)` | Register one-shot IPC listener with cleanup. | [ipc module](/development/documentation/plugins/luna-lib#ipc-module-ipcrenderer) |
| `ipcRenderer.onOpenUrl(...)` | Handle `tidaluna:` deep-link events. | [ipc module](/development/documentation/plugins/luna-lib#ipc-module-ipcrenderer) |
| `ContextMenu.addButton(...)` | Create a reusable context menu button controller. | [ContextMenu](/development/documentation/plugins/luna-lib#contextmenu) |
| `ContextMenu.onOpen(...)` | Handle generic context menu open events. | [ContextMenu](/development/documentation/plugins/luna-lib#contextmenu) |
| `ContextMenu.onMediaItem(...)` | Handle media context menus (track/album/playlist). | [ContextMenu](/development/documentation/plugins/luna-lib#contextmenu) |
| `PlayState.play(...)` | Start playback (optionally queue/play specific item first). | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `PlayState.pause()` | Pause playback. | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `PlayState.next()` / `previous()` | Skip to next/previous queue item. | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `PlayState.seek(seconds)` | Seek to position in current track. | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `PlayState.setShuffle(...)` | Toggle shuffle mode (with optional queue reshuffle). | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `PlayState.setRepeatMode(...)` | Set repeat mode directly. | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `PlayState.onState(...)` | Listen for playback-state changes. | [PlayState](/development/documentation/plugins/luna-lib#playstate) |
| `MediaItem.fromId(...)` | Resolve media object from item id. | [MediaItem](/development/documentation/plugins/luna-lib#mediaitem) |
| `MediaItem.fromPlaybackContext(...)` | Resolve media from current playback context. | [MediaItem](/development/documentation/plugins/luna-lib#mediaitem) |
| `MediaItem.onMediaTransition(...)` | Listen when currently playing media changes. | [MediaItem](/development/documentation/plugins/luna-lib#mediaitem) |
| `mediaItem.title()` / `artists()` / `album()` / `coverUrl()` | Read rich metadata from media item. | [MediaItem](/development/documentation/plugins/luna-lib#mediaitem) |
| `mediaItem.playbackInfo(...)` | Fetch stream/playback metadata for quality/format work. | [MediaItem](/development/documentation/plugins/luna-lib#mediaitem) |
| `mediaItem.download(...)` | Download media item stream to path. | [MediaItem](/development/documentation/plugins/luna-lib#mediaitem) |
| `new StyleTag(...)` | Create managed style tag bound to unload lifecycle. | [StyleTag](/development/documentation/plugins/luna-lib#styletag) |
| `observe(...)` / `observePromise(...)` | Watch DOM nodes by selector safely. | [helpers](/development/documentation/plugins/luna-lib#helpers) |
| `safeTimeout(...)` / `safeInterval(...)` | Timer helpers with unload cleanup. | [helpers](/development/documentation/plugins/luna-lib#helpers) |
| `getCredentials()` | Resolve current TIDAL credentials module values. | [helpers](/development/documentation/plugins/luna-lib#helpers) |

## `@luna/ui`

| Function / Component | What it does | Docs |
|---|---|---|
| `Page.register(name, unloads, component?)` | Register/reuse a custom Luna page. | [Page API](/development/documentation/plugins/luna-ui#page-api-classespage) |
| `page.open()` | Navigate and open a registered page. | [Page API](/development/documentation/plugins/luna-ui#page-api-classespage) |
| `LunaSettings` | Standard container for plugin settings UI. | [settings wrappers](/development/documentation/plugins/luna-ui#settings-wrappers-componentssettings) |
| `LunaSwitchSetting` | Toggle row for boolean settings. | [settings wrappers](/development/documentation/plugins/luna-ui#settings-wrappers-componentssettings) |
| `LunaTextSetting` | Text input row for string settings. | [settings wrappers](/development/documentation/plugins/luna-ui#settings-wrappers-componentssettings) |
| `LunaNumberSetting` | Number input row with bounds/callback. | [settings wrappers](/development/documentation/plugins/luna-ui#settings-wrappers-componentssettings) |
| `LunaSelectSetting` + `LunaSelectItem` | Select/multi-select setting row. | [settings wrappers](/development/documentation/plugins/luna-ui#settings-wrappers-componentssettings) |
| `LunaButtonSetting` | Action button row (login, reset, sync, open). | [settings wrappers](/development/documentation/plugins/luna-ui#settings-wrappers-componentssettings) |
| `confirm(options)` | Global confirm modal helper returning result promise. | [helper](/development/documentation/plugins/luna-ui#helper) |

## `@luna/lib.native`

| Function | What it does | Docs |
|---|---|---|
| `pkg()` | Resolve app/package metadata. | [app + updater](/development/documentation/plugins/luna-lib-native#app--updater) |
| `update(...)` | Trigger app update flow. | [app + updater](/development/documentation/plugins/luna-lib-native#app--updater) |
| `relaunch()` | Relaunch client process. | [app + updater](/development/documentation/plugins/luna-lib-native#app--updater) |
| `needsElevation()` | Check if elevated operation is needed. | [app + updater](/development/documentation/plugins/luna-lib-native#app--updater) |
| `runElevatedInstall(...)` | Execute elevated install/update operation. | [app + updater](/development/documentation/plugins/luna-lib-native#app--updater) |
| `showOpenDialog(...)` / `showSaveDialog(...)` | Open native file dialogs. | [dialog helpers](/development/documentation/plugins/luna-lib-native#dialog-helpers) |
| `showMessageBox(...)` / `showErrorBox(...)` | Show native message/error dialogs. | [dialog helpers](/development/documentation/plugins/luna-lib-native#dialog-helpers) |
| `clipboardWriteText(...)` | Copy text through native clipboard API. | [native messaging / shell](/development/documentation/plugins/luna-lib-native#native-messaging--shell) |
| `openExternal(url)` | Open URL with OS shell handler. | [native messaging / shell](/development/documentation/plugins/luna-lib-native#native-messaging--shell) |
| `fetchMediaItemStream(...)` | Build tagged/decrypted readable stream from playback info. | [streaming helpers](/development/documentation/plugins/luna-lib-native#streaming-helpers) |
| `fetchStream(...)` | Low level stream fetch generator (urls to chunks). | [streaming helpers](/development/documentation/plugins/luna-lib-native#streaming-helpers) |

## `@luna/dev`

| Function | What it does | Docs |
|---|---|---|
| `startReduxLog(regex, handler)` | Start Redux action logging with regex filter. | [logging controls](/development/documentation/plugins/luna-dev#logging-controls) |
| `stopReduxLog()` | Stop Redux logging session. | [logging controls](/development/documentation/plugins/luna-dev#logging-controls) |
| `startNativeIPCLog()` / `stopNativeIPCLog()` | Toggle Native to Render IPC logging. | [logging controls](/development/documentation/plugins/luna-dev#logging-controls) |
| `startRenderIpcLog()` / `stopRenderIpcLog()` | Toggle Render to Native IPC logging. | [logging controls](/development/documentation/plugins/luna-dev#logging-controls) |
| `getNativeIPCEvents()` / `getRenderIPCEvents()` | Get event maps used by IPC loggers. | [IPC event map helpers](/development/documentation/plugins/luna-dev#ipc-event-map-helpers) |
| `startNativeDebugging()` | Enable native debug attach flow. | [native debugger helper](/development/documentation/plugins/luna-dev#native-debugger-helper) |

## `@luna/linux`

| Function | What it does | Docs |
|---|---|---|
| `showSettings()` | Open Linux bridge settings window. | [exported functions](/development/documentation/plugins/luna-linux#exported-functions) |
| `hideSettings()` | Close Linux bridge settings window. | [exported functions](/development/documentation/plugins/luna-linux#exported-functions) |

## Related practical guides

- [Plugin Settings](/development/documentation/guides/plugin-settings)
- [Redux Store](/development/documentation/guides/redux-store)
- [Context Menu](/development/documentation/guides/context-menu)
- [Native Modules](/development/documentation/guides/native-modules)
- [Plugin Unloading](/development/documentation/guides/plugin-unloading)
- [Logging](/development/documentation/guides/logging)
