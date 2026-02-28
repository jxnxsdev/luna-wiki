---
prev: false
next: false
description: Developer documentation for @luna/ui
---

# `@luna/ui`

`@luna/ui` is the standard UI toolkit for TidaLuna plugins. Most settings pages in real plugin repos use these components.

## What it does

- Gives you ready to use settings components (`LunaSwitchSetting`, `LunaNumberSetting`, ...)
- Provides consistent Luna styling (`LunaSettings`, `LunaStack`, `lunaMuiTheme`)
- Lets plugins register custom pages via `Page.register(...)`
- Provides a global confirm helper for modal-like confirmation flows

## Function/component reference

### Page API (`classes/Page`)

- `Page.register(name, unloads, component?)`
  - Registers/reuses a page by name and ties lifecycle to unloads.
- `page.open()`
  - Navigates to and opens that page in Luna flow.
- `page.render()`
  - Renders component if it has not rendered yet.

### Settings wrappers (`components/settings/*`)

- `LunaSettings(props)`
  - Main settings container.
- `LunaSwitchSetting(props)`
  - Boolean setting control.
- `LunaTextSetting(props)`
  - Text input setting.
- `LunaNumberSetting(props)`
  - Numeric setting with min/max and `onNumber`.
- `LunaSelectSetting<T>(props)` and `LunaSelectItem`
  - Dropdown/multi-select setting.
- `LunaButtonSetting(props)`
  - Action button row.

### Common controls

- `LunaButton(props)`
- `LunaSwitch(props)`
- `LunaNumber(props)`
- `LunaStack(props)`
- `LunaTitle(props)`
- `LunaTrashButton(props)`
- `SpinningButton(props)`

### Helper

- `confirm(options)` from `@luna/ui/helpers/confirm`
  - Global async confirm prompt.

## Practical settings pattern (from real plugins)

This is the common pattern used in plugins like `SpinnyCover`, `Syncify`, `AudioVisualiser`, and `CustomFonts`:

```tsx
import React from "react";
import { ReactiveStore } from "@luna/core";
import { LunaSettings, LunaSwitchSetting, LunaNumberSetting, LunaButtonSetting } from "@luna/ui";

export const settings = await ReactiveStore.getPluginStorage("MyPlugin", {
  enabled: true,
  speed: 25,
});

export const Settings = () => {
  const [enabled, setEnabled] = React.useState(settings.enabled);
  const [speed, setSpeed] = React.useState(settings.speed);

  return (
    <LunaSettings>
      <LunaSwitchSetting
        title="Enabled"
        checked={enabled}
        onChange={(_, checked) => setEnabled((settings.enabled = checked))}
      />
      <LunaNumberSetting
        title="Speed"
        value={speed}
        min={1}
        max={100}
        onNumber={(value) => setSpeed((settings.speed = value))}
      />
      <LunaButtonSetting title="Reset" onClick={() => setSpeed((settings.speed = 25))} />
    </LunaSettings>
  );
};
```

## Notes

- Prefer `Luna*Setting` components so your plugin looks like the rest of Luna.
- Update both local React state and persistent plugin storage in the same handler.
- Keep complex async actions behind `LunaButtonSetting` so users explicitly trigger them.
- For advanced UX flows, combine settings components with `confirm(...)`.

- See [Plugin Settings guide](/development/documentation/guides/plugin-settings) for full patterns.
