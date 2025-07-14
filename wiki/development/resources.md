---
prev:
  text: Getting Started
  link: /development/getting-started
next: false
description: Useful resources for TidaLuna development
---

# Resources for TidaLuna Development

The Tidal desktop app is built using Electron, TypeScript, Redux, and React. The app is organized into several parts:

- **Electron Frontend**: This is essentially [listen.tidal.com](https://listen.tidal.com) embedded in an Electron shell, with additional features such as native audio playback.
- **Electron Backend**: Contains platform specific code for TidaLuna, including native playback logic and system integration.
- **Tidal Player Binary**: A separate binary responsible for audio playback. It's launched as a child process from the Electron backend and communicates with the frontend via IPC.

### How Tidal Works Under the Hood

Tidal uses the Redux architecture, where the entire application state is centralized in a single store. For example, the currently playing track is stored in this Redux store. This setup not only makes it easy to access or update the current track but also simplifies UI updates and enables plugin developers to interact with and modify the app state.

The Redux store is exposed through the `@luna/lib` package, one of the core libraries of TidaLuna. This package offers utilities to interact with the store and other internal systems, making plugin development much easier.

### Useful Links

Documentation for `@luna/lib` and other core TidaLuna packages is available in the [TidaLuna development Documentation](/development/documentation/intro.md) section of this wiki. It provides an overview of available APIs and instructions on how to use them in your plugins.
