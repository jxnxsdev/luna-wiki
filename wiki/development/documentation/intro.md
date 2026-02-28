---
prev: false
next: false
description: Introduction to TidaLuna Development Documentation
---

# TidaLuna Development Documentation

If you have not set up your project yet, start here: [Getting Started with TidaLuna Development](/development/getting-started).

## Project Overview

After cloning the base project, you are ready to build plugins. You should see this structure:

- `README.md`: Contains documentation and usage information for your plugin.
- `package.json`: Defines metadata for your plugin, such as name, version, and dependencies.
- `src/`: Contains the source code of your plugin. This typically includes:
  - `index.ts`: The main entry point for your plugin. This file runs in the Electron frontend and is executed when the plugin is loaded.
  - `Settings.tsx`: Defines the settings page UI for your plugin, also rendered in the Electron frontend.

### Backend Integration

If you need to execute code in the Electron backend, create a new file in the `src/` directory with a `.native.ts` extension. Then import it in `index.ts` or any other file. Functions exported from `.native.ts` files will be executed in the Electron backend.

Keep in mind:

- Data between frontend and backend is passed via IPC (Inter-Process Communication).
- Only **serializable** values (strings, numbers, booleans, arrays, objects, etc.) can be passed.
- Functions, classes, or non-serializable objects cannot be transmitted.

## Core Luna Libraries

These are the core libraries you will use most:

1. [`@luna/lib`](/development/documentation/plugins/luna-lib): core renderer tools like Redux hooks, IPC wrappers, and helper classes.
2. [`@luna/lib.native`](/development/documentation/plugins/luna-lib-native): native bridge APIs for dialogs, update/relaunch, elevation, and stream helpers.
3. [`@luna/ui`](/development/documentation/plugins/luna-ui): shared React and MUI components, page helpers, and theme pieces.
4. [`@luna/dev`](/development/documentation/plugins/luna-dev): debugging tools for IPC and Redux logging.
5. [`@luna/linux`](/development/documentation/plugins/luna-linux): Linux specific integrations.

## Guides

Use these guides when you are building real plugins:

1. [Function Quick Reference](/development/documentation/guides/function-reference): quick lookup table for core functions.
2. [Plugin Settings](/development/documentation/guides/plugin-settings): settings patterns used in real plugins.
3. [Interacting with the Redux Store](/development/documentation/guides/redux-store): listen for actions and dispatch safely.
4. [Context Menu Actions](/development/documentation/guides/context-menu): add menu actions for tracks, albums, and playlists.
5. [Native Modules](/development/documentation/guides/native-modules): run code in `.native.ts` files.
6. [Plugin Unloading](/development/documentation/guides/plugin-unloading): clean up DOM, timers, listeners, and native resources.
7. [Logging](/development/documentation/guides/logging): add useful logs without spamming users.
