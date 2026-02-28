---
prev: false
next:
  text: Installing TidaLuna
  link: /install/installing
description: Legacy installer guide for versions 3.0.0 and below
---

# Legacy Installer Guide (v3.0.0 and below)

This page contains the old installer workflow for TidaLuna Installer versions `3.0.0` and below.
Use the current guides for newer versions:

- [Installing on Windows](/install/windows)
- [Installing on Linux](/install/linux)
- [Installing on MacOS](/install/mac)

## Legacy Behavior

Older installer versions launched a local web UI and usually opened your browser at `http://localhost:3013`.
If the browser did not open automatically, you had to open this URL manually.

## Legacy Installation Steps

1. Launch the legacy TidaLuna installer executable/binary.
2. Open `http://localhost:3013` in your browser if it does not open automatically.
3. Select a release channel and version.
4. (Optional) Configure advanced options like installation path.
5. Click **Install** or **Reinstall**.
6. Wait for installation to complete, then open TIDAL and verify **Luna Settings** appears.

## Legacy Notes

- Windows SmartScreen warnings can still appear for older unsigned binaries.
- Some legacy packages used archive formats (`.zip`, `.tar.xz`, `.tar.gz`) instead of the newer direct app/package formats.
- If you are on Windows, do not use the Microsoft Store version of TIDAL.
