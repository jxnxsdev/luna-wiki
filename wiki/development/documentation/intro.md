---
prev: false
next: false
description: Introduction to TidaLuna Development Documentation
---

# TidaLuna Development Documentation

If you have not set up your development environment or project yet, please refer to the [Getting Started with TidaLuna Development](/development/getting-started) guide.

## Project Overview

After cloning the base project, you're ready to start developing plugins for TidaLuna. You should see the following structure:

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

These libraries are available to help you build plugins:

1. [`@luna/lib`](/development/documentation/plugins/luna-lib.md) – Core utilities for interacting with the Redux store and other frontend features.
2. [`@luna/ui`](/development/documentation/plugins/luna-ui.md) – Standardized UI components and helpers for user interfaces.
3. [`@luna/dev`](/development/documentation/plugins/luna-dev.md) – Development tools and helpers for building and testing plugins.

## Guides

Explore these step-by-step guides to help you get started and dive deeper:

1. [Simple Hello World Plugin](/development/documentation/guides/hello-world.md) – Create a basic plugin that displays a "Hello, world!" message.
2. [Logging](/development/documentation/guides/logging.md) – Learn how to log messages properly from your plugin.
3. [Plugin Unloading](/development/documentation/guides/plugin-unloading.md) – Handle cleanup and unloading logic for your plugin.
4. [Plugin Settings](/development/documentation/guides/plugin-settings.md) – Build a settings page for your plugin using `Settings.tsx`.
5. [Interacting with the Redux Store](/development/documentation/guides/redux-store.md) – Access and modify Tidal's state from your plugin.
