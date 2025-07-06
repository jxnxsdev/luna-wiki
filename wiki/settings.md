---
prev: false
next:
  text: Installing Plugins
  link: /install-plugins
description: Settings and Features of TidaLuna
---

# TidaLuna Settings

TidaLuna by default comes with a set of useful features and settings that can be configured in the Luna Settings menu.
You can access the Luna Settings by clicking the three dots in the top left corner of the TIDAL app and selecting "Luna Settings".
![img](/assets/images/luna-settings.png)

Once you have opened the Luna Settings, you will find a navigation bar at the top of the window. Open the "Settings" tab to access the settings menu.

## Client Update

TidaLuna will automatically check for updates when you launch the TIDAL app. You will get a prompt to update TidaLuna if a new version is available.
You can also manually install updates, older versions and reset TidaLuna to it's default state in the Luna Settings menu.

::: warning
The "Factory Reset" button will delete **all** you settings, plugins and plugin settings.
:::

![img](/assets/images/luna-update-menu.png)

## Feature Flags

These are internal festures of the official TIDAL app. These are usually in developement and / or pre release features only rolled out to a small set of users.
Luna merely exposes these features to the user, so they can be enabled or disabled at will. Luna does not implement these features, so they might not work as expected or at all. You most likely won't receive any support for these features, as they are not part of TidaLuna.
What these features do is not documented, so you will have to try them out yourself.

## Luna Core Plugins

These plugins offer fundamental functionality to TidaLuna and are required for it to work properly. They also expose useful functionality to other plugins. You cannot disable or uninstall these plugins.
Reloading `@luna/ui` will reload the UI and can help if you run into issues with the UI.
For a guide on how to use the `@luna/dev` plugins settings, see the development section of the wiki.
