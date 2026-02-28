---
prev: false
next: false
description: Building plugin settings pages in TidaLuna
---

# Plugin Settings Guide

This guide shows how to build settings pages like the ones in `jxnxsdev/luna-plugins` (`SpinnyCover`, `AudioVisualiser`, `Syncify`, `CustomFonts`).

## 1) Create persistent settings storage

```ts
import { ReactiveStore } from "@luna/core";

export const settings = await ReactiveStore.getPluginStorage("MyPlugin", {
  enabled: true,
  speed: 25,
  mode: "default",
});
```

Use this pattern for all persisted settings. Keep defaults close to the settings definition.

## 2) Build a `Settings` component

```tsx
import React from "react";
import {
  LunaSettings,
  LunaSwitchSetting,
  LunaNumberSetting,
  LunaSelectSetting,
  LunaSelectItem,
  LunaButtonSetting,
} from "@luna/ui";

export const Settings = () => {
  const [enabled, setEnabled] = React.useState(settings.enabled);
  const [speed, setSpeed] = React.useState(settings.speed);
  const [mode, setMode] = React.useState(settings.mode);

  return (
    <LunaSettings>
      <LunaSwitchSetting
        title="Enabled"
        desc="Enable or disable this feature."
        checked={enabled}
        onChange={(_, checked) => setEnabled((settings.enabled = checked))}
      />

      <LunaNumberSetting
        title="Speed"
        desc="Controls update speed."
        min={1}
        max={100}
        value={speed}
        onNumber={(value) => setSpeed((settings.speed = value))}
      />

      <LunaSelectSetting
        title="Mode"
        value={mode}
        onChange={(event: any) => setMode((settings.mode = event.target.value))}
      >
        <LunaSelectItem value="default">Default</LunaSelectItem>
        <LunaSelectItem value="advanced">Advanced</LunaSelectItem>
      </LunaSelectSetting>

      <LunaButtonSetting
        title="Reset"
        desc="Restore default values"
        onClick={() => {
          setEnabled((settings.enabled = true));
          setSpeed((settings.speed = 25));
          setMode((settings.mode = "default"));
        }}
      />
    </LunaSettings>
  );
};
```

## 3) Export settings UI from plugin entry

In `src/index.ts`:

```ts
export { Settings } from "./Settings";
```

Without this export, the page will not show in Luna Settings.

## 4) Real world patterns to copy

- **Inline persistence in handlers**: `setX((settings.x = value))`
- **Derived side effects** (SpinnyCover/AudioVisualiser style): update CSS variables or runtime behavior right after setting changes.
- **Complex forms** (Syncify style): keep UI state in React and sync it to `settings` on each interaction.
- **Action buttons**: use `LunaButtonSetting` for login, refresh, sync, reset, or open-window flows.

## 5) Common mistakes

- Updating React state but not `settings` (changes disappear after restart).
- Updating `settings` but forgetting to update local React state (UI desync).
- Not exporting `Settings` from `index.ts`.
- Putting expensive async operations directly in render.

## 6) When to use plain React inputs

Use Luna components by default. Use custom inputs only if you need behavior that `Luna*Setting` does not support.
